const express = require('express')
const passport = require('passport')
const CryptrStrategy = require('@cryptr/passport-cryptr')
const envFilePath = '.env.sample'
require('dotenv').config({ path: envFilePath })

const port = 3001 // choose your own
const app = express()

console.log(process.env)

passport.use(new CryptrStrategy(
  // instead of env file we can use {cryptrConfig},
  {
    cryptrConfig: {
      base_url: process.env.CRYPTR_BASE_URL,
      audiences: process.env.CRYPTR_AUDIENCES.split(','),
      tenants: process.env.CRYPTR_TENANTS.split(',')
    },
    opts: { test: true }
  },
  function(jwt, done) {
    //Here should be like ResourceOwner.findByClaims(jwt.claims)
    return done(jwt.errors, jwt.claims, null)
  }
))
app.use(passport.initialize())

app.get('/', (_req, res) => {
  res.send('This is root of your project')
})

app.get('/private', (_req, res) => {
  res.send('This will be protected by Cryptr in next steps')
})

app.listen(port, () => {
  console.log(`Express app listening on port ${port}`)
})