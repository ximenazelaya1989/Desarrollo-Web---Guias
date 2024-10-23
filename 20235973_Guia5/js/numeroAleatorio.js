//Generamos un numero aleatorio que se encuentre en el rango del 1 al 25
const numeroAleatorio = Math.floor(Math.random()*25)+1;
//Creamos una cosntante que permite identificar el maximo de intentos
const numeroIntentos = 3;
//Guardara el numero de intentos que realiza el usuario
let intentos = 1;

function generarNumeroAleatorio(){
    //Definimos una variable para impresion de mensajes
    let mensaje;
    //Utilizamos el dom para acceder al parrafo creado
    const parrafo = document.querySelector("#idParrafo");
    //Verificamos en que intento esta el usuario
    if (intentos <= numeroIntentos){
        let numero = prompt(
            "¿Qué número se ha generado (Intento "+ intentos + ")?"
        );
        //Verificamos el numero aleatorio con el ingresado por el usuario
        if (numero == numeroAleatorio){
            mensaje = `!Es sorprendente!, pudiste adivinar el número oculto (${numeroAleatorio}). Refresque la página para volver a jugar.`;
        } else if(intentos == numeroIntentos){
            mensaje = `Su número de intentos ha terminado. El número oculto era: ${numeroAleatorio}. Refresque la página para volver a jugar.`;
        } else {

            if (numero > numeroAleatorio){
                mensaje = `El número es menor que ${numero}.`;
            } else {
                mensaje = `El número es mayor que ${numero}.`;
            }
            mensaje += ` Vuelve a intentar. Quedan ${
                numeroIntentos - intentos
            } intentos.`;
        }

        //aumentamos el valor de los intentos
        intentos++;
    } else {
        mensaje = `Su número de intentos ha terminado. El número oculto era: ${numeroAleatorio}. Refresque la página para volver.`;
    }
    parrafo.innerHTML = mensaje;
}

    



