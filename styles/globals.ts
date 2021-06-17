import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  ${() => cssReset}
`
const cssReset = css`
    *,
    html,
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`
