const express = require('express')
const Orders = require('../models/Orders')

const router = express.Router()

router.get('/', (req, res) => {
    Orders.find()
    .exec()
    .then(x => res.status(200).send(x))
    // res.send({ mensaje: 'Hola, soy Orders.' })
})

router.get('/:id', (req, res) => {
    Orders.findByID(req.params.id)
    .exec()
    .then(x => res.status(200).send(x))
})

router.post('/', (req, res) => {
    // res.send('Soy post')
    Orders.create(req.body).then(x => res.status(201).send(x))
})

router.put('/:id', (req, res) => {
    // res.send('Soy put')
    Orders.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.sendStatus(204))
})

router.delete('/:id', (req, res) => {
    // res.send('Soy delete')
    Orders.findOneAndDelete(req.params.id).exec().then(() => res.sendStatus(204))
})

module.exports = router