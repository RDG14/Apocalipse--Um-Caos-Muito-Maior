let vida = document.getElementById('vida')
let v = 100
let vmx = 100
vida.innerHTML += `${v}/${vmx}`

function funçaovida(){
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


let sanidade = document.getElementById('sanidade')
let s = 100
sanidade.innerHTML += `${s}/100`

function funçaosanidade(){
    let escolha = confirm('OK para adicionar ou tirar vida. CANCELAR para rolar dado de sanidade.')

    if(escolha == true){
        let incremento = confirm('Aperte OK para adicionar e CANCELAR para tirar')

        if(incremento == true){
            let n = Number(prompt('Digite o valor a ser adicionado: '))
            let soma = s + n
            s = soma
            sanidade.innerHTML = `Sanidade: ${s}/100`
        }
    
        else{
            let n = Number(prompt('Digite o valor a ser adicionado: '))
            let subtração = s - n
            s = subtração
            sanidade.innerHTML = `Sanidade: ${s}/100`
        }
    }

    else{
        let n = Math.floor(Math.random() * 101)

        if(n == 0){
            n = 1
        }

        if(n > s){
            alert(`${n} = fracasso`)
        }

        if(n < s){
            alert(`${n} = sucesso`)
        }
    }
}