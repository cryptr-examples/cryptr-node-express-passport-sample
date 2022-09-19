# Cryptr With Node/Express and PassportJS

## 01 - Create your Node Express Project

🛠️ First init a NPM project:

```bash
mkdir your_app
cd your_app

npm init
```

🛠️ After that create the entry point file you chose in `npm init` process, here we'll use `index.js`


🛠️ Then add express support:

```bash 
npm install express
```

🛠️ Then, create root and private paths express base code

```javascript
//index.js
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
```

Then just run 

```bash
node index.js # or app.js depending on your entry point
```

You should be able to access both urls

- http://localhost:3001
- http://localhost:3001/private
