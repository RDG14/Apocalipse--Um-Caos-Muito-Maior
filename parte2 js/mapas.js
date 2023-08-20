
function adicionamapa(){
    let m = prompt('Digite o mapa que quer abrir: ')
    let mapa = document.getElementById('mapas')

    if(m == 'nenhum'){
        mapa.innerHTML = ''
    }

    if(m == 'mansao'){
        mapa.innerHTML =`<img src="Mapas/parte 2/Mansão.png" alt="" class="mapa">`
    }

    if(m == 'mansao parte 2'){
        mapa.innerHTML = `<img src="Mapas/parte 2/Mansão-parte-2.png" alt="" class="mapa">`
    }

    if(m == 'mansao 2 andar'){
        mapa.innerHTML = `<img src="Mapas/parte 2/Mansão 2 andar.png" alt="" class="mapa">`
    }

    if(m == 'campo de batalha'){
        mapa.innerHTML = `<img src="Mapas/parte 2/Campo de Batalha 1.png" alt="" class="mapa">`
    }

    if(m == 'campo de batalha 2'){
        mapa.innerHTML = `<img src="Mapas/parte 2/Campo de Batalha 2.png" alt="" class="mapa">`
    }

    if(m == 'campo de batalha 3'){
        mapa.innerHTML = `<img src="Mapas/parte 2/Campo de Batalha 3.png" alt="" class="mapa">`
    }

    if(m == 'celas'){
        mapa.innerHTML = `<img src="Mapas/parte 2/Celas.png" alt="" class="mapa">`
    }

    if(m == 'mapa inicial 1'){
        mapa.innerHTML = `<img src="Mapas/parte 3/mapa inicial 1.png" alt="" class="mapa">`
    }

    if(m == 'mapa inicial 2'){
        mapa.innerHTML = `<img src="Mapas/parte 3/mapa inicial 2.png" alt="" class="mapa">`
    }

    if(m == 'mapa inicial 3'){
        mapa.innerHTML = `<img src="Mapas/parte 3/mapa inicial 3.png" alt="" class="mapa">`
    }

    if(m == 'casa 1'){
        mapa.innerHTML = `<img src="Mapas/parte 3/casa 1.png" alt="" class="mapa">`
    }

    if(m == 'casa 2'){
        mapa.innerHTML = `<img src="Mapas/parte 3/casa 2.png" alt="" class="mapa">`
    }

    if(m == 'casa 3'){
        mapa.innerHTML = `<img src="Mapas/parte 3/casa 3.png" alt="" class="mapa">`
    }

    if(m == 'casa 4'){
        mapa.innerHTML = `<img src="Mapas/parte 3/casa 4.png" alt="" class="mapa">`
    }

    if(m == 'casa 5'){ 
        mapa.innerHTML = `<img src="Mapas/parte 3/casa 5.png" alt="" class="mapa">`
    }

    if(m == 'casa 6'){
        mapa.innerHTML = `<img src="Mapas/parte 3/casa 6.png" alt="" class="mapa">`
    }

    if(m == 'igreja'){
        mapa.innerHTML = `<img src="Mapas/parte 3/igreja.png" alt="" class="mapa">`
    }
    
    //CARTAS

    if(m == 'carta do quarto da casa'){
        mapa.innerHTML = 
        `<section>
            <p>12/04/2022</p>
            <p>Ganhei o prêmio de melhor aluno do ano da minha escola.</p>
            <p>Papai ficou muito contente ele diz que sou muito inteligente.</p>
            <p>A mamãe não demonstrou estar muito feliz mas ela deve ter gostado.</p>
            <br>
            <p>Eu gostei muito desse prêmio. Adoro quando papai comenta dele.</p>
            <p>Ele sempre diz: Meu filho o ganhador do premio o mais inteligente.</p>
            <p>Ele sempre ri depois.</p>
        </section>`
    }

    if(m == 'carta casa 1'){
        mapa.innerHTML = `<img src="Mapas/parte 3/Casa 1/Carta da cozinha.png" alt="" class="mapa">`
    }

    if(m == 'carta casa 4'){
        mapa.innerHTML = `<img src="Mapas/parte 3/Casa 4/Carta do escritório.png" alt="" class="mapa">`
    }



    //PORTAS

    if(m == 'bau'){ //casa 2
        mapa.innerHTML = `<img src="Mapas/parte 3/Casa 2/Baú.png" alt="" class="mapa">`
    }

    if(m == 'porta 1'){ //casa 2
        mapa.innerHTML = `<img src="Mapas/parte 3/Casa 2/Porta do depósito.png" alt="" class="mapa">`
    }

    if(m == 'porta 2'){ //casa 5
        mapa.innerHTML = `<img src="Mapas/parte 3/Casa 5/Porta de caveira.png" alt="" class="mapa">`
    }


    //ITENS NÃO PEGÁVEIS

    if(m == 'livro'){ //casa 3
        mapa.innerHTML = `<img src="Mapas/parte 3/Casa 3/livro.png" alt="" class="mapa">`
    }



    //MERCADOR

    if(m == 'mercador'){
        mapa.innerHTML = `<iframe src="Mercador/mercador.html" frameborder="1" width="400px" height="400px"></iframe>`
    }

    //CULTISTA

    if(m == 'cultista'){
        mapa.innerHTML = `<iframe src="Cultista/cultista.html" frameborder="1" width="400px" height="400px"></iframe>`
    }

}


