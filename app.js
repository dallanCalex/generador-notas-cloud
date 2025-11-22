function cargarNotas() {
    let notas = JSON.parse(localStorage.getItem("notas")) || [];
    const lista = document.getElementById("listaNotas");
    lista.innerHTML = "";

    notas.forEach((nota, index) => {
        lista.innerHTML += `
            <li>
                ${nota}
                <button onclick="borrarNota(${index})">X</button>
            </li>
        `;
    });
}

function guardarNota() {
    const texto = document.getElementById("nota").value;

    if (!texto.trim()) {
        alert("No puedes guardar una nota vacía.");
        return;
    }

    let notas = JSON.parse(localStorage.getItem("notas")) || [];
    notas.push(texto);

    localStorage.setItem("notas", JSON.stringify(notas));
    document.getElementById("nota").value = "";
    cargarNotas();
}

function borrarNota(index) {
    let notas = JSON.parse(localStorage.getItem("notas")) || [];
    notas.splice(index, 1);
    localStorage.setItem("notas", JSON.stringify(notas));
    cargarNotas();
}

window.onload = cargarNotas;
