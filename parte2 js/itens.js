let quant_fq = 1 //FLUÍDO QUÍMICO
let quant_ervas = 0 //ERVAS
let quant_cura = 0 //CURA
let quant_polvora = 0 //PÓLVORA
let quant_muniçaop = 0 //MUNIÇÃO DE PISTOLA

function adicionaritem(){
    let i = prompt('Adicione o item')
    let item1 = document.getElementById('itens1')
    let item2 = document.getElementById('itens2')
    let item3 = document.getElementById('itens3')
    let item4 = document.getElementById('itens4')
    let item5 = document.getElementById('itens5')
    let item6 = document.getElementById('itens6')
    let item7 = document.getElementById('itens7')
    let item8 = document.getElementById('itens8')
    let item9 = document.getElementById('itens9')
    let item10 = document.getElementById('itens10')
    let item11= document.getElementById('itens11')
    let item12 = document.getElementById('itens12')
    let item13 = document.getElementById('itens13')
    let item14 = document.getElementById('itens14')
    let item15 = document.getElementById('itens15')
    let item16 = document.getElementById('itens16')
    let item17 = document.getElementById('itens17')
    let item18 = document.getElementById('itens18')
    let item19 = document.getElementById('itens19')
    let item20 = document.getElementById('itens20')
    let item21 = document.getElementById('itens21')
    


    if (i == 'faca'){
        item1.innerHTML += `<img src="itens/primeira-parte/primeira-arma.png" alt="" class="item" id="faca">`
        item1.innerHTML += `<p>Faca</p>`
    }

    if (i == 'lanterna'){
        item2.innerHTML += `<img src="itens/primeira-parte/lanterna.png" alt="" class="item">`
        item2.innerHTML += `<p>Lanterna</p>`
    }

    if(i == 'foto de familia'){
        item3.innerHTML += `<img src="itens/primeira-parte/foto-da-familia.png" alt="" class="item">`
        item3.innerHTML += `<p>Foto de Família</p>`
    }

    if(i == 'amt hardballer'){
        item9.innerHTML += `<img src="itens/segunda-parte/pistola-amt hardballer.png" alt="" class="item">`
        item9.innerHTML += `<p>AMT Hardballer</p>`
    }

    if(i == 'amuleto'){
        item10.innerHTML += `<img src="itens/segunda-parte/amuleto.png" alt="" class="item">`
        item10.innerHTML += `<p>Amuleto</p>`
    }

    if(i == 'kit medico'){
        item11.innerHTML = `<img src="itens/kit medico.png" alt="" class="item">`
        item11.innerHTML += `<p>Kit médico</p>`
    }

    if(i == 'chave de setas'){
        item14.innerHTML += `<img src="itens/segunda-parte/chave da escultura.png" alt="" class="item">`
        item14.innerHTML  += `<p>Chave de Setas</p>`
    }

    if(i == 'chave do açougue'){
        item15.innerHTML = `<img src="itens/segunda-parte/chave do açougue.png" alt="" class="item">`
        item15.innerHTML  += `<p>Chave do Açougue</p>`
    }

    if(i == 'cristal valioso'){
        item16.innerHTML = `<img src="itens/segunda-parte/Cristal valioso.png" alt="" class="item">`
        item16.innerHTML += `<p>Cristal Valioso</p>`
    }

    if(i == 'ruby'){
        item17.innerHTML = `<img src="itens/segunda-parte/Ruby.png" alt="" class="item">`
        item17.innerHTML += `<p>Ruby</p>`
    }


//FLUÍDO QUÍMICO



    if(i == 'fq'){

        let quantidade = Number(prompt('Quantas fluídos químicos você pegou?'))
        let soma = quant_fq + quantidade
        quant_fq = soma

        item4.innerHTML = `<img src="itens/fluido-quimico.png" alt="" class="item">`
        item4.innerHTML += `<p>${quant_fq} Fluídos Químicos</p>`
    }


//ERVAS    

    if(i == 'ervas'){

        let quantidade = Number(prompt('Quantas ervas você pegou?'))
        let soma = quant_ervas + quantidade
        quant_ervas = soma

        item5.innerHTML = `<img src="itens/ervas.png" alt="" class="item">`
        item5.innerHTML += `<p>${quant_ervas} Ervas</p>`
    }


//CURA

    if(i == 'cura'){

        let quantidade = Number(prompt('Quantas curas você pegou?'))
        let soma = quant_cura + quantidade
        quant_cura = soma

        item6.innerHTML =  `<img src="itens/cura.png" alt="" class="item">`
        item6.innerHTML += `<p>${quant_cura} Curas</p>`
    }


//PÓLVORA

    if(i == 'polvora'){

        let quantidade = Number(prompt('Quantas pólvoras você pegou?'))
        let soma = quant_polvora + quantidade
        quant_polvora = soma

        item7.innerHTML = `<img src="itens/polvora.png" alt="" class="item">`
        item7.innerHTML += `<p>${quant_polvora} Pólvoras</p>`
    }


//MUNIÇÃO DE PISTOLA

    if(i == 'muniçao de pistola'){

            let quant = 0

            let quantidade = Number(prompt('Quantas munições você ficará?'))
            let soma = quant + quantidade
            quant = soma

            item8.innerHTML = `<img src="itens/munição de pistola.png" alt="" class="item">`
            item8.innerHTML += `<p>${quant} Munições de pistola</p>`
            
    }

//PANOS

    if(i == 'pano'){

        let quant = 0

        let quantidade = Number(prompt('Quantos panos você ficará?'))
        let soma = quant + quantidade
        quant = soma

        item12.innerHTML = `<img src="itens/pano.png" alt="" class="item">`
        item12.innerHTML += `<p>${quant} Panos</p>`
        
    }

//METAL

if(i == 'metal'){

    let quant = 0

    let quantidade = Number(prompt('Quantos metais você ficará?'))
    let soma = quant + quantidade
    quant = soma

    item13.innerHTML = `<img src="itens/Metal.png" alt="" class="item">`
    item13.innerHTML += `<p>${quant} Metais</p>`
    
}

}


