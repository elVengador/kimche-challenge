import React from 'react'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { colors, fonts } from '../../properties.styles'
import styled from 'styled-components'

const WrapperStyled = styled.div`
    width: 100%;
    position: relative;
    `

const SearcherStyled = styled.input`
    width: 100%;
    padding: 10px 20px 10px 50px;
    border-radius: 20px;
    border: none;
    outline: solid 3px ${colors.secondary};
    background: ${colors.tertiary};
    font-size: ${fonts.fontMD};
    font-weight: ${fonts.fontWeight300};
    &:hover,&:active,&:focus,&:focus-visible{
        outline: solid 3px ${colors.primary};
    }
    &::before{
        content: 's';
        position: absolute;
    }
`

const IconStyled = styled.div`
    position: absolute;
    width: 20px;
    height:  20px;
    left: 10px;
    bottom: 50%;
    color: ${colors.foreground};
    transform: translate(50%,50%);
`
// if we want to manage many events we can past in a object called events through props
// like event:{ onChange, onClick, ...}

// we set our searcher full with because we manage the size from parent component
interface SearcherProps {
    value: string,
    setValue: (newValue: string) => void
}

export const Searcher = ({ value, setValue }: SearcherProps) => {
    return <WrapperStyled>
        <IconStyled><FontAwesomeIcon icon={faSearch} /></IconStyled>
        <SearcherStyled value={value} onChange={(e) => setValue(e.currentTarget.value)} />
    </WrapperStyled>
}
