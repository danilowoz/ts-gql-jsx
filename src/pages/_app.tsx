import { ApolloProvider } from '@apollo/react-hooks'
import { AppProps } from 'next/app'
import "@exampledev/new.css"

import client from '../client'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}


export default MyApp