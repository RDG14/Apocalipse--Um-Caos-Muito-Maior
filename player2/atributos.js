let vida = document.getElementById('vida')
let v = 89
let vmx = 110
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
let s = 84
sanidade.innerHTML += `${s}/100`

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