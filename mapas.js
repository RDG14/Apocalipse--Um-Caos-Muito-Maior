function adicionarmapa(){
    let m = prompt('Digite o mapa que quer abrir: ')
    let mapa = document.getElementById('mapas')

    if(m == 'mapainicial1'){
        mapa.innerHTML = `<img src="Mapas/parte 1/mapas iniciais/mapa-inicial-1.png" alt="" class="mapa">`
    }

    if(m == 'mapainicial2'){
        mapa.innerHTML = `<img src="Mapas/parte 1/mapas iniciais/mapa-inicial-2.png" alt="" class="mapa">`
    }
}