import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import './index.css'
import { CountrySearch } from './pages/CountrySearch';

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/',
  cache: new InMemoryCache()
});

const run = () => {
  const rootElement = document.getElementById('root')
  if (!rootElement) { return console.error('Root Element not found, Cant render !!'); }


  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ApolloProvider client={client}>

        <CountrySearch />

      </ApolloProvider>
    </React.StrictMode>
  )
}

run()