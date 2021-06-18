import React from 'react'
import styled, { css } from 'styled-components'
import { ToggleSwitch } from '../../components/ToggleSwitch'

const index = () => {
    const [isChecked, setChecked] = React.useState(false)

    console.log('is checked', isChecked)

    const handleCheck = () => {
        setChecked((prevState) => !prevState)
    }

    return (
        <PageWrapper isDarkMode={isChecked}>
            <h1>{isChecked ? 'Checado' : 'Não Checado'}</h1>
            <ToggleSwitch onClick={handleCheck} />
        </PageWrapper>
    )
}

export default index

interface StyleProps {
    isDarkMode: boolean
}

const PageWrapper = styled.div<StyleProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    background: lightgray;
    ${({ isDarkMode }) => isDarkMode && darkMode}
    height: 100vh;
    width: 100vw;
    flex-direction: column;
    gap: 1rem;
`

const darkMode = css`
    background: #333;
`
