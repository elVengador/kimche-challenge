import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import { Button } from './components/Button/Button';
import { Card } from './components/Card/Card';
import { Country } from './schemas';
import { CountryCard } from './components/CoutryCard/CountryCard';
import { Searcher } from './components/Searcher/Searcher';
import './index.css'

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/',
  cache: new InMemoryCache()
});


const myCountry: Country = {
  "code": "CL",
  "name": "Chile",
  "native": "Chile",
  "phone": "56",
  "emoji": "🇨🇱",
  "emojiU": "U+1F1E8 U+1F1F1",
  "continent": {
    "code": "SA",
    "name": "South America",
    "countries": []
  },
  "capital": "Santiago",
  "currency": "CLF,CLP",
  "languages": [
    {
      "code": "es",
      "name": "Spanish",
      "native": "Español",
      "rtl": false
    }
  ],
  "states": []
}

const WrapperSearcher = () => {

  const [value, setValue] = useState('')
  return <>
    <h2>{value}</h2>
    <Searcher value={value} onChange={(newValue: string) => setValue(newValue)} />
  </>
}

const run = () => {
  const rootElement = document.getElementById('root')
  if (!rootElement) { return console.error('Root Element not found, Cant render !!'); }


  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ApolloProvider client={client}>

        <h2>
          My first Apollo app{" "}
          <span role="img" aria-label="Rocket">
            🚀
          </span>
        </h2>

        <Button text='Button' onClick={() => { console.log('click in default button') }} />

        <Button text='Button' stateButton='ACTIVE' onClick={() => { console.log('active button') }} />

        <WrapperSearcher />

        <Card>
          <p>lorem</p>
        </Card>

        <CountryCard country={myCountry} />

      </ApolloProvider>
    </React.StrictMode>
  )
}

run()