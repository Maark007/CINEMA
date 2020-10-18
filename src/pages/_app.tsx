import React from 'react'
import Head from 'next/head'
import GlobalStyle from '../styles/global'
import '../styles/animations/animations.css'

import { AppProps } from 'next/app'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>CINEMA</title>
      </Head>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  )
}

export default MyApp
