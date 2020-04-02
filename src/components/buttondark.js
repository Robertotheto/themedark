import React from 'react'
import styled from 'styled-components'

const StyledButtonDark = styled.button `
    background: ${({theme}) => theme.backgrounddark};
    color: ${({theme}) => theme.textdark};
    border: 1px solid ${({theme}) => theme.border};
    padding: .5rem 1rem;
    border-radius: 4px;
    margin-bottom: 1rem;
    &:hover{
        background: ${({theme}) => theme.backgroundAlt};
        color: ${({theme}) => theme.text};
        cursor: pointer;
    }
    &:focus{
        outline: none;
    }
`

const ButtonDark = ({children, onClick}) => (
    <StyledButtonDark onClick={onClick}>{children}</StyledButtonDark>
)
export default ButtonDark