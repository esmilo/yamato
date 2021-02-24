<p align="center"><img src="https://static.wikia.nocookie.net/devilmaycry/images/e/e5/Yamato_%28DA%29_DMC4SE.png" width="200"></p>
<p align="center"><em>The sword is said to be able to cut through anything, even the very fabric of space itself.</em></p>

---

**Yamato** is an `express` middleware to remove extra whitespace(s) inside your
`request body`. For example, if you send a json like this:

```json
{
  "name": "  Dimitri Wahyudiputra",
  "hobbies": ["  Music ", " Playing Tekken"],
  "personalInfo": {
    "phoneNumber": " +6281234567890   ",
    "address": " Somewhere on earth"
  },
  "isPrivate": true
}
```

Yamato will trim all the extra whitespaces so you'll get:

```json
{
  "name": "Dimitri Wahyudiputra",
  "hobbies": ["Music", "Playing Tekken"],
  "personalInfo": {
    "phoneNumber": "+6281234567890",
    "address": "Somewhere on earth"
  },
  "isPrivate": true
}
```

## Usage

Install Yamato

```bash
npm install @esmilo/yamato
```

Invoke Yamato as a middleware after `body-parser`

```javascript
// ...

const yamato = require('@esmilo/yamato');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(yamato());

// ...
```
