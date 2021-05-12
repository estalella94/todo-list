/*------------*/
//1.REQUSITOS
/*------------*/

// 1.1 Petición de funcionalidad (reunión 1-2 h con jefe de negocio, de servicios, product owner o project manager)
//tip: apuntar todo en la reunión

// -> necessitamos una web para almacenar las tareas de los usuarios. API, tematización...

//1.2 traducir a Funcionalidades de HTML, JS , parted de la aplicación
// - Input con nombre de tarea
// - Botón para agregar tarea
// - Listado de tareas
// - Botón de eliminar tareas
// - Botón eliminar tareas individuales

//1.3 Definir acciones de usuario (inputs del programa)
// - Agragar tarea
// - Eliminar (tarea o tareas)
// - Mostrar por pantalla

//1.4 Definir resultado a mostrar (API + acciones usuario -> output)
// -Lista de tareas

/*-----------------*/
//2.PLANIFICACIÓN
/*-----------------*/

// 2.1 Hitos de la aplicación
// - Crear un HTML estático
// - Montar una estructura del javascript -> estructura & pseudocódigo
// - Implementar lógica JS para que sea dinámico
// - Rellenar las diferentes partes del JS
// - Linkar &degugar JS + HTML
// - Mejorar maquetación

//2.2 Tareas concretas -> ganar focus
// -  C1[HTML]Implementar Bootstrap + Crear Input y button boostrap y dejar espacio para el listado <ul> [1h]
// -  C2[JS] Definir las variables que necesitará el programa
// -  C3[JS] Escribir todas las funciones vacias de javaScript [1h]
// -  C4[JS] Rellenar lógica de las funciones una a una -> probar -> siguiente [3h]
// -  C5[JS] Mostrar al usuario el listado de tareas
// -  C6[HTML] Mejorari interficie[2h]

var input = document.getElementById("userInput");
var button = document.getElementById("button");
var ul = document.querySelector("ul");

//2.FUNCIONES

//Aagregar tarea
function handleClick() {
    if(input.value.length > 0){
    createListElement();
    }
    
}
// Añadir tarea en HTML

function createListElement() {
    var li = document.createElement('li');
    li.innerHTML = input.value;
    li.classList.add("list-group-item");
    ul.appendChild(li);
}


// Limpiar tarea

function cleanList() {

}

// Eliminar tarea

function removeList() {

}

//Modificar tarea
function modifyList() {

}

//.3 Eventos

//click boton
button.addEventListener("click", handleClick );
//apretar tecla?
