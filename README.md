# Cryptr With Node/Express and PassportJS

## 04 - Securing routes

In this step, we'll add some guards to the `/private` endpoint that will require authentication.

Let's use `passport.authenticate` in the `/private` routing to handle Cryptr authentication.

```javascript
// index.js

//...
app.get('/private', (req, res, next) => {
  passport.authenticate('cryptr', function(err, claims, info) {
    try {
      if (err || !claims) {
        res.status(401).send('Unauthorized')
      } else {
        const { email } = claims
        res.send(`Welcome to this private page ${email}!`)
      }
    } catch {
      res.status(401).send('Unauthorized')
    }
  })(req, res, next)
})
```

Now, if you access [http://localhost:3001/private](http://localhost:3001/private), you should have an Unauthorized response.

More about `authenticate` callback attributes:

- `err` will display crashes that occurred in CryptrStrategy
- `claims` will display decoded object of token provided (**ONLY IF VALID**) that you can use for your own needs.
- `info` will only be structured as follow if token not valid, otherwise it will be null:
  - `valid` false.
  - `errors` will the string reason for validation failure (such as expired, the audience is not allowed ...)

>💡
>
> You can either :
>
> test with an active front implementation that targets your Express
> 
> use our REST API to generate different JWT samples, see our [online documentation](https://docs.cryptr.co/docs/rest-api/token-customization#get-a-jwt-sample) that allows you to test different cases depending on the parameters you sent.

Now, you can test again the route with the token as Authorization Bearer header and you should have access to the resource if the token is valid.

```bash
curl --location --request GET 'http://localhost:3001/private' \
--header 'Authorization: Bearer YOUR_TOKEN_HERE'

> Welcome to this private page jane.doe@cryptr.co!
```

Now, you are good to go to implement this in your real project and use `claims` to adjust the behavior of your endpoints


Congratulations if you made it to the end!
I hope this was helpful, and thanks for reading! :)