import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import Layout from '../components/Layout'
import { GlobalProvider } from '../contexts/GlobalContext'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalProvider>
        <Layout>
          <Component {...pageProps} />
          <GlobalStyle />
        </Layout>
      </GlobalProvider>
    </ThemeProvider>
  )
}

export default MyApp
