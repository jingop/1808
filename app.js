// eslint-disable-next-line import/no-extraneous-dependencies
const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.get('/list', (req, res) => {
  res.json('hello world')
})
app.listen(3000)