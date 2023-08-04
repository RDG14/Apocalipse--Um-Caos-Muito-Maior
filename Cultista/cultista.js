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

function frasco1(){
    d = d - 15000
    p.innerHTML = `${d} moedas`
}

function frasco2(){
    d = d - 15000
    p.innerHTML = `${d} moedas` 
}

function frasco3(){
    
}