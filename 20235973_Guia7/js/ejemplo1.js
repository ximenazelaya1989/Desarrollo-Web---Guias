// ACCEDIENDO A LA REFERENCIA DEL FORMULARIO QUE TENDRA LOS NUEVOS ELEMENTOS
const newForm = document.getElementById("idNewForm");

// ACCEDIENDO A LA REFERENCIA DE BOTONES
const buttonCrear = document.getElementById("idBtnCrear");
const buttonAddElemento = document.getElementById("idBtnAddElement");

// CREANDO CONTENEDOR PARA LOS NUEVOS ELEMENTOS
const elementosContainer = document.createElement("div");
elementosContainer.setAttribute("id", "elementosContainer");
newForm.appendChild(elementosContainer); 

// NUEVO BOTON PARA VALIDAR LOS CAMPOS AGREGADOS AL FORMULARIO
const buttonValidateForm = document.createElement("button");
buttonValidateForm.textContent = "Validar Formulario";
buttonValidateForm.className = "btn btn-primary mt-3";
buttonValidateForm.style.display = "block"; 
buttonValidateForm.style.marginTop = "20px"; 
newForm.appendChild(buttonValidateForm);  

// ACCEDIENDO AL VALOR DEL SELECT PARA DETERMINAR EL TIPO DE ELEMENTO A CREAR
const cmbElemento = document.getElementById("idCmbElemento");

// ACCEDIENDO A LOS CONTROLES DEL MODAL
const tituloElemento = document.getElementById("idTituloElemento");
const nombreElemento = document.getElementById("idNombreElemento");

// CREANDO MODAL CON BOOSTRAP
const modal = new bootstrap.Modal(document.getElementById("idModal"), {});

// FUNCION PARA VALIDAR ID ÚNICO
const isUniqueID = function (id) {
    return !document.getElementById(id); 
};

// FUNCION PARA VERIFICAR CAMPOS COMPLETOS Y SELECCIONADOS
const validateFormFields = function (event) {
    
    event.preventDefault();

    const elements = elementosContainer.children; 
    let isFormValid = true; 

    for (let element of elements) {
        const input = element.querySelector("input, select, textarea");

        if (input) {
            // Limpiar cualquier estilo de error previo
            input.classList.remove("is-invalid");

            // Verificar si el campo está completo
            if ((input.type === "checkbox" || input.type === "radio") && !input.checked) {
                isFormValid = false;
                input.classList.add("is-invalid"); 
            } else if (input.value === "") {
                isFormValid = false;
                input.classList.add("is-invalid"); 
            }
        }
    }

    
    if (isFormValid) {
        alert("Todos los campos están completos");
    } else {
        alert("Por favor, completa todos los campos resaltados.");
    }
};

// AGREGANDO FUNCIONES
const verificarElemento = function () {
    let elemento = cmbElemento.value;
    if (elemento != "") {
        modal.show();
    } else {
        alert("Debe seleccionar el elemento que se creara");
    }
};

// FUNCION PARA CREAR UN ELEMENTO CON LABEL FLOTANTE Y ICONO
const createElementWithFloatingLabel = function (element, labelText, userId) {
    const labelId = document.createElement("span");
    labelId.textContent = `ID de control: ${userId}`; 
    labelId.style.display = "block";
    labelId.style.marginBottom = "5px";

    const divElemento = document.createElement("div");
    divElemento.setAttribute("class", "form-floating mb-3");

    const labelElemento = document.createElement("label");
    labelElemento.setAttribute("for", element.id);
    
    const iconLabel = document.createElement("i");
    iconLabel.setAttribute("class", "bi bi-tag"); 
    iconLabel.style.marginRight = "5px"; 

    labelElemento.appendChild(iconLabel);  
    labelElemento.appendChild(document.createTextNode(labelText)); 

    divElemento.appendChild(element);
    divElemento.appendChild(labelElemento);

    elementosContainer.appendChild(labelId);
    elementosContainer.appendChild(divElemento);
};

const newSelect = function () {
    const idNuevoElemento = `id${nombreElemento.value}`;
    if (!isUniqueID(idNuevoElemento)) {
        alert("El ID de control ya existe. Por favor ingrese uno único.");
        return;
    }

    let addElemento = document.createElement("select");
    addElemento.setAttribute("id", idNuevoElemento);
    addElemento.setAttribute("class", "form-select");

    for (let i = 1; i <= 10; i++) {
        let addOption = document.createElement("option");
        addOption.value = i;
        addOption.innerHTML = `Opcion ${i}`;
        addElemento.appendChild(addOption);
    }

    createElementWithFloatingLabel(addElemento, tituloElemento.value, nombreElemento.value);
};

const newRadioCheckbox = function (newElemento) {
    const idNuevoElemento = `id${nombreElemento.value}`;
    if (!isUniqueID(idNuevoElemento)) {
        alert("El ID de control ya existe. Por favor ingrese uno único.");
        return;
    }

    let addElemento = document.createElement("input");
    addElemento.setAttribute("id", idNuevoElemento);
    addElemento.setAttribute("type", newElemento);
    addElemento.setAttribute("class", "form-check-input");

    let labelElemento = document.createElement("label");
    labelElemento.setAttribute("class", "form-check-label");
    labelElemento.setAttribute("for", idNuevoElemento);
    labelElemento.textContent = tituloElemento.value;

    let divElemento = document.createElement("div");
    divElemento.setAttribute("class", "form-check");

    divElemento.appendChild(addElemento);
    divElemento.appendChild(labelElemento);

    elementosContainer.appendChild(divElemento); 
};

const newInput = function (newElemento) {
    const idNuevoElemento = `id${nombreElemento.value}`;
    if (!isUniqueID(idNuevoElemento)) {
        alert("El ID de control ya existe. Por favor ingrese uno único.");
        return;
    }

    let addElemento = document.createElement("input");
    addElemento.setAttribute("id", idNuevoElemento);
    addElemento.setAttribute("type", newElemento);
    addElemento.setAttribute("class", "form-control");
    addElemento.setAttribute("placeholder", tituloElemento.value);

    createElementWithFloatingLabel(addElemento, tituloElemento.value, nombreElemento.value);
};

// AGREGANDO EVENTOS A LOS BOTONES
buttonCrear.onclick = () => {
    verificarElemento();
};

buttonAddElemento.onclick = () => {
    if (nombreElemento.value != "" && tituloElemento.value != "") {
        let elemento = cmbElemento.value;

        if (elemento == "select") {
            newSelect();
        } else if (elemento == "radio" || elemento == "checkbox") {
            newRadioCheckbox(elemento);
        } else if (["text", "number", "date", "color", "email", "textarea"].includes(elemento)) {
            newInput(elemento);
        } else {
            alert("Tipo de elemento no soportado.");
        }
    } else {
        alert("Faltan campos por completar");
    }
};

buttonValidateForm.onclick = validateFormFields;
