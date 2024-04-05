import React from 'react'
import { ButtonWrapper } from './Button.styled';

const Button = ({ children, onClick, type }) => {
    const buttonClass = type === 'primary' ? 'button__primary' : 'button__secondary';
    return (
        <ButtonWrapper className={`${buttonClass}`} onClick={onClick}>
            {children}
        </ButtonWrapper>
    )
}

export default Button