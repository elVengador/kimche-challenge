import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import './index.css'
import { Button } from './components/Button/Button';
import { Card } from './components/Card/Card';
import { Country } from './schemas';
import { CountryCard } from './components/CoutryCard/CountryCard';
// import { Searcher } from './components/Searcher/Searcher';

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

const run = () => {
  const rootElement = document.getElementById('root')
  if (!rootElement) { return console.error('Root Element not found, Cant render !!'); }

  // const [value, setValue] = useState('')

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
        {/* <Searcher value={value} setValue={(newValue:string)=>setValue(newValue)} /> */}

        <Card>
          <p>lorem</p>
        </Card>

        <CountryCard country={myCountry} />

      </ApolloProvider>
    </React.StrictMode>
  )
}

run()