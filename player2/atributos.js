let vida = document.getElementById('vida')
let v = 51
let vmx = 134
vida.innerHTML += `${v}/${vmx}`

function funçaovida(){
    let confirmação = confirm('Aperte OK para mexer na vida atual. CANCELAR para mexer na vida máxima')

    if(confirmação == true){
        let incremento = confirm('Aperte OK para adicionar e CANCELAR para tirar')

        if(incremento == true){
            let n = Number(prompt('Digite o valor a ser adicionado: '))
            let soma = v + n
            v = soma
            vida.innerHTML = `Vida: ${v}/${vmx}`
        }
    
        else{
            let n = Number(prompt('Digite o valor a ser adicionado: '))
            let subtração = v - n
            v = subtração
            vida.innerHTML = `Vida: ${v}/${vmx}`
        }
    }

    if(confirmação == false){
        let incremento = confirm('Aperte OK para adicionar e CANCELAR para tirar')

        if(incremento == true){
            let n = Number(prompt('Digite o valor a ser adicionado: '))
            let soma = vmx + n
            vmx = soma
            vida.innerHTML = `Vida: ${v}/${vmx}`
        }
    
        else{
            let n = Number(prompt('Digite o valor a ser adicionado: '))
            let subtração = vmx - n
            vmx = subtração
            vida.innerHTML = `Vida: ${v}/${vmx}`
        }
    }

}


let sanidade = document.getElementById('sanidade')
let pontosanidade = document.getElementById('pontossanidade')
let s = 107
let smx = 134
sanidade.innerHTML += `${s}/${smx}`
let pontos_sanidade = 32
pontossanidade.innerHTML += `${pontos_sanidade}`

function funçaosanidade(){
    let confirmação = confirm('OK para mexer na sanidade atual. CANCELAR para mexer na sanidade atual')
    let escolha = confirm('OK para adicionar ou tirar sanidade. CANCELAR para rolar dado de sanidade.')

    if(confirmação == true){
        if(escolha == true){
            let incremento = confirm('Aperte OK para adicionar e CANCELAR para tirar')
    
            if(incremento == true){
                let n = Number(prompt('Digite o valor a ser adicionado: '))
                let soma = s + n
                s = soma
                sanidade.innerHTML = `Sanidade: ${s}/${smx}`
            }
        
            else{
                let n = Number(prompt('Digite o valor a ser adicionado: '))
                let subtração = s - n
                s = subtração
                sanidade.innerHTML = `Sanidade: ${s}/${smx}`
            }
        }

        if(confirmação == false){
            let incremento = confirm('Aperte OK para adicionar e CANCELAR para tirar')
    
            if(incremento == true){
                let n = Number(prompt('Digite o valor a ser adicionado: '))
                let soma = smx + n
                smx = soma
                sanidade.innerHTML = `Sanidade: ${s}/${smx}`
            }
        
            else{
                let n = Number(prompt('Digite o valor a ser adicionado: '))
                let subtração = smx - n
                smx = subtração
                sanidade.innerHTML = `Sanidade: ${s}/${smx}`
            }
        }
    }

    if(escolha == false){
        let n = Math.floor(Math.random() * 101)

        if(n == 0){
            n = 1
        }

        if(n >= pontos_sanidade){
            alert(`${n} = fracasso`)
        }

        if(n < pontos_sanidade){
            alert(`${n} = sucesso`)
        }
    }
}

let pontosdeesforço = document.getElementById('pontosdeesforço')
let pontos_de_esforço = 75
pontosdeesforço.innerHTML += `${pontos_de_esforço}/75`

pontosdeesforço.addEventListener('click', function(){
    let escolha = confirm('Aperte "OK" para adicionar e "CANCELAR" para tirar')

    if(escolha == true){
        let n = Number(prompt('Quantos pontos de esforço você recebeu?'))
        let soma = pontos_de_esforço + n
        pontos_de_esforço = soma
        pontosdeesforço.innerHTML = `Pontos de Esforço: ${pontos_de_esforço}/75`

    } else{
        let n = Number(prompt('Quantos pontos de esforço você usou?'))
        let subtração = pontos_de_esforço - n
        pontos_de_esforço = subtração
        pontosdeesforço.innerHTML = `Pontos de Esforço: ${pontos_de_esforço}/75`
    }
})