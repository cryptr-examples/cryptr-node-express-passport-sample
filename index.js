const express = require('express')
const passport = require('passport')
const CryptrStrategy = require('@cryptr/passport-cryptr')


const port = 3001 // choose your own
const app = express()

passport.use(new CryptrStrategy(
  function(jwt, done) {
    return done(jwt.errors, jwt, null)
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