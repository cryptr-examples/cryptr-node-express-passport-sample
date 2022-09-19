# Cryptr With Node/Express and PassportJS

## 02 - Add Passport and Cryptr's Strategy

🛠️ First, add `passport` dependency.

```bash
npm install passport
```

Then, add it to your express implementation

```javascript
// index.js

//...
import passport from 'passport'
//...
app.use(passport.initialize())

app.get('/', (_req, res) => {
  res.send('This is root of your project')
})
//...
```

🛠️ After that, we can install Cryptr Passport and link it to passport.

```bash
npm install @cryptr/passport-cryptr
```

Then, you can import and link Cryptr's Strategy to Passport

```javascript
// index.js

const passport = require('passport')
const CryptrStrategy = require('@cryptr/passport-cryptr')

//...

passport.use(new CryptrStrategy(
  function(jwt, done) {
    return done(jwt.errors, jwt, null)
  }
))
app.use(passport.initialize())
```

At this step, you app won't start due to missing configuration, that is the purpose of next step

[Next](https://github.com/cryptr-examples/cryptr-node-express-passport-sample/tree/03-adding-configuration)