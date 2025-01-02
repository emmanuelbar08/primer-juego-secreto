/*
Desafíos
1. Crea una lista vacía llamada "listaGenerica".
2. Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
3. Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
4. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
5. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
6. Crea una función que calcule el promedio de los elementos en una lista de números.
7. Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
8. Crea una función que devuelva la suma de todos los elementos en una lista.
9. Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
10. Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
11. Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
*/

1.
let listaGenerica =[];

2.
let lenguajesDeProgramacion =['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

3.
lenguajesDeProgramacion.push('Java', 'Ruby','GoLang')

console.log(lenguajesDeProgramacion)

4.
function elementosLenguajesProgramacion() {
    console.log(lenguajesDeProgramacion)
    return;
}

5. 
function inversoLenguajesProgramacion() {
    let listaDeInversos = [];
    lenguajesDeProgramacion.forEach((lenguaje)=>{
        listaDeInversos.unshift(lenguaje)
    })
    return listaDeInversos;
}

console.log(inversoLenguajesProgramacion())

6.
/* se coloca el valor de i como 0 para que se pueda mostrar el primer elemento, 
y si es menor que el tamaño de la lista entonces se suma 1 para de esa manera pasar a la posicion
siguiente que seria el 1 y asi sucesivamente, para luego sumar la posicion de ese numero dentro de 
la variable sumaTotal y luego dividir el valor final con el tamaño de la lista*/

let listaNumerica = [1,2,3,4,5]

function promediolista(listaEscogida) {
    let sumaTotal = 0;
    for(let i = 0; i<listaEscogida.length; i++) {
        sumaTotal += listaEscogida[i];
    }
    let promedio=sumaTotal/listaEscogida.length
    return promedio;
}

promediolista(listaNumerica)

7.

listaNumerica=[1,2,3,4,5]

function numeroGrandePequeño(lista) {
    listaMayor=[0];
    listaMenor=[0];
    
    for(let i = 1 ; i < lista.length; i++)
    if (lista[i]>listaMayor ){
        listaMayor=lista[i];
    }
    if (lista[i]<listaMenor){

        listaMenor=lista[i];
    } else {
        listaMenor=lista[i];
        }
        return console.log(`El numero mayor de la lista ${listaMayor} y el numero menor es ${listaMenor}`)
}

numeroGrandePequeño(listaNumerica)



8.

let listaNumerica = [1,2,3,4,5]

function sumaLista(listaEscogida) {
    let sumaTotal = 0;
    for(let i = 0; i<listaEscogida.length; i++) {
        sumaTotal += listaEscogida[i];
    }
return console.log(`La suma de todos los elementos de la lista es ${sumaTotal}`)
}

sumaLista(listaNumerica)

9.
let listaNumerica = [23,54,76,89,32,21]
function posicionElemento(listaEscogida,elemento){
    let posicion = 0
    if (listaEscogida.includes(elemento)){
        for (let i =0;i<listaEscogida.length;i++)
        if (listaEscogida[i] === elemento){
                posicion = i
    }
    return posicion
    } else {
        return posicion = -1
}
}

posicionElemento(listaNumerica,23)

10.

listaTipoA = [23,43,54,65,76]
listaTipoB = [32,34,45,56,67]


function sumaDeListas(lista1,lista2){
    let sumaTotaldeListas=[];
    if (lista1.length==lista2.length){
        for (let i=0; i<lista1.length;i++){
            sumaTotaldeListas.push(lista1[i]+lista2[i])
        }

        return sumaTotaldeListas
    } else{
    return console.log(`Las listas proporcionadas no son del mismo tamaño`)
}


}

sumaDeListas(listaTipoA,listaTipoB)

11.
listaNumerica = [2,3,4,5,6,7,8,9]

function listaCuadrado(lista){
    let cuadradoElemento = [];
    listaNumerica.forEach((elemento)=>{
        cuadradoElemento.push(elemento*elemento) 
    })
    return cuadradoElemento
}

listaCuadrado(listaNumerica)

