// const todos = [];
// Short circuit: devuelve el primer valor, si no existe, el segundo
const todos = JSON.parse(localStorage.getItem("todos")) || [];

const render = () => {
    const todoList = document.getElementById("todo-list");
    // todoList.innerHTML = "";
    // for(let i = 0; i < todos.length; i++){
    //     todoList.innerHTML += "<li>" + todos[i] + "</li>";
    // }
    
    // MAP
    // permite iterar arreglo sin indicar índices, ni length ni la siguiente operación a realiazar
    // Depende del nº de elementos que tenga el arreglo se ejecutá ese nº de veces la función
    // const todosTemplate = todos.map(t => {
    //     return "<li>" + t + "</li>";
    // });
    const todosTemplate = todos.map(t => "<li>" + t + "</li>");
    // console.log(todosTemplate)
    // junta todos los elementos de un array y los une con lo que se le indique entre paréntesis.
    todoList.innerHTML = todosTemplate.join("");

    // Eliminar elementos
    const elementos = document.querySelectorAll("#todo-list li");
    elementos.forEach((elemento, i) => {
        elemento.addEventListener("click", () => {
            // console.log(elemento.parentNode, i);
            // console.log(elemento, i);
            elemento.parentNode.removeChild(elemento);
            // Limpia elementos dentro del arreglo de todos
            todos.splice(i, 1);
            actualizaTodos(todos)
            render() // recursividad
            // console.log(todos, i);
        })
    });
}

const actualizaTodos = () => {
    const todoStrings = JSON.stringify(todos)
    localStorage.setItem("todos", todoStrings)
}

// Espera a que todo el contenido de la página se cargue
window.onload = () => {
    render();
    // Se obtiene el formulario
    const form = document.getElementById("todo-form");
    // Se reemplaza el funcionamiento del "submit"
    form.onsubmit = (e) => {
        // Detiene el comportamiento que tiene por defecto los formularios al enviarse (refrescar la página)
        // así se puede seguir trabajando en la misma página sin que esta cambie.
        e.preventDefault();
        const todo = document.getElementById("todo");
        const todoText = todo.value;
        todo.value = "";
        todos.push(todoText);
        actualizaTodos(todos)
        // console.log(todos);
        render();
        
    }
}

