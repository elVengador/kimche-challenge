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
`
interface CountryCardProps {
    country: Country
}

export const CountryCard = ({ country }: CountryCardProps) => {
    const { name, emoji, code, languages, capital, continent, phone, currency } = country


    const getLanguagesText = () => languages.map(cur => `${cur.name} (${cur.native})`).join(', ')


    return (
        <Card>
            <>
                <TitleStyled>{emoji} {name} [{code}]</TitleStyled>
                <InfoStyled>
                    <li>Idiomas: {getLanguagesText()}</li>
                    <li>Capital: {capital}</li>
                    <li>Continente: {continent.name}</li>
                    <li><FontAwesomeIcon icon={faPhone} /> +{phone} <FontAwesomeIcon icon={faCoins} /> {currency}</li>
                </InfoStyled>
            </>
        </Card>
    )
}
