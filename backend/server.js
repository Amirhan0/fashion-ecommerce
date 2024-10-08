const express = require('express')
const app = express()
const cors = require('cors')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

const port = process.env.PORT || 4000
const db = process.env.MONGO_DB_CONNECTION 

mongoose.connect(db)
  .then(() => console.log('MongoDB database connection'))
  .catch((error) => console.log(error))

app.get('/api/items', (req, res) => {
  res.send("Апи работает!")
})

app.listen(port, () => {
  console.log(`Сервер запустился на порту ${port}`)
})
