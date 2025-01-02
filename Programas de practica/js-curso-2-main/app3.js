1.
function holaMundo(){
    console.log(`Hola mundo!`);
    return;
}
holaMundo()

2.
function nombrePersonal(nombre){
    console.log(`Hola ${nombre}`);
    return; 
}

nombrePersonal(`emmanuel`)

3. 
function doblenumero(x) {
    let z = x*2;
    return z;

}

doblenumero(5)

4.
function promedioDe3(x,y,z) {
    let prom = (x+y+z)/3;
    return prom;
}

promedioDe3(2,4,6)

5.
function numeroMayor(x,y){
    if (x > y){
        console.log(`el numero ${x} es mayor a ${y}`)
    } else if (y > x){
        console.log(`el numero ${y} es mayor a ${x}`)
    
    }else {
        console.log(`los numeros son iguales`)
    }

    return ;
}

numeroMayor(6, 7)

6.
function numeroMultSimismo(x) {
    let z = x*x;
    return z;

}

numeroMultSimismo(5);

