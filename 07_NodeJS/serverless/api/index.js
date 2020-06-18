const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const meals = require('./routes/meals')
const orders = require('./routes/orders')
const auth = require('./routes/auth')
const app = express()

app.use(bodyParser.json())
app.use(cors())

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })


// Users.create({ name: 'chanchito01' })

// const router = express.Router()

app.use('/api/meals', meals)
app.use('/api/orders', orders)
app.use('/api/auth', auth)

// app.get('*', (req, res) => {
//     // console.log('Hola mundo. Mi primera app serverless.');
//     // res.send({ mensaje: 'Chanchito feliz.' })
//     // Users.find()
//     //     .then(x => res.send(x))
//     res.send('Hola mundo')
// })

module.exports = app