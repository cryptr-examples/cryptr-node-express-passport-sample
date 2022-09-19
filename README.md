# Cryptr With Node/Express and PassportJS

## 02 - Adding Cryptr Configuration

Two options are available to configure ou Strategy:
- Use dot env file
- Providing configuration into Strategy instantiation.

> For this example, we'll use [`dotenv` library](https://www.npmjs.com/package/dotenv) to handle local environment


🛠️ First one is through env file. This one is transparent because you do not have to add code, simply keep the previous step code, the Strategy will consume the environment by default.

```javascript
passport.use(new CryptrStrategy(
  function(jwt, done) {
    return done(jwt.errors, jwt, null)
  }
))
```

Here is an example of .env configuration:


```shell
CRYPTR_BASE_URL=https://auth.cryptr.eu # Your cryptr server URL
CRYPTR_AUDIENCES=http://localhost:3000,http://localhost:4200 # Your different front URLs
CRYPTR_TENANTS=some-tenant-domain # Your different organization domains.
```

🛠️ Second option is to provide the configuration directly into CryptrStrategy instantiation.

The configuration is an object with a `cryptrConfig` key. `opts: { test: true }` is relevant while you stay in the development/test environment and need to be removed in production mode.

```javascript
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
));
```

If you run your app, you should have both endpoints still accessible, the next step is to add security to routing.

[Next](https://github.com/cryptr-examples/cryptr-node-express-passport-sample/tree/04-securing-routes)