

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


    if (i == 'faca'){
        item1.innerHTML += `<img src="itens/primeira-parte/primeira-arma.png" alt="" class="item" id="faca">`
        item1.innerHTML += `<p>FACA</p>`
    }

    if (i == 'lanterna'){
        item2.innerHTML += `<img src="itens/primeira-parte/lanterna.png" alt="" class="item">`
        item2.innerHTML += `<p>LANTERNA</p>`
    }

    if(i == 'foto de familia'){
        item3.innerHTML += `<img src="itens/primeira-parte/foto-da-familia.png" alt="" class="item">`
        item3.innerHTML += `<p>FOTO DE FAMÍLIA</p>`
    }

    if(i == 'alavanca da sala'){
        item4.innerHTML += `<img src="itens/primeira-parte/alavanca-da-sala.png" alt="" class="item">`
        item4.innerHTML += `<p>ALAVANCA</p>`
    }

    if(i == 'fita 1'){
        item5.innerHTML += `<img src="itens/primeira-parte/fita1.png" alt="" class="item">`
        item5.innerHTML += `<p>FITA 1</p>`
    }

    if(i == 'fusivel do quarto'){
        item6.innerHTML += `<img src="itens/primeira-parte/fusivel-do-quarto.png" alt="" class="item">`
        item6.innerHTML += `<p>FUSÍVEL</p>`
    }

    if(i == 'fluido quimico'){
        item7.innerHTML += `<img src="itens/fluido-quimico.png" alt="" class="item">`
        item7.innerHTML += `<p>FLUÍDO QUÍMICO</p>`
    }

    if(i == 'ervas'){
        item8.innerHTML += `<img src="itens/ervas.png" alt="" class="item">`
        item8.innerHTML += `<p>ERVAS</p>`
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

    if(i == 'faca'){
        item1.innerHTML = ''
    }

    if(i == 'lanterna'){
        item2.innerHTML = ''
    }

    if(i == 'foto de familia'){
        item3.innerHTML = ''
    }

    if(i == 'alavanca da sala'){
        item4.innerHTML = ''
    }

    if(i == 'fita 1'){
        item5.innerHTML = ''
    }

    if(i == 'fusivel do quarto'){
        item6.innerHTML = ''
    }

    if(i == 'fluido quimico'){
        item7.innerHTML = ''
    }

    if(i == 'ervas'){
        item8.innerHTML = ''
    }

}