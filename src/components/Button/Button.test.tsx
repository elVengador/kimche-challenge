import React from 'react'

import { render } from "@testing-library/react";
import { screen } from '@testing-library/dom'
import { Button } from "./Button";

describe('should test Button component', () => {

    it('should render button with text valid', () => {
        const textButton = "test button"

        render(<Button
            text={textButton}
            onClick={() => { console.log('Button Clicked') }}
        />)
        expect(screen.getByText(textButton)).toBeInTheDocument()
    });

});