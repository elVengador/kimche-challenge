import React from 'react'
import styled from "styled-components";
import { colors, fonts } from '../../properties.styles';

type StateButton = 'DEFAULT' | 'ACTIVE' | 'DISABLED'

interface ButtonProps {
    text: string,
    onClick: () => void
    title?: string,
    stateButton?: StateButton,

}

export const Button = ({ text, onClick, title, stateButton = 'DEFAULT' }: ButtonProps) => {

    const Button = styled.button<{ stateButton: StateButton }>`
        width: inherit;
        padding: 6px 10px;
        border: none;
        border-bottom: solid 3px #acacacbd;
        border-radius: 6px;
        outline: solid 3px ${colors.secondary};
        color: ${colors.foreground};
        background: ${colors.background};
        font-size: ${fonts.fontMD};
        font-weight: ${fonts.fontWeight600};
        text-align: center;
        cursor: pointer;
        transition: 0.5s;
        &:hover,&:active,&:focus{
            outline: solid 3px ${colors.primary};
        }
    `

    const ButtonActive = styled(Button)`
        background: ${colors.primary};
        color: ${colors.tertiary};
        border-bottom: solid 3px #4040409f;
        &:hover,&:active,&:focus{
            outline: solid 3px ${colors.primary};
        }
    `

    // aca podemos seguir extendiendo los diferentes estados de los botones
    // como DISABLED

    if (stateButton === 'ACTIVE') {
        return <ButtonActive
            stateButton='ACTIVE'
            title={title}
            onClick={onClick}
        >
            {text}
        </ButtonActive>
    }
    return <Button
        stateButton={stateButton}
        title={title}
        onClick={onClick}
    >
        {text}
    </Button>
}
