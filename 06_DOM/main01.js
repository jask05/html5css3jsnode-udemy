console.log("> DOM <")

// Espera a que todo el contenido de la página se cargue
window.onload = () => {
    const parrafo = document.getElementById("dom")
    console.log("Párrafo:" + parrafo.innerHTML)
    parrafo.innerText = "Texto actualizado"
    parrafo.innerHTML = "<i>negrita</i>"
}

