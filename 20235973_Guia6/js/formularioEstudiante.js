// Seleccionando los elementos del formulario a través del DOM
const carnetInput = document.getElementById("carnet");
const nombreInput = document.getElementById("nombre");
const duiInput = document.getElementById("dui");
const nitInput = document.getElementById("nit");
const fechaNacimientoInput = document.getElementById("fechaNacimiento");
const emailInput = document.getElementById("email");
const edadInput = document.getElementById("edad");
const validarButton = document.getElementById("validarButton");

// Expresiones regulares para cada campo
const carnetRegex = /^[A-Za-z]{2}\d{3}$/;
const nombreRegex = /^[A-Za-zÁÉÍÓÚÑáéíóúñ\s]+$/;
const duiRegex = /^\d{8}-\d{1}$/;
const nitRegex = /^\d{4}-\d{6}-\d{3}-\d{1}$/;
const fechaNacimientoRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const edadRegex = /^\d+$/;

// Función para validar el formulario
function validarFormulario() {
    // Obtener valores de cada campo
    const carnet = carnetInput.value;
    const nombre = nombreInput.value;
    const dui = duiInput.value;
    const nit = nitInput.value;
    const fechaNacimiento = fechaNacimientoInput.value;
    const email = emailInput.value;
    const edad = edadInput.value;

    // Validar cada campo
    if (!carnetRegex.test(carnet)) {
        alert("Carnet inválido. Formato dos letras y tres números. Ejemplo: AB001.");
        carnetInput.focus();
        return;
    }

    if (!nombreRegex.test(nombre)) {
        alert("Nombre inválido. Debe contener solo letras y espacios.");
        nombreInput.focus();
        return;
    }

    if (!duiRegex.test(dui)) {
        alert("DUI inválido. Debe contener 8 números. Formato: ########-#.");
        duiInput.focus();
        return;
    }

    if (!nitRegex.test(nit)) {
        alert("NIT inválido. Formato: ####-######-###-#. Ej. 3243-325432-321-1");
        nitInput.focus();
        return;
    }

    if (!fechaNacimientoRegex.test(fechaNacimiento)) {
        alert("Fecha de nacimiento inválida. Formato: DD/MM/YYYY.");
        fechaNacimientoInput.focus();
        return;
    }

    if (!emailRegex.test(email)) {
        alert("Correo electrónico inválido.");
        emailInput.focus();
        return;
    }

    if (!edadRegex.test(edad)) {
        alert("Edad inválida. Debe contener solo números.");
        edadInput.focus();
        return;
    }

    alert("Formulario válido");
}

// Asigna el evento de clic al botón de validar
validarButton.onclick = validarFormulario;
