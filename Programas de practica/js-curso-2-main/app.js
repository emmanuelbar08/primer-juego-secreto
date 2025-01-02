let titulopractica = document.querySelector(`h1`);
titulopractica.innerHTML= `Hora del desafio`;

function clicadoconsole() {
    alert(`El botón fue clicado`)
}

function clicadoprompt() {
    let ciudad = prompt(`Puedes decirme el nombre de una ciudad de brazil?`)
    alert(`Estuve en ${ciudad} y me acorde de ti`)
}

function clicadoalerta() {
    alert(`Yo amo JS`)
}

function clicadosuma() {
    let numero1 = parseInt(prompt(`Por favor dame el primer numero`))
    let numero2 = parseInt(prompt(`Ahora por favor indica el segundo numero`))
    resultado = numero1+numero2
    alert(`el resultado de la suma de ${numero1} y ${numero2} es ${resultado}`)
}

