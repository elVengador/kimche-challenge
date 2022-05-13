import React from 'react'
import { faCoins, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import { fonts, colors } from '../../properties.styles'
import { Country } from '../../schemas'
import { Card } from '../Card/Card'

const TitleStyled = styled.h1`
    padding-bottom: 15px;
    color: ${colors.foreground};
    font-size: ${fonts.fontMD};
    font-weight: ${fonts.fontWeight600};
`

const InfoStyled = styled.ul`
    color: ${colors.foreground};
    font-size: ${fonts.fontMD};
    font-weight: ${fonts.fontWeight300};
    list-style: none;
`

const InfoName = styled.span`
    font-weight: ${fonts.fontWeight600};
`
interface CountryCardProps {
    country: Country
}

export const CountryCard = ({ country }: CountryCardProps) => {
    const unknownWord = '??'

    const { name, emoji, code, languages, capital, continent, phone, currency } = country

    const getLanguagesText = () => languages.map(cur => `${cur.name} (${cur.native})`).join(', ')


    return (
        <Card>
            <>
                <TitleStyled>{emoji} {name} [{code}]</TitleStyled>
                <InfoStyled>
                    <li><InfoName>Idiomas:</InfoName> {getLanguagesText() || unknownWord}</li>
                    <li><InfoName>Capital:</InfoName> {capital || unknownWord}</li>
                    <li><InfoName>Continente:</InfoName> {continent.name || unknownWord}</li>
                    <li><FontAwesomeIcon icon={faPhone} /> +{phone || unknownWord} <FontAwesomeIcon icon={faCoins} /> {currency || unknownWord}</li>
                </InfoStyled>
            </>
        </Card>
    )
}
