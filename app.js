// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value.trim();

    if (!nombreAmigo) {
        alert("Debes ingresar un nombre");
        return;
    }

    amigos.push(nombreAmigo);
    inputAmigo.value = "";
    actualizarListaAmigos();
}

// Función para actualizar la lista de amigos en el DOM
function actualizarListaAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para emparejar amigos al azar
function sortearAmigos() {
    if (amigos.length < 2) {
        alert("Se necesitan al menos 2 amigos para hacer el sorteo");
        return;
    }

    // Mezclar el array de amigos
    let amigosRevueltos = [...amigos].sort(() => Math.random() - 0.5);
    
    // Crear parejas
    let parejas = [];
    for (let i = 0; i < amigosRevueltos.length; i++) {
        let amigo1 = amigosRevueltos[i];
        let amigo2 = amigosRevueltos[(i + 1) % amigosRevueltos.length];
        parejas.push(`${amigo1} le da regalo a ${amigo2}`);
    }

    // Mostrar resultados
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = parejas.join('<br>');

    // Limpiar la lista y el array de amigos
    amigos = [];
    actualizarListaAmigos();
}

// Event listener para agregar amigos con Enter
document.getElementById("amigo").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        agregarAmigo();
    }
});