import React, { useState } from 'react'
import { fireEvent, render, screen } from '@testing-library/react';
import { Searcher } from './Searcher';

const onCallbackFunction = jest.fn()

const WrapperSearcher = () => {
    const [value, setValue] = useState('')
    const onChangeFunction = (newValue: string) => {
        setValue(newValue)
        onCallbackFunction()
    }
    return <Searcher value={value} onChange={onChangeFunction} />
}

describe('should test Searcher component', () => {
    it('should execute function when change value in searcher', () => {

        render(<WrapperSearcher />)
        const searcherElement = screen.getByPlaceholderText('Search a country by country or language')
        expect(searcherElement).toBeInTheDocument()
        fireEvent.click(searcherElement)
        fireEvent.change(searcherElement, { target: { value: 'chi' } })

        expect(onCallbackFunction).toHaveBeenCalled()
    });
})