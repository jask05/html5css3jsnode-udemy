// Funciones fat arrow
// - No se necesita utilizar la palabra function para definirla.
// - Si tiene una sola línea, no hace falta especificar el "return", está implícito.

// Forma 1
const miFatArrowFunction = (a, b) => a + b
const r = miFatArrowFunction(1,9)
console.log(r)

// Forma 2
const otraFAF = (a,b) => {
    return a + b
}

const r2 = otraFAF(1,9)
console.log(r2)