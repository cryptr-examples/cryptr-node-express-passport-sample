const express = require('express')
const app = express()
const port = 3001 // choose your own


app.get('/', (_req, res) => {
  res.send('This is root of your project')
})

app.get('/private', (_req, res) => {
  res.send('This will be protected by Cryptr in next steps')
})

app.listen(port, () => {
  console.log(`Express app listening on port ${port}`)
})