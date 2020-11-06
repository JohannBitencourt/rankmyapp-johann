const express = require('express')
const fetch = require('node-fetch')
const axios = require('axios')
const app = express()
const port = 3334

app.get('/', (req, res) => {
  res.send('Hello World!')
})

/* const api = async (res, req) => {
  
  await fetch('', { method: 'GET', body: params })
    .then(res => res.json())
    .then(json => console.log(json));
} */

app.get('/char', async (req, res) => {
  const response = await axios.get('https://rickandmortyapi.com/api/character/')
  const { id, name, status, species, origin, location } = response.data.results
  const chars = response.data.results.map( char => {
    char === response.data.results
    return char
  })

  const char = {
    id: id, name: name, status: status, species: species, origin: origin, location: location
  }

  console.log(chars)
  return res.send(chars)
})

app.get('/breno', async (req, res) => {
  const { data: { results } } = await axios.get('https://rickandmortyapi.com/api/character/');

  const chars = results.map(({id, name, status}) => ({
      id,
      name,
      status
  }))

  return res.json(chars);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})