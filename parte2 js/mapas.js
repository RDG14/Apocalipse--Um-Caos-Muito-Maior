

function adicionamapa(){
    let m = prompt('Digite o mapa que quer abrir: ')
    let mapa = document.getElementById('mapas')

    if(m == 'nenhum'){
        mapa.innerHTML = ''
    }

    if(m == 'casa'){
        mapa.innerHTML = `<img src="Mapas/parte 2/Casa.png" alt="" class="mapa">`
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


    //PORTAS

    if(m == 'porta 1'){
        mapa.innerHTML = '<img src="Mapas/parte 2/Porta do açougue.png" alt="" class="mapa">'
    }

    if(m == 'porta 2'){
        mapa.innerHTML = '<img src="Mapas/parte 2/Porta do necrotério.png" alt="" class="mapa">'
    }

    if(m == 'necroterio'){
        mapa.innerHTML = '<img src="Mapas/parte 2/Necrotério.png" alt="" class="mapa">'
    }


    //MERCADOR

    if(m == 'mercador'){
        mapa.innerHTML = `<iframe src="mercador.html" frameborder="1" width="400px" height="400px"></iframe>`
    }

}


