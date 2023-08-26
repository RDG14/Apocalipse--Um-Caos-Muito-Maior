
let dano1 = document.getElementById('dano1')
let dano2 = document.getElementById('dano2')
let dano3 = document.getElementById('dano3')
let dano4 = document.getElementById('dano4')
let incremento = 1


function salvardano1(){

    dano1.innerHTML = ''

    let dado20 = document.getElementById('d20')
    let dado12 = document.getElementById('d12')

    let dd20 = dado20.value
    let dd12 = dado12.value


    if(incremento == 1){
        let ataque = prompt('Qual o nome do ataque?')

        dd20 = dado20.value
        dd12 = dado12.value

        dano1.innerHTML = `${ataque}: `

        if(dd20 > 0){
            dano1.innerHTML += ` ${dd20}d20`
        }

        if(dd12 > 0){
            dano1.innerHTML += ` ${dd12}d12`
        }

    }

    
    dano1.addEventListener('click', function(){

        let incrementod20 = 1

        if(dd20 > 0){

            while(incrementod20 <= dd20){
                let d20 = Math.floor(Math.random() * 20 + 1)
                alert(`${incrementod20}d20 = ${d20}`)
    
                incrementod20++
            }
        }

        let incrementod12 = 1

        if(dd12 > 0){

            while(incrementod12 <= dd12){
                let d12 = Math.floor(Math.random() * 12 + 1)
                alert(`${incrementod12}d12 = ${d12}`)
    
                incrementod12++
            }
        }

    })

}

function salvardano2(){
    
    let dado20 = document.getElementById('d20')
    let dado12 = document.getElementById('d12')

    let dd20 = dado20.value
    let dd12 = dado12.value


    if(incremento == 1){
        let ataque = prompt('Qual o nome do ataque?')

        dd20 = dado20.value
        dd12 = dado12.value
        dano2.innerHTML = `${ataque}: ${dd12}d12`
    
        if(dd12 == 0){
            dano2.innerHTML = ''
        }
    }

    dano2.addEventListener('click', function(){

        let incremento = 1
    
        while(incremento <= dd12){
            let d12 = Math.floor(Math.random() * 12 + 1)
            alert(`${incremento}d12 = ${d12}`)
    
            incremento++
        }
    
    })
}





