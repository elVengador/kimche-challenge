import { type } from '@testing-library/user-event/dist/types/setup/directApi'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Button } from '../components/Button/Button'
import { CountryCard } from '../components/CoutryCard/CountryCard'
import { Searcher } from '../components/Searcher/Searcher'
import { colors, fonts } from '../properties.styles'
import { Country } from '../schemas'

type TypeSearch = 'CONTINENT' | 'LANGUAGE'

const myCountry: Country = {
    "code": "CL",
    "name": "Chile",
    "native": "Chile",
    "phone": "56",
    "emoji": "🇨🇱",
    "emojiU": "U+1F1E8 U+1F1F1",
    "continent": {
        "code": "SA",
        "name": "South America",
        "countries": []
    },
    "capital": "Santiago",
    "currency": "CLF,CLP",
    "languages": [
        {
            "code": "es",
            "name": "Spanish",
            "native": "Español",
            "rtl": false
        }
    ],
    "states": []
}

interface CountriesSet {
    title: string,
    countries: Country[]
}

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

const CountriesSetStyled = styled.div`
    padding: 20px 0px;
`
const CountriesSetTitleStyled = styled.h2`
    padding: 30px 0px;
    color: ${colors.foreground};
    font-size: ${fonts.fontLG};
    font-weight: ${fonts.fontWeight600};
`

const CountriesStyled = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 50px;
    row-gap: 30px;
    @media (min-width: 600px) {
        grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 900px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`

export const CountrySearch = () => {

    const countriesSets: CountriesSet[] = [
        {
            title: 'South America',
            countries: [myCountry, myCountry, myCountry, myCountry, myCountry, myCountry, myCountry]
        },
        {
            title: 'South America',
            countries: [myCountry]
        },
        {
            title: 'South America',
            countries: [myCountry]
        },
        {
            title: 'South America',
            countries: [myCountry]
        },
        {
            title: 'South America',
            countries: [myCountry]
        },
    ]

    const [searchValue, setSearchValue] = useState('')
    const [typeSearch, setTypeSearch] = useState<TypeSearch>('CONTINENT')

    // useEffect(() => {

    // }, [searchValue, typeSearch])

    const CountriesSet = ({ countriesSet }: { countriesSet: CountriesSet }) => <CountriesSetStyled>
        <CountriesSetTitleStyled>{countriesSet.title}</CountriesSetTitleStyled>
        <CountriesStyled>
            {countriesSet.countries.map((cur, idx) => <CountryCard key={idx} country={cur} />)}
        </CountriesStyled>
    </CountriesSetStyled>

    return (
        <CountrySearchStyled>
            <TitleStyled>Country Search</TitleStyled>
            <Searcher value={searchValue} onChange={setSearchValue} />
            <OptionsStyled>
                <Button text='Continent' onClick={() => setTypeSearch('CONTINENT')} stateButton={typeSearch === 'CONTINENT' ? 'ACTIVE' : 'DEFAULT'} />
                <Button text='Language' onClick={() => setTypeSearch('LANGUAGE')} stateButton={typeSearch === 'LANGUAGE' ? 'ACTIVE' : 'DEFAULT'} />
            </OptionsStyled>
            {
                countriesSets.map((cur, idx) => <CountriesSet key={idx} countriesSet={cur} />)
            }
        </CountrySearchStyled>
    )
}
