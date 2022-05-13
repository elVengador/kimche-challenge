import React from 'react'
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { CountriesSet } from './CountriesSet';
import { Country } from '../../schemas';

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

describe('should test CountriesSet component', () => {

    it('should render all countries passed', () => {

        const title = 'America'

        render(<CountriesSet countriesSet={{ title, countries: [myCountryMock] }} />)
        expect(screen.getByText(title)).toBeInTheDocument()
        expect(screen.getByText(new RegExp(myCountryMock.name))).toBeInTheDocument()
    });

    it('should not render nothing if countries in countriesSet are empty', () => {
        const title = 'America'

        render(<CountriesSet countriesSet={{ title, countries: [] }} />)
        expect(screen.queryByText(title)).not.toBeInTheDocument()
        expect(screen.queryByText(new RegExp(myCountryMock.name))).not.toBeInTheDocument()
    });

});