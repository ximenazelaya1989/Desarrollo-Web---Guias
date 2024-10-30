//Accediendo a los elementos HTML
const inputNombre = document.getElementById("idTxtNombre");
const inputApellido = document.getElementById("idTxtApellido");
const inputFechaNacimiento = document.getElementById("idTxtFechaNacimiento");
const inputRdMasculino = document.getElementById ("idRdMasculino");
const inputRdFemenino = document.getElementById ("idRdFemenino");
const cmbPais = document.getElementById("idCmbPais");
const inputDireccion = document.getElementById("idTxtDireccion");
const inputNombrePais = document.getElementById("idNombrePais");


const buttonAgregarPaciente = document.getElementById("idBtnAgregar");
const buttonLimpiarPaciente = document.getElementById("idBtnLimpiar");
const buttonMostrarPaciente = document.getElementById("idBtnMostrar");
const buttonAgregarPais = document.getElementById("idBtnAddPais");


const idTablaPaciente = document.getElementById("idTablaPacientes");
const idPacientesRegistrados = document.getElementById("idPacientesRegistrados");

const notificacion = document.getElementById("idNotificacion");

// Componente de Bootstrap

const toast = new bootstrap.Toast(notificacion);
const mensaje = document.getElementById("idMensaje");

//Componente modal
const idModal = document.getElementById("idModal");

//Arreglo global de pacientes
let arrayPaciente = [];

/*
Creando una funcion para que limpie el formulario
simepre que se cargue la pagina o cuando se presione
el boton de limpiar del formulario */

const limpiarForm = () => {
    inputNombre.value ="";
    inputApellido.value = "";
    inputFechaNacimiento.value = "";
    inputRdMasculino.checked = false;
    inputRdFemenino.checked = false;
    cmbPais.value = 0;
    inputDireccion.value = "";
    inputNombrePais.value = "";

    inputNombre.focus();
};

/*
FUncion para validar el ingreso del paciente
*/

const addPaciente = () => {
    const nombre = inputNombre.value.trim();
    const apellido = inputApellido.value.trim();
    const fechaNacimiento = inputFechaNacimiento.value;
    const sexo =  
    inputRdMasculino.checked == true 
    ? "Hombre" 
    : inputRdFemenino.checked == true 
    ? "Mujer" 
    : "";
    const pais = cmbPais.value;
    const labelPais = cmbPais.options[cmbPais.selectedIndex].text;
    const direccion = inputDireccion.value.trim();

    if (nombre && apellido && fechaNacimiento && sexo && pais !== "0" && direccion) {
        
        //Agregando informacion al arreglo paciente
        arrayPaciente.push({nombre, apellido, fechaNacimiento, sexo, labelPais,direccion});

        //Asignando un mensaje a nuestra notificacion
        mensaje.innerHTML = "Se ha registrado un nuevo paciente";
        //Llamando al componente Bootstrap
        
        

        //Limpiando formulario
        limpiarForm();
        imprimirPacientes();

    } else {
        //Asignando un mensaje a nuestra notificacion
        mensaje.innerHTML = "Faltan campos por completar";
        //Llamando al componente de Bootstrap
        toast.show();
    }
};

//Funcion que imprime la ficha de los pacientes registrados
function imprimirFilas() {
    let $fila = "";
    let contador = 1;
    
    arrayPaciente.forEach((element) => {
        $fila += `<tr>
        <td scope="row" class="text-center fw-bold">${contador}</td>
        <td>${element.nombre}</td>
        <td>${element.apellido}</td>
        <td>${element.fechaNacimiento}</td>
        <td>${element.sexo}</td>
        <td>${element.labelPais}</td>
        <td>${element.direccion}</td>
        <td>
        <button id="idBtnEditar${contador}" type="button" class="btn btn-primary" alt="Eliminar">
        <i class="bi bi-pencil-square"></i>
        </button>
        <button id="idBtnEliminar${contador}" type="button" class="btn btn-danger" alt="Editar">
        <i class="bi bi-trash3-fill"></i>
        </button>
        </td>
        </tr>`;
        contador++;
    });
    return $fila;    
};

const imprimirPacientes = () => {
    let $table = `<div class="table-responsive">
    <table class="table table-striped table-hover table-bordered">
    <tr>
    <th scope="col" class="text-center" style="width:5%">#</th>
    <th scope="col" class="text-center" style="width:15%">Nombre</th>
    <th scope="col" class="text-center" style="width:15%">Apellido</th>
    <th scope="col" class="text-center" style="width:10%">Fecha nacimiento</th>
    <th scope="col" class="text-center" style="width:10%">Sexo</th>
    <th scope="col" class="text-center" style="width:10%">País</th>
    <th scope="col" class="text-center" style="width:25%">Dirección</th>
    <th scope="col" class="text-center" style="width:10%">Opciones</th>
    </tr>
    ${imprimirFilas()}
    </table>
    </div>
    `;
    document.getElementById("idTablaPacientes").innerHTML = $table;
};




// Contador global de los option correspondiente
//al select (cmb) pais
let contadorGlobalOption = cmbPais.children.length;
const addPais = () => {
    let paisNew = inputNombrePais.value;

    if (paisNew != "") {
        //Creando nuevo option con la API DOM
        let option = document.createElement("option");
        option.textContent = paisNew;
        option.value = contadorGlobalOption + 1;
        //Agregando el nuevo option select
        cmbPais.appendChild(option);

        //Asignando un mensaje a nuestra notificacion
        mensaje.innerHTML = "Pais agregado exitosamente";

        //Llamando al componente de Bootstrap
        toast.show();
    } else {
    
        mensaje.innerHTML = "Faltan campos por completar";

        //Llamando al componente de bootstrap
        toast.show();
    }
};

//Agregando eventos a los botones y utilizando funciones tipo flecha
buttonLimpiarPaciente.onclick = () => {
    limpiarForm();
};

buttonAgregarPaciente.onclick = () => {
    addPaciente();
};

buttonMostrarPaciente.onclick = () => {
    imprimirPacientes();
};

buttonAgregarPais.onclick = () => {
    addPais();
};



//Se agrega el focus en el campo nombre pais del modal
idModal.addEventListener("shown.bs.modal", () => {
    inputNombrePais.value = "";
    inputNombrePais.focus();
});

//Ejecutar funcion al momento de cargar la pagina HTML
limpiarForm();