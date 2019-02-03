const express = require('express');
const Twitter = require('twit');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config()

const app = express();

app.use(require('cors')());
app.use(bodyParser.urlencoded({ extended: false }))

const { CONSUMER_KEY, CONSUMER_SECRET, ACCESS_TOKEN, ACCESS_TOKEN_SECRET } = process.env

var TwitterAPIClient = new Twitter({
  consumer_key:         CONSUMER_KEY,
  consumer_secret:      CONSUMER_SECRET,
  access_token:         ACCESS_TOKEN,
  access_token_secret:  ACCESS_TOKEN_SECRET
})

const port = 8000 || process.env.PORT

app.get('/', (req, res) => {
  res.status(200).send('Tiny server using the twit twitter API client')
})

app.get('/tweets', async (req, res) => {
  try {
    const params = { count: 30, screen_name: req.query.screenName }
    const tweets = await TwitterAPIClient.get('/statuses/user_timeline', params)
    res.status(200).send(tweets.data)
  } catch (error) {
    console.log(error)
  }
})

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
