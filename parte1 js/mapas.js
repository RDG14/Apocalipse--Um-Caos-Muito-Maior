function adicionarmapa(){
    let m = prompt('Digite o mapa que quer abrir: ')
    let mapa = document.getElementById('mapas')

    if(m == 'nenhum'){
        mapa.innerHTML = ''
    }

    if(m == 'mapa inicial 1'){
        mapa.innerHTML = `<img src="Mapas/parte 1/mapas iniciais/mapa-inicial-1.png" alt="" class="mapa">`
    }

    if(m == 'mapa inicial 2'){
        mapa.innerHTML = `<img src="Mapas/parte 1/mapas iniciais/mapa-inicial-2.png" alt="" class="mapa">`
    }

    if(m == 'casa 1 andar'){
        mapa.innerHTML = `<img src="Mapas/parte 1/mapas iniciais/Primeira Casa/Casa Parte 1 - 1º andar.png" alt="" class="mapa">`
    }

    if(m == 'casa 2 andar'){
        mapa.innerHTML = `<img src="Mapas/parte 1/mapas iniciais/Primeira Casa/Casa Parte 1 - 2º andar.png" alt="" class="mapa">`
    }

    if(m == 'passagem secreta do quarto'){
        mapa.innerHTML = `<img src="Mapas/parte 1/mapas iniciais/Primeira Casa/Passagem-secreta-quarto.png" alt="" class="mapa">`
    }

    if(m == 'continuaçao passagem secreta do quarto'){
        mapa.innerHTML = `<img src="Mapas/parte 1/mapas iniciais/Primeira Casa/Continuação-passagem-secreta-quarto.png" alt="" class="mapa">`
    }

    
    //CARTAS

    if(m == 'carta da sala da casa'){
        mapa.innerHTML = 
        `<section>
            <p>Os últimos serão os primeiros.</p>
            <p>Observe bem o local.</p>
        </section>`
    }

    if(m == 'carta do quarto da casa'){
        mapa.innerHTML = 
        `<section>
            <p>Meus parabés, está indo para o local certo.</p>
            <p style="text-align: center;"> :) </p>
        </section>`
    }
}