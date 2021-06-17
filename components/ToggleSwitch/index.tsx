import React from 'react'
import styled from 'styled-components'

export const SwitchButton = ({ onClick }) => {
    return (
        <SwitchButtonStyle>
            <input type="checkbox" onClick={onClick} />
            <span />
        </SwitchButtonStyle>
    )
}

const SwitchButtonStyle = styled.label`
    width: 4rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background: #eeeeee;
    border-radius: 50vh;

    input {
        height: 100%;
        width: 100%;
        opacity: 0;
    }

    span {
        position: absolute;
        border-radius: 50%;
        width: 50%;
        height: 100%;
        background: lightgray;
        left: 0;
        cursor: pointer;
        transition: 0.25s;
        box-shadow: 2px 2px 4px gray;
    }

    input:checked + span {
        left: 50%;
        background: lightblue;
    }
`
