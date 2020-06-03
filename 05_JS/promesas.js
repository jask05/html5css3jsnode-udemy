// Promesas
//
// - Valor que se resuelve en el futuro.
// - "Un ejemplo de esto puede ser cuando yo me pongo a hervir el agua para 
//  prepararme un café o para preparar un té. Yo sencillamente presiona el botón 
//  y espero a que el agua termine de hervir. Ahora yo me puedo quedar esperando 
//  a que el agua termine de hervir o sencillamente puedo irme y hacer otras cosas 
//  mientras el agua hierve."

Promise.resolve(2) // este valor lo voy a tener resuelto. Invoca a la API de "promise"
    .then(valor => console.log(valor)) // el .then va a tener el valor de la "promise" cuando se resuelva en un futuro
    
Promise.resolve(3)
    .then(valor => valor + 1) // se pueden ir encadenando
    .then(valor => console.log(valor))
    .catch(e => console.error(e)) // recibe un mensaje de error
    
Promise.reject(3) // salta al catch directamente
    .then(valor => valor + 1)
    .then(valor => console.log(valor))
    .catch(e => console.error(e))

//
// Rechazando promesas
//
Promise.reject(3) // salta al catch directamente
    .then(valor => Promise.reject(1))
    .then(valor => valor + 2)
    .catch(e => console.error(e))

//
// Rechazando o aceptando promesas de manera asíncrona
//
new Promise((resolve, reject) => {
    setTimeout(() => resolve(2), 2000)
})
.then(x => console.log(x))
.catch(e => console.error(e))