const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const animalRoutes = require('./routes/Animal')

const app = express()

// middlewares
app.use(cors())
app.use(express.json())

// routes
app.use('/animals', animalRoutes)

// db connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));

const PORT = process.env.PORT || 8080

app.listen(PORT, console.log(`listening on port ${PORT}`))