function tiraritem(){
    let i = prompt('Tire o item')
    let item1 = document.getElementById('itens1')
    let item2 = document.getElementById('itens2')
    let item3 = document.getElementById('itens3')
    let item4 = document.getElementById('itens4')
    let item5 = document.getElementById('itens5')
    let item6 = document.getElementById('itens6')
    let item7 = document.getElementById('itens7')
    let item8 = document.getElementById('itens8')
    let item9 = document.getElementById('itens9')
    let item10 = document.getElementById('itens10')
    let item11= document.getElementById('itens11')
    let item12 = document.getElementById('itens12')
    let item13 = document.getElementById('itens13')
    let item14 = document.getElementById('itens14')
    let item15 = document.getElementById('itens15')
    let item16 = document.getElementById('itens16')
    let item17 = document.getElementById('itens17')
    let item18 = document.getElementById('itens18')
    let item19 = document.getElementById('itens19')
    let item20 = document.getElementById('itens20')
    let item21 = document.getElementById('itens21')

    if(i == 'faca'){
        item1.innerHTML = ''
    }

    if(i == 'lanterna'){
        item2.innerHTML = ''
    }

    if(i == 'foto de familia'){
        item3.innerHTML = ''
    }

    if(i == 'amt hardballer'){
        item9.innerHTML = ''
    }

    if(i == 'amuleto'){
        item10.innerHTML = ''
    }

    if(i == 'kit medico'){
        item11.innerHTML = ''
    }

    if(i == 'chave de setas'){
        item14.innerHTML = ''
    }

    if(i == 'chave do açougue'){
        item15.innerHTML = ''
    }

    if(i == 'cristal valioso'){
        item16.innerHTML = ''
    }

    if(i == 'ruby'){
        item17.innerHTML = ''
    }

    

//FLUÍDO QUÍMICO

    if(i == 'fq'){
        let quantidade = prompt('Quantos fluídos químicos você usou?')

        let subtração = quant_fq - quantidade
        quant_fq = subtração

        item4.innerHTML = `<img src="itens/fluido-quimico.png" alt="" class="item">`
        item4.innerHTML += `<p>${quant_fq} Fluídos Químicos</p>`

        if(quant_fq == 0){
            item4.innerHTML = ''
        }
        
    }


//ERVAS

    if(i == 'ervas'){
        let quantidade = prompt('Quantas ervas você usou?')

        let subtração = quant_ervas - quantidade
        quant_ervas = subtração

        item5.innerHTML = `<img src="itens/ervas.png" alt="" class="item">`
        item5.innerHTML += `<p>${quant_ervas} Ervas</p>`

        if(quant_ervas == 0){
            item5.innerHTML = ''
        }

    }

//CURA

if(i == 'cura'){
    let quantidade = prompt('Com quantos curas você ficará?')

    let subtração = quant_cura - quantidade
    quant_cura = subtração

    item6.innerHTML =  `<img src="itens/cura.png" alt="" class="item">`
    item6.innerHTML += `<p>${quant_cura} Curas</p>`

    if(quant_cura == 0){
        item6.innerHTML = ''
    }

}



//PÓLVORA

    if(i == 'polvora'){
        let quantidade = prompt('Com quantas pólvoras você ficará?')

        let subtração = quant_polvora - quantidade
        quant_polvora = subtração

        item7.innerHTML = `<img src="itens/polvora.png" alt="" class="item">`
        item7.innerHTML += `<p>${quant_polvora} Pólvoras</p>`

        if(quant_polvora == 0){
            item7.innerHTML = ''
        }

    }


//MUNIÇÃO DE PISTOLA

    if(i == 'muniçao de pistola'){
        let quantidade = prompt('Com quantas munições você ficará?')

        if(quantidade == '0'){
            item8.innerHTML = ''
        } else{
            item8.innerHTML = `<img src="itens/munição de pistola.png" alt="" class="item">`
            item8.innerHTML += `<p>${quantidade} Munições de pistola</p>`
        }
    }

//PANOS

if(i == 'pano'){
    let quantidade = prompt('Com quantos panos você ficará?')

    if(quantidade == '0'){
        item12.innerHTML = ''
    } else{
        item12.innerHTML = `<img src="itens/pano.png" alt="" class="item">`
        item12.innerHTML += `<p>${quantidade} Panos</p>`
    }
}

//METAL

if(i == 'metal'){
    let quantidade = prompt('Com quantos metais você ficará?')

    if(quantidade == '0'){
        item13.innerHTML = ''
    } else{
        item13.innerHTML = `<img src="itens/metal.png" alt="" class="item">`
        item13.innerHTML += `<p>${quantidade} Metais</p>`
    }
}


}


