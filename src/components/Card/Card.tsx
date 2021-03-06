import React from 'react'
import styled from 'styled-components'

interface CardProps {
    children: JSX.Element
}

const CardStyled = styled.article`
    padding: 10px;
    border: none;
    border-radius: 6px;
    box-shadow: 0px 0px 12px 5px #8e8e8e78;
`

export const Card = ({ children }: CardProps) => {
    return (
        <CardStyled>{children}</CardStyled>
    )
}
