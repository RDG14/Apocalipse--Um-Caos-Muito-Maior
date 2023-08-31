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

function melhoria3danoamt(){
    d = d-8000
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

function carregadorestendido(){
    d = d - 10000
    p.innerHTML = `${d} moedas`
}


//Benelli

function melhoriadanobenelli(){
    d = d - 7000
    p.innerHTML = `${d} moedas`
}

function melhoriadano2benelli(){
    d = d - 10000
    p.innerHTML = `${d} moedas`
}

function melhoriadano3benelli(){
    d = d - 13000
    p.innerHTML = `${d} moedas`
}

function melhoriadano4benelli(){
    d = d - 18000
    p.innerHTML = `${d} moedas`
}

function melhoriadano5benelli(){
    d = d - 30000
    p.innerHTML = `${d} moedas`
}


//Machado Elétrico

function melhoriadanomachado(){
    d = d - 5000
    p.innerHTML = `${d} moedas`
}

function reforçoeletricidademachado(){
    d = d - 8000
    p.innerHTML = `${d} moedas`
}

function reforçoeletricidade2machado(){
    d = d - 14000
    p.innerHTML = `${d} moedas`
}

//FN-BALLISTA

let dano1_fn = document.getElementById('dano1-fn')

dano1_fn.addEventListener('click', function(){
    d = d-10000
    p.innerHTML = `${d} moedas`
})

let dano2_fn = document.getElementById('dano2-fn')

dano2_fn.addEventListener('click', function(){
    d = d - 15000
    p.innerHTML = `${d} moedas`
})

let dano3_fn = document.getElementById('dano3-fn')

dano3_fn.addEventListener('click', function(){
    d = d - 20000
    p.innerHTML = `${d} moedas`
})

let dano4_fn = document.getElementById('dano4-fn')

dano4_fn.addEventListener('click', function(){
    d = d - 25000
    p.innerHTML = `${d} moedas`
})

let dano5_fn = document.getElementById('dano5-fn')

dano5_fn.addEventListener('click', function(){
    d = d - 30000
    p.innerHTML = `${d} moedas`
})

//MEDICINA

function curacompleta(){
    d = d-10000
    p.innerHTML = `${d} moedas`
}

function curaparcial(){
    d = d-7000
    p.innerHTML = `${d} moedas`
}

