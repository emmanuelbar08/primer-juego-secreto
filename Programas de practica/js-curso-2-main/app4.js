/* 
1. Crea una función que calcule el índice de masa corporal (IMC) de una persona a
a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.

2. Crea una función que calcule el valor del factorial de un número pasado 
como parámetro.

3. Crea una función que convierta un valor en dólares, pasado como parámetro,
y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo
con el valor del dólar en tu país). Para esto, considera la cotización del 
dólar igual a R$4,80.

4. Crea una función que muestre en pantalla el área y el perímetro de una sala 
rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.

5. Crea una función que muestre en pantalla el área y el perímetro de una 
sala circular, utilizando su radio que se proporcionará como parámetro. 
Considera Pi = 3,14.

6. Crea una función que muestre en pantalla la tabla de multiplicar de 
un número dado como parámetro.
*/


1. 
function IndiceMasaCorporal(alturaMts, pesoKg){
    let calculoIDM = pesoKg/(alturaMts)**2
    return calculoIDM; 

}    

console.log(IndiceMasaCorporal(1.50,60))

2.
function factorial(numero){
    let resultadofacto = numero
}

3.

function convertidorDePesoColADolares(pesocol){
    let conversionpesodol = pesocol/4375.86
    return conversionpesodol;
}

console.log(convertidorDePesoColADolares(1000))

4. 
function areayPerimetroDeRectangulo(anchuraMts,alturaMts){
    let areaRectangulo = anchuraMts*alturaMts 
    let PerimetroRectangulo = anchuraMts*2+alturaMts*2
    let resultadoAreaYPeriRec= console.log(`El area de la sala rectangular es ${areaRectangulo} metros cuadrados y el perimetro de esta es de ${PerimetroRectangulo} metros`) 

    return resultadoAreaYPeriRec

}

console.log(areayPerimetroDeRectangulo(20,100))

5.

function areayPerimetroDeCirculo(radioEnMts){
    let areaDeCirculo = 3.14 * radioEnMts**2;
    let perimetroDeCirculo = 2 * 3.14 * radioEnMts;
    let resultadoAreaYPeriCirc = console.log(`El radio de la sala circular es de ${areaDeCirculo} metros cuadrados y el perimetro de esta es de ${perimetroDeCirculo} metros`)


    return resultadoAreaYPeriCirc
}
console.log(areayPerimetroDeCirculo(6))

6.

function tablaDeMultiplicar(numero){
    let tablapor1 = numero*1
    let tablapor2 = numero*2
    let tablapor3 = numero*3
    let tablapor4 = numero*4
    let tablapor5 = numero*5
    let tablapor6 = numero*6
    let tablapor7 = numero*7
    let tablapor8 = numero*8
    let tablapor9 = numero*9
    let tablapor10 = numero*10

    resultadotabla = console.log(`La tabla de multiplicar de ${numero} es:
        ${numero}*1=${tablapor1}
        ${numero}*2=${tablapor2}
        ${numero}*3=${tablapor3}
        ${numero}*4=${tablapor4}
        ${numero}*5=${tablapor5}
        ${numero}*6=${tablapor6}
        ${numero}*7=${tablapor7}
        ${numero}*8=${tablapor8}
        ${numero}*9=${tablapor9}
        ${numero}*10=${tablapor10}    `)

        return resultadotabla
}

console.log(tablaDeMultiplicar(8))