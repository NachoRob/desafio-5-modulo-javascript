let tareas = [];
let ultimoId = 0;

// Referencias al DOM
const btnAgregar = document.querySelector("#button-agregar"); 
const inputTarea = document.querySelector("#nombre-tarea-agregar");
const tbody = document.querySelector("#cuerpo-tabla");
const totalTareasSpan = document.querySelector("#total-tareas");
const realizadasTareasSpan = document.querySelector("#realizadas-tareas");

function renderRows() {
    tbody.innerHTML = "";
    
    tareas.forEach((tarea) => {
        tbody.innerHTML += `
            <tr>
                <td><strong>${tarea.id}</strong></td>
                <td class="${tarea.completada ? 'tachado' : ''}">${tarea.nombre}</td>
                <td class="acciones-cell"> <input type="checkbox" 
                           onclick="tacharTarea(${tarea.id})" 
                           ${tarea.completada ? 'checked' : ''}>
                    <button class="btn-eliminar" onclick="borrar(${tarea.id})">&times;</button>
                </td>
            </tr>`;     
    });

    // Actualizar contadores
    actualizarStats();
}

function renderCounter(){
    const {total, realizadas} = counter(tareas);
    totalTareasSpan.innerHTML = total;
    realizadasTareasSpan.innerHTML = realizadas;
}

function actualizarStats() {
    totalTareasSpan.innerHTML = tareas.length;
    const completadas = tareas.filter(t => t.completada).length;
    realizadasTareasSpan.innerHTML = completadas;
}

btnAgregar.addEventListener("click", () => {
    if (inputTarea.value.trim() === "") return;

    ultimoId++;
    const nuevaTarea = {
        id: ultimoId,
        nombre: inputTarea.value,
        completada: false
    };
    
    tareas.push(nuevaTarea);
    inputTarea.value = "";
    renderRows();
});

function borrar(id) {
    const index = tareas.findIndex((ele) => ele.id == id);
    if (index !== -1) {
        tareas.splice(index, 1);
        renderRows();
    }
}

function tacharTarea(id) {
    const tarea = tareas.find((ele) => ele.id == id);
    if (tarea) {
        tarea.completada = !tarea.completada;
        renderRows();
    }
}

function counter(tareas){
    let total = tareas.length;
    let realizadas = tareas.filter(t => t.completada).length;
    return {total, realizadas};
}