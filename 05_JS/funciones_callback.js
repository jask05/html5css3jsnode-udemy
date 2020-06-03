// Funciones - callback
// función que se va a ejecutar al final de una función

function sumar(a, b, cb){
    const r = a + b
    cb(r)
}

function callback(resultado){
    console.log('Resultado: ', resultado);
}

sumar(5, 6, callback)