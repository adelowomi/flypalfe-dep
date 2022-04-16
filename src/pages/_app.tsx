/* eslint-disable react/jsx-props-no-spreading */
import { ChakraProvider } from '@chakra-ui/react';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { OpenAPIProvider } from 'react-openapi-client';

import customTheme from '../lib/styles/customTheme';
import defaultSEOConfig from '../../next-seo.config';
import '../lib/styles/globals.css';
import { ToastProvider } from 'react-toast-notifications';
import Layout from 'lib/layout';

const MyApp = ({ Component, pageProps }: AppProps) => {
  let headers: HeadersInit;
  if (typeof window !== 'undefined') {
    headers = {
      cor: 'no-cors',
      Authorization: `Bearer ${localStorage.getItem('token') || ''}`,
    };
  }
  headers = {
    cor: 'no-cors',
  };

  return (
    <ChakraProvider theme={customTheme}>
      <OpenAPIProvider
        definition={process.env.NEXT_PUBLIC_API_DEFINITION as string}
        axiosConfigDefaults={{
          withCredentials: true,
          headers,
          baseURL: process.env.NEXT_PUBLIC_API_BASEURL,
        }}
      >
        <Head>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
          />
          <title>FlyPal</title>
          <link
            rel="shortcut icon"
            href="/assets/flyfav.png"
            type="image/x-icon"
          />
        </Head>
        <DefaultSeo {...defaultSEOConfig} />
        {/* <Layout> */}
        <ToastProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ToastProvider>
      </OpenAPIProvider>
    </ChakraProvider>
  );
};
export default MyApp;
