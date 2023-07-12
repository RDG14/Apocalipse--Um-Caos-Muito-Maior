

function adicionaritem(){
    let i = prompt('Adicione o item')
    let item1 = document.getElementById('itens1')
    let item2 = document.getElementById('itens2')
    let item3 = document.getElementById('itens3')


    if (i == 'faca'){
        item1.innerHTML += `<img src="itens/primeira-arma.png" alt="" class="item" id="faca">`
        item1.innerHTML += `<p>FACA</p>`
    }

    if (i == 'lanterna'){
        item2.innerHTML += `<img src="itens/lanterna.png" alt="" class="item">`
        item2.innerHTML += `<p>LANTERNA</p>`
    }

    if(i == 'fotodefamilia'){
        item3.innerHTML += `<img src="itens/foto-da-familia.png" alt="" class="item">`
        item3.innerHTML += `<p>FOTO DE FAMÍLIA</p>`
    }

}

function tiraritem(){
    let i = prompt('Tire o item')
    let item1 = document.getElementById('itens1')
    let item2 = document.getElementById('itens2')
    let item3 = document.getElementById('itens3')

    if(i == 'faca'){
        item1.innerHTML = ''
    }

    if(i == 'lanterna'){
        item2.innerHTML = ''
    }

    if(i == 'fotodefamilia')
        item3.innerHTML = ''



}