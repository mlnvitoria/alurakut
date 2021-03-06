import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { AlurakutStyles } from "./src/lib/AlurakutCommons";

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #EEB76B;
    font-family: sans-serif;
  }

  #__next {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  img {
    display: block;
    height: auto;
    max-width: 100%;
  }

  ${AlurakutStyles}
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
