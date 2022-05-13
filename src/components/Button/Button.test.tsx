import React from 'react'

import { render } from "@testing-library/react";
import { fireEvent, screen } from '@testing-library/dom'
import { Button } from "./Button";

describe('should test Button component', () => {

    it('should render button with valid attributes text and title', () => {
        const textButton = "test button"
        const titleButton = 'Click here'

        render(<Button
            text={textButton}
            title={titleButton}
            onClick={() => { console.log('Button Clicked') }}
        />)
        expect(screen.getByText(textButton)).toBeInTheDocument()
        expect(screen.getByTitle(titleButton)).toBeInTheDocument()
    });

    it('should call the function when button is clicked', () => {
        const textButton = "test button"
        const onClickFunction = jest.fn()

        render(<Button
            text={textButton}
            onClick={() => onClickFunction()}
        />)

        fireEvent.click(screen.getByText(textButton))
        expect(onClickFunction).toHaveBeenCalled()
    });

});