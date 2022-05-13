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

const myEmptyCountryMock: Country = {
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
    "capital": "",
    "currency": "",
    "languages": [],
    "states": []
}

describe('should test CountryCard component', () => {

    it('should show information correctly', () => {
        const title = `${myCountryMock.emoji} ${myCountryMock.name} [${myCountryMock.code}]`
        const languages = `${myCountryMock.languages[0].name} (${myCountryMock.languages[0].native})`
        const capital = `${myCountryMock.capital}`
        const continent = `${myCountryMock.continent.name}`

        render(<CountryCard country={myCountryMock} />)

        expect(screen.getByText(title)).toBeInTheDocument()
        expect(screen.getByText(languages, { selector: 'li' })).toBeInTheDocument()
        expect(screen.getByText(capital)).toBeInTheDocument()
        expect(screen.getByText(continent)).toBeInTheDocument()
        // test code phone
        expect(screen.getByText(new RegExp(`${myCountryMock.phone}`))).toBeInTheDocument()
        // test currency
        expect(screen.getByText(new RegExp(`${myCountryMock.currency}`))).toBeInTheDocument()
    });

    it('should show ?? when there isn\'t information, for example languages', () => {
        const languages = `??`

        render(<CountryCard country={{ ...myCountryMock, languages: [] }} />)

        expect(screen.getByText(languages)).toBeInTheDocument()
    });

});