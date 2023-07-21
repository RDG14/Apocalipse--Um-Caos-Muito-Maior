let d = 3600
let p = document.getElementById('dinheiro')
p.innerHTML = `${d} moedas`


function contarmoeda(){
let incremento = confirm('OK para adicionar. CANCELAR para tirar')

if(incremento == true){
    let n = Number(prompt('Qual valor você quer adicionar?'))
    let soma = d + n
    d = soma

    p.innerHTML = `${d} moedas`
} 

else{
    let n = Number(prompt('Qual valor você quer tirar?'))
    let subtração = d - n
    d = subtração

    p.innerHTML = `${d} moedas`
}

}

function cura(){
    d = d-1500
    p.innerHTML = `${d} moedas`

}

function kitmedico(){
    d = d-4000
    p.innerHTML = `${d} moedas`
}

function muniçaop(){
    d = d-1000
    p.innerHTML = `${d} moedas`
}

function coronhamelhoradaah(){
    d = d-7000
    p.innerHTML = `${d} moedas`
}


//Melhoria nas Armas

//AMT Hardballer

function melhoriadanoamt(){
    d = d-1500
    p.innerHTML = `${d} moedas`
}

function melhoria2danoamt(){
    d = d-5000
    p.innerHTML = `${d} moedas`
}

function cadenciadetiro(){
    d = d-8000
    p.innerHTML = `${d} moedas`
}

function frequenciadetiro(){
    d = d-15000
    p.innerHTML = `${d} moedas`
}


//MEDICINA

function curacompleta(){
    d = d-10000
    p.innerHTML = `${d} moedas`
}

function curaparcial(){
    d = d-7000
    p.innerHTML = `${d} moedas`
}
