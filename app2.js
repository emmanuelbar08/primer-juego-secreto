/* en este punto declaramos las variables pero no les damos valores sino hasta 
el final cuando se hace uso de la funcion condicionesIniciales*/

let numeroSecreto = 0;

let intentos = 0; 

//creamos la variable que sera el maximo de numeros sorteados
let numeroMaximo = 10;

// creamos la lista en la cual se añadiran los numeros aleatorios generados para que no se repitan cuando se reinicie el juego

let listaNumerosSorteados = [];

// ahora empezamos a darle interactividad a nuestro apartado visual creando funciones para esto 
function asignarTextoElementoHtml (elemento, texto){
    let elementohtml = document.querySelector(elemento);
    elementohtml.innerHTML= texto;
    return;
}


function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById(`valorUsuario`).value);

    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElementoHtml(`p`,`Bien hecho! Acertaste el número en ${intentos} ${(intentos === 1) ? `vez` : `veces`}`);
        document.getElementById("reiniciar").removeAttribute(`disabled`);

    }else {
        //Cuando el usuario no acertó.
        if (numeroDeUsuario>numeroSecreto){
            asignarTextoElementoHtml(`p`,`El numero secreto es menor, intenta de nuevo`);
        } else {
            asignarTextoElementoHtml(`p`,`El numero secreto es mayor, intenta de nuevo`);
        }
        intentos++
        limpiarCaja();
    }
    return;
}   

function limpiarCaja() {
    document.querySelector(`#valorUsuario`).value = ``;
} 

/* ahora modificamos nuestra funcion generarNumeroSecreto para incluir el metodo.includes el cual ira añadiendo
los numeros que ya han sido escogidos como numero secreto para que no aparezcan de nuevo
y se mantenga la aleatoridad*/

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    // si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElementoHtml(`p`, `Se sortearon todos los numeros posibles, si deseas jugar de nuevo recarga la pagina`);
    } else {
    // si el numero generado esta incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        
        // si el numero generado no esta incluido en la lista
        // retornamos simple y llanamente la variable numeroGenerado ya que el numero aleatorio que se genero
        //  no se encuentra en la lista y ademas incluimos ese numero en la lista para que no aparezca cuando se reinicie el juego     
        } else {
            listaNumerosSorteados.push(numeroGenerado)
            return numeroGenerado;
        }
        
    }
    
} 

/* Creamos una funcion que incluya a todas estas condiciones
1. mostrar los mensajes de inicio del juego
2. generar el numero aleatorio 
3. darle valor al intento 
*/   

function condicionesIniciales() {
    asignarTextoElementoHtml(`h1`,`Juego del numero secreto`);
    asignarTextoElementoHtml(`p`,`Por favor indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

/* creamos la funcion que permitira el reinicio del juego, la cual limpiara la caja, 
devolvera las condiciones iniciales y deshabilitara el boton de nuevo juego*/

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector(`#reiniciar`).setAttribute(`disabled`, `true`);
}

/* Ojo esta funcion de condicionesIniciales se activa a continuacion 
para que se de inicio al juego por primera vez 
*/

condicionesIniciales();


