// Obtener referencias a los elementos del DOM
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

// Función para agregar una nueva tarea
function addTask() {
    const taskText = taskInput.value.trim(); // Obtener el texto de la tarea

    if (taskText === '') {
        alert('Por favor, ingresa una tarea.'); // Validación de entrada
        return;
    }

    const li = document.createElement('li'); // Crear un nuevo elemento de lista
    li.textContent = taskText; // Establecer el texto de la tarea
    li.addEventListener('click', () => {
        li.classList.toggle('completed'); // Marcar la tarea como completada
    });

    const deleteButton = document.createElement('button'); // Botón de eliminar
    deleteButton.textContent = 'Eliminar';
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(li); // Eliminar la tarea de la lista
    });

    li.appendChild(deleteButton); // Agregar el botón al elemento de lista
    taskList.appendChild(li); // Agregar el elemento de lista a la lista de tareas
    taskInput.value = ''; // Limpiar el campo de entrada
}

// Evento para agregar tarea al hacer clic en el botón
addTaskButton.addEventListener('click', addTask);

// Evento para agregar tarea al presionar Enter
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});
