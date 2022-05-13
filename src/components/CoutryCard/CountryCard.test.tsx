import React from 'react'
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { Country } from '../../schemas';
import { CountryCard } from './CountryCard';

const myCountryMock: Country = {
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

describe('should test CountryCard component', () => {

    it('should show information correctly', () => {
        const title = `${myCountryMock.emoji} ${myCountryMock.name} [${myCountryMock.code}]`
        const languages = `Idiomas: ${myCountryMock.languages[0].name} (${myCountryMock.languages[0].native})`
        const capital = `Capital: ${myCountryMock.capital}`
        const continent = `Continente: ${myCountryMock.continent.name}`

        render(<CountryCard country={myCountryMock} />)

        expect(screen.getByText(title)).toBeInTheDocument()
        expect(screen.getByText(languages)).toBeInTheDocument()
        expect(screen.getByText(capital)).toBeInTheDocument()
        expect(screen.getByText(continent)).toBeInTheDocument()
        // test code phone
        expect(screen.getByText(new RegExp(`${myCountryMock.phone}`))).toBeInTheDocument()
        // test currency
        expect(screen.getByText(new RegExp(`${myCountryMock.currency}`))).toBeInTheDocument()
        screen.debug()
    });

});