function dano(){
    let d = prompt('Qual arma você quer utilizar')

    if(d == 'd1'){ //soco
        let n = Math.floor(Math.random() * 6)

        if(n == 0){
            alert('1 de dano')
        }

        if(n == 1){
            alert('2 de dano')
        } 

        if(n == 2){
            alert('3 de dano')
        }

        if(n == 3){
            alert('4 de dano')
        }

        if(n == 4){
            alert('5 de dano')
        }

        if(n == 5){
            alert('6 de dano')
        }
    }

    if(d == 'd2'){ //Faca
        let n = Math.floor(Math.random() * 8)

        if(n == 0){
            alert('1 de dano')
        }

        if(n == 1){
            alert('2 de dano')
        } 

        if(n == 2){
            alert('3 de dano')
        }

        if(n == 3){
            alert('4 de dano')
        }

        if(n == 4){
            alert('5 de dano')
        }

        if(n == 5){
            alert('6 de dano')
        }

        if(n == 6){
            alert('7 de dano')
        }

        if(n == 7){
            alert('8 de dano')
        }
    }

    if(d == 'd3'){ //AMT Hardballer
        let n = Math.floor(Math.random() * 20)

        if(n == 0){
            alert('1 de dano')
        }

        if(n == 1){
            alert('2 de dano')
        } 

        if(n == 2){
            alert('3 de dano')
        }

        if(n == 3){
            alert('4 de dano')
        }

        if(n == 4){
            alert('5 de dano')
        }

        if(n == 5){
            alert('6 de dano')
        }

        if(n == 6){
            alert('7 de dano')
        }

        if(n == 7){
            alert('8 de dano')
        }

        if(n == 8){
            alert('9 de dano')
        }

        if(n == 9){
            alert('10 de dano')
        }

        if(n == 10){
            alert('11 de dano')
        }

        if(n == 11){
            alert('12 de dano')
        }

        if(n == 13){
            alert('13 de dano')
        }

        if(n == 14){
            alert('15 de dano')
        }

        if(n == 15){
            alert('16 de dano')
        }

        if(n == 16){
            alert('17 de dano')
        }

        if(n == 17){
            alert('18 de dano')
        }

        if(n == 18){
            alert('19 de dano')
        }

        if(n == 19){
            alert('20 de dano')
        }
    }
}

function curas(){
    let item6 = document.getElementById('itens6')
    let item11= document.getElementById('itens11')

    let cura = prompt('Qual item você quer usar para curar.')

    if(cura == 'cura'){
        let dado20 = Math.floor(Math.random() * 20)
        dado20 ++
        let dado12 = Math.floor(Math.random() * 12)
        dado12 ++

        let soma = dado20 + dado12

        alert(`${dado20} + ${dado12} = ${soma}`)

        let quantidade = prompt('Quantas curas você ficará')
    }

    if(cura == 'kit medico'){
        let atributo = confirm('OK para Medicina. CANCELAR para Primeiros Socorros')

        if(atributo == true){
            let dado20 = Math.floor(Math.random() * 20)
            dado20 ++
            let dado12 = Math.floor(Math.random() * 12)
            dado12 ++
    
            let soma1 = dado20 + dado12

            let dado20_2 = Math.floor(Math.random() * 20)
            dado20_2 ++
            let dado12_2 = Math.floor(Math.random() * 12)
            dado12_2 ++

            let soma2 = dado20_2 + dado12_2

            if(soma1 > soma2){
                alert(`${dado20} + ${dado12} = ${soma1}        /      2º dado = ${soma2}`)
            } 
            
            else if(soma1 < soma2){
                alert(`${dado20_2} + ${dado12_2} = ${soma2}       /      1º dado = ${soma1}`)
            }

            item11.innerHTML = ''
        }

        else{
            let dado20 = Math.floor(Math.random() * 20)
            dado20 ++
            let dado12 = Math.floor(Math.random() * 12)
            dado12 ++
    
            let soma1 = dado20 + dado12

            alert(`${dado20} + ${dado12} = ${soma1}`)

            item11.innerHTML = ''
        }
    }
}


