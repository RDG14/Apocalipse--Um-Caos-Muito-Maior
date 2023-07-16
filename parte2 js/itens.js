

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

    if(i == 'chave da escultura'){
        item14.innerHTML += `<img src="itens/segunda-parte/chave da escultura.png" alt="" class="item">`
        item14.innerHTML  += `<p>Chave de Setas</p>`
    }

    if(i == 'chave do açougue'){
        item15.innerHTML = `<img src="itens/segunda-parte/chave do açougue.png" alt="" class="item">`
        item15.innerHTML  += `<p>Chave do Açougue</p>`
    }


//FLUÍDO QUÍMICO

    if(i == 'fluido quimico'){

        let quant = 0

        let quantidade = Number(prompt('Quantas fluídos químicos você ficará?'))
        let soma = quant + quantidade
        quant = soma

        item4.innerHTML = `<img src="itens/fluido-quimico.png" alt="" class="item">`
        item4.innerHTML += `<p>${quant} Fluídos Químicos</p>`
    }


//ERVAS    

    if(i == 'ervas'){

        let quant = 0

        let quantidade = Number(prompt('Quantas ervas você ficará?'))
        let soma = quant + quantidade
        quant = soma

        item5.innerHTML = `<img src="itens/ervas.png" alt="" class="item">`
        item5.innerHTML += `<p>${quant} Ervas</p>`
    }


//CURA

    if(i == 'cura'){

        let quant = 0

        let quantidade = Number(prompt('Quantas curas você ficará?'))
        let soma = quant + quantidade
        quant = soma

        item6.innerHTML =  `<img src="itens/cura.png" alt="" class="item">`
        item6.innerHTML += `<p>${quant} Curas</p>`
    }


//PÓLVORA

    if(i == 'polvora'){

        let quant = 0

        let quantidade = Number(prompt('Quantas pólvoras você ficará?'))
        let soma = quant + quantidade
        quant = soma

        item7.innerHTML = `<img src="itens/polvora.png" alt="" class="item">`
        item7.innerHTML += `<p>${quant} Pólvoras</p>`
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

    

//FLUÍDO QUÍMICO

    if(i == 'fluido quimico'){
        let quantidade = prompt('Com quantos fluídos químicos você ficará?')

        if(quantidade == 'nenhum'){
            item4.innerHTML = ''
        } else{
            item4.innerHTML = `<img src="itens/fluido-quimico.png" alt="" class="item">`
            item4.innerHTML += `<p>${quantidade} Fluídos Químicos</p>`
        }
    }


//ERVA

    if(i == 'ervas'){
        let quantidade = prompt('Com quantos ervas você ficará?')

        if(quantidade == 'nenhuma'){
            item5.innerHTML = ''
        } else{
            item5.innerHTML = `<img src="itens/ervas.png" alt="" class="item">`
            item5.innerHTML += `<p>${quantidade} Ervas</p>`
        }

    }

//CURA

if(i == 'cura'){
    let quantidade = prompt('Com quantos curas você ficará?')

    if(quantidade == 'nenhuma'){
        item6.innerHTML = ''
    } else{
        item6.innerHTML =  `<img src="itens/cura.png" alt="" class="item">`
        item6.innerHTML += `<p>${quantidade} Curas</p>`
    }
}



//PÓLVORA

    if(i == 'polvora'){
        let quantidade = prompt('Com quantas pólvoras você ficará?')

        if(quantidade == 'nenhuma'){
            item7.innerHTML = ''
        } else{
            item7.innerHTML = `<img src="itens/polvora.png" alt="" class="item">`
            item7.innerHTML += `<p>${quantidade} Pólvoras</p>`
        }

    }


//MUNIÇÃO DE PISTOLA

    if(i == 'muniçao de pistola'){
        let quantidade = prompt('Com quantas munições você ficará?')

        if(quantidade == 'nenhuma'){
            item8.innerHTML = ''
        } else{
            item8.innerHTML = `<img src="itens/munição de pistola.png" alt="" class="item">`
            item8.innerHTML += `<p>${quantidade} Munições de pistola</p>`
        }
    }

//PANOS

if(i == 'pano'){
    let quantidade = prompt('Com quantos panos você ficará?')

    if(quantidade == 'nenhuma'){
        item12.innerHTML = ''
    } else{
        item12.innerHTML = `<img src="itens/pano.png" alt="" class="item">`
        item12.innerHTML += `<p>${quantidade} Panos</p>`
    }
}

//METAL

if(i == 'metal'){
    let quantidade = prompt('Com quantos panos você ficará?')

    if(quantidade == 'nenhum'){
        item13.innerHTML = ''
    } else{
        item13.innerHTML = `<img src="itens/metal.png" alt="" class="item">`
        item13.innerHTML += `<p>${quantidade} Metais</p>`
    }
}


}




