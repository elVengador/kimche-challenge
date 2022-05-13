import React from 'react'
import styled from 'styled-components'
import { colors, fonts } from '../../properties.styles'
import { Country } from '../../schemas'
import { CountryCard } from '../CountryCard/CountryCard'

export interface CountriesSet {
    title: string,
    countries: Country[],
}

interface CountriesSetProps {
    countriesSet: CountriesSet
}

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

export const CountriesSet = ({ countriesSet }: CountriesSetProps) => {



    if (!countriesSet.countries.length) { return null }

    return (
        <CountriesSetStyled>
            <CountriesSetTitleStyled>{countriesSet.title}</CountriesSetTitleStyled>
            <CountriesStyled>
                {
                    countriesSet.countries.map((cur, idx) => <CountryCard key={idx} country={cur} />)
                }
            </CountriesStyled>
        </CountriesSetStyled>
    )
}
