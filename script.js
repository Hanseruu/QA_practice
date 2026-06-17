//CRM artificial

let listaClientes = {
1001: {Nombre : "Juan", Apellido : "Perez", Edad : 30},
1002: {Nombre : "Maria", Apellido : "Salcedo", Edad : 10},
1003: {Nombre : "Hansell", Apellido : "Bonilla", Edad : 21}
};

// Lista de Ordenes
let listaOrdenes = [];


let form = document.getElementById("form");
let ul = document.getElementById("lista_ordenes");

form.addEventListener('submit', (e) => {
    e.preventDefault()
    //dentro de la funcion asi nos aseguramos de guardar el valor del usuario
    let input = document.getElementById("input_id").value; // .value para obtner el valor

    if (listaClientes[input]) {
        let cliente = listaClientes[input];
        let orden = document.createElement("li");
        orden.textContent = cliente;
        //funcion: existe este usuario en la lista?
        ul.appendChild(orden);
        
    } else {
        alert("Error. Usuario no encontrado, intente otra vez.")
    }
    
});