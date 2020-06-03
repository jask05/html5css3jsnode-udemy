console.log('Hola mundo')
let miPrimeraVariable = 'Mi Primera variable'
console.log(miPrimeraVariable)

// Mutabilidad
miPrimeraVariable = 'Esto ha cambiado'
console.log(miPrimeraVariable)

let miBoolean = true
let miFalse = false

let num1 = 0
let num2 = 12
let num3 = -123

console.log(miBoolean, miFalse, num1, num2, num3)

// Objetos
//
// - Agrupación de datos que tienen sentido entre si

const primerObjeto = {} // Objeto vacío
const miObjeto = {
    // Los objetos NO tienen variables,
    // son PROPIEDADES
    unNumero: 12, // forma de asignar propiedades
    unString: 'cadena de caracteres',
    condicion: true
}

console.log("> Objetos")
console.log(miObjeto)
console.log(miObjeto.unNumero)

// Arreglos
const arrVario = []
const arr = [1, 2, "Hola", "Mundo", miObjeto]

console.log("> Arreglos")
console.log(arrVario, arr)

// Agrega elemento al arreglo
arr.push(5)
arr.push(miPrimeraVariable)
console.log(arr)