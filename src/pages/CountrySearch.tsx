import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import { Button } from '../components/Button/Button'
import { Searcher } from '../components/Searcher/Searcher'
import { GET_COUNTRIES } from '../graphql/queries/getCountries.query'
import { colors, fonts } from '../properties.styles'
import { Country } from '../schemas'
import { CountriesSet } from '../components/CountriesSet/CountriesSet'

type TypeSearch = 'CONTINENT' | 'LANGUAGE'



const CountrySearchStyled = styled.div`
    max-width: 1000px;
    margin: auto;
    padding: 84px 10px;
`

const TitleStyled = styled.h1`
    color: ${colors.foreground};
    font-size: ${fonts.fontXL};
    text-align: center;
    margin-bottom: 60px;
`
const OptionsStyled = styled.div`
    max-width: 430px;
    height: 74px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 30px;
`

export const CountrySearch = () => {

    const [searchValue, setSearchValue] = useState('')
    const [typeSearch, setTypeSearch] = useState<TypeSearch>('CONTINENT')
    const [countriesSets, setCountriesSet] = useState<CountriesSet[]>([])
    const { loading, error, data } = useQuery<{ countries: Country[] }>(GET_COUNTRIES);

    const getPreviousGroup = (groups: CountriesSet[], keyValue: string): CountriesSet => {
        const foundGroup = groups.find(cur => cur.title === keyValue)
        return foundGroup ? foundGroup : { title: keyValue, countries: [] }
    }
    const getKeyValue = (country: Country, groupBy: TypeSearch): string => {
        if (groupBy === 'CONTINENT') { return country.continent.name }
        if (groupBy === 'LANGUAGE') { return country.languages[0]?.name || '' }
        return ''
    }

    const getFilteredCountriesSet = (groups: CountriesSet[], keyValue: string) => groups.filter(cur => cur.title !== keyValue)

    const countriesToCountriesSets = (countries: Country[], groupBy: TypeSearch): CountriesSet[] => {
        const result = countries.reduce((acu: CountriesSet[], cur: Country) => {
            const keyValue = getKeyValue(cur, groupBy)
            if (!keyValue) { return acu }

            const previousGroup = getPreviousGroup(acu, keyValue)

            previousGroup.countries.push(cur)
            const filteredCountriesSet = getFilteredCountriesSet(acu, keyValue)
            return [...filteredCountriesSet, { ...previousGroup }]
        }, [])
        return result
    }

    useEffect(() => {
        if (!data) { return }

        const result = countriesToCountriesSets(data.countries, typeSearch)
        setCountriesSet(result)
    }, [searchValue, typeSearch, data])

    if (error) {
        // here we can manage error
        // - register error in our logs
    }

    return (
        <CountrySearchStyled>
            <TitleStyled>Country Search</TitleStyled>
            <Searcher value={searchValue} onChange={setSearchValue} />
            <OptionsStyled>
                <Button text='Continent' onClick={() => setTypeSearch('CONTINENT')} stateButton={typeSearch === 'CONTINENT' ? 'ACTIVE' : 'DEFAULT'} />
                <Button text='Language' onClick={() => setTypeSearch('LANGUAGE')} stateButton={typeSearch === 'LANGUAGE' ? 'ACTIVE' : 'DEFAULT'} />
            </OptionsStyled>
            {error && <div>Ups!, Some error happen</div>}
            {
                loading && <div>Loading <FontAwesomeIcon icon={faSpinner} spin={true} /></div>
            }
            {
                !loading && countriesSets.map((cur, idx) => <CountriesSet key={idx} countriesSet={cur} searchValue={searchValue} />)
            }
        </CountrySearchStyled>
    )
}
