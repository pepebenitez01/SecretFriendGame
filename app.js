// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); // Obtener y limpiar el nombre

   //Validar que el campo no esté vacio 
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    //Validar que el nombre no esté repetido
    if (listaAmigos.includes(nombre)) {
        alert("Ese nombre ya está en la lista.");
        return;
    }

    // Agregar el nombre a la lista
    listaAmigos.push(nombre);

    // Limpiar el campo después de agregar
    input.value = "";

    //Actualizar la lista en pantalla
    actualizarLista();
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; //Limpiar la lista antes de actualizar

    //Recorrer la lista y agregar cada nombre como <li>
    for (let i = 0; i < listaAmigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = listaAmigos[i];
        lista.appendChild(li);
    }
}

//Función para seleccionar aleatoriamente un amigo
function sortearAmigo() {
    //Validar que haya amigos en la lista
    if (listaAmigos.length === 0) {
        alert("La lista está vacía. Agrega al menos un amigo antes de sortear.");
        return;
    }

    // Generar un índice aleatorio dentro del rango del array
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);

    //Obtener el nombre sorteado
    const amigoSorteado = listaAmigos[indiceAleatorio];

    //Mostrar el resultado en la página
    document.getElementById("resultado").innerHTML = `<li>🎉 El amigo Secreto es: ${amigoSorteado}!🎉 </li>`;
}