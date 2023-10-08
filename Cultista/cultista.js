let d = 0
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

//Frascos

function frasco1(){
    d = d - 10000
    p.innerHTML = `${d} moedas`
}

function frasco2(){
    d = d - 10000
    p.innerHTML = `${d} moedas` 
}

function frasco3(){
    d = d - 5000
    p.innerHTML = `${d} moedas`
}

function frasco4(){
    d = d - 5000
    p.innerHTML = `${d} moedas`
}

//Habilidades

function hab1(){
    d = d - 20000
    p.innerHTML = `${d} moedas`
}

function hab2(){
    d = d - 20000
    p.innerHTML = `${d} moedas`
}

function hab3(){
    d = d - 10000
    p.innerHTML = `${d} moedas`
}

function hab4(){
    d = d - 30000
    p.innerHTML = `${d} moedas`
}

//Mofos

function mofo1(){
    d = d - 30000
    p.innerHTML = `${d} moedas`
}

function mofo2(){
    d = d - 30000
    p.innerHTML = `${d} moedas`
}

function mofo3(){
    d = d - 30000
    p.innerHTML = `${d} moedas`
}

function mofo4(){
    d = d - 30000
    p.innerHTML = `${d} moedas`
}