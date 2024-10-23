function aviso(){
    
    alert("Bienvenido al mundo JavaScript");
}

function confirmacion(){
    //Los valores que peude almacenar la variable confirmacion
    // son true o false
    let confirmacion = confirm("Desea salir de la sesion?");
    /*para imprimir una variable en un cadena podemos utilizar las comillas simples inversas `` y luego hacemos el llamado de la variable con ${aqui debera de escribir el nombre de la variable} */
    alert(`Valor seleccionado ${confirmacion}`);
}

function capturarDatos(){
    let nombre = prompt("Cual es su nombre?");
    let edad = prompt("Cual es su de edad?", 0);
    alert(`Su nombre es ${nombre} y su edad ${edad}`);
}

function dibujarParrafo(){
    let parrafo = prompt(
        "Escriba la informacion que desea visualizar en el parrafo"
    );

    /* Utilizaremos la API DOM para acceder al elemento, <p id="idParrafo"></p> que hemos en nuestro documento HTML */
    const p = document.querySelector("#idParrafo");
    p.innerHTML = parrafo;
}
