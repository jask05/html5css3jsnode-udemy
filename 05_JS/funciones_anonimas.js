// Funciones anónimas
// - functión que no tiene nombre
// - se suele ejecutar en contexto, cuando se ejecuta por otra función (un callback, por ej)
// - se utiliza cuando la lógica no se va a reutilizar en otra parte de la aplicación, solo en ese momento.

function sumar(a, b, cb){
    const r = a + b
    cb(r)
}

sumar(2, 3, function(r){
    console.log("Función anónima con resultado: ", r);
})