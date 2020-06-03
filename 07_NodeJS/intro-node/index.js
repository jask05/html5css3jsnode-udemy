// Importa dependencias express
const express = require('express')
const app = express()

// Recibe todos las peticions (*) y tiene 2 argumentos
app.get('*', (request, response) => {
    response.send({message: 'Chanchito feliz'})
})

app.listen(3000, () => console.log('Nuestro servidor está escuchando en el puerto 3000.'))