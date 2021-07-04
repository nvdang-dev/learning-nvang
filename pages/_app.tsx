import '../styles/globals.scss'
import React from 'react';
import type { AppProps } from 'next/app'
import Head from 'next/head';
import { Navbar } from '../src/components/navbar';
import Main from '../src/components/layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <title>Nguyễn Văn Đặng </title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Trang web của Nguyễn Văn Đặng" />
        <meta property="og:title" content="Về tôi - Trang web của Nguyễn Văn Đặng" />
        <meta property="og:description" content="Trang web của Nguyễn Văn Đặng" />
        <meta property="og:url" content="https://nvdang.dev/about" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

      </Head>
      <div style={{ height: '100%',width: '100%'}} >
        <Main>
          <Component {...pageProps} />
        </Main>
      </div>
    </React.Fragment>
  )
  // <Component {...pageProps} />
}
export default MyApp
