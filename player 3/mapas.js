
function adicionamapa(){
    let m = prompt('Digite o mapa que quer abrir: ')
    let mapa = document.getElementById('mapas')

    if(m == 'nenhum'){
        mapa.innerHTML = ''
    }

    if(m == 'inicio 1'){
        mapa.innerHTML = `<img src="../Mapas/parte 2/mapa inicial 1.png" alt="" class="mapa">`
    }

    if(m == 'campo de batalha'){
        mapa.innerHTML = `<img src="../Mapas/parte 2/Campo de Batalha 1.png" alt="" class="mapa">`
    }

    if(m == 'campo de batalha 2'){
        mapa.innerHTML = `<img src="../Mapas/parte 2/Campo de Batalha 2.png" alt="" class="mapa">`
    }

    if(m == 'campo de batalha 3'){
        mapa.innerHTML = `<img src="../Mapas/parte 2/Campo de Batalha 3.png" alt="" class="mapa">` 
    }

    if(m == 'celas'){
        mapa.innerHTML = `<img src="../Mapas/parte 2/Celas.png" alt="" class="mapa">` 
    }

    if(m == 'mapa inicial 1'){
        mapa.innerHTML = `<img src="../Mapas/parte 3/mapa inicial 1.png" alt="" class="mapa">` 
    }

    if(m == 'mapa inicial 2'){
        mapa.innerHTML = `<img src="../Mapas/parte 3/mapa inicial 2.png" alt="" class="mapa">`
    }

    if(m == 'mapa inicial 3'){
        mapa.innerHTML = `<img src="../Mapas/parte 3/mapa inicial 3.png" alt="" class="mapa">`
    }

    if(m == 'casa 1'){
        mapa.innerHTML = `<img src="../Mapas/parte 3/casa 1.png" alt="" class="mapa">`
    }

    if(m == 'casa 2'){
        mapa.innerHTML = `<img src="../Mapas/parte 3/casa 2.png" alt="" class="mapa">`
    }

    if(m == 'casa 3'){
        mapa.innerHTML = `<img src="../Mapas/parte 3/casa 3.png" alt="" class="mapa">`
    }

    if(m == 'casa 4'){
        mapa.innerHTML = `<img src="../Mapas/parte 3/casa 4.png" alt="" class="mapa">`
    }

    if(m == 'casa 5'){ 
        mapa.innerHTML = `<img src="../Mapas/parte 3/casa 5.png" alt="" class="mapa">`
    }

    if(m == 'casa 6'){
        mapa.innerHTML = `<img src="../Mapas/parte 3/casa 6.png" alt="" class="mapa">`
    }

    if(m == 'igreja'){
        mapa.innerHTML = `<img src="../Mapas/parte 3/igreja.png" alt="" class="mapa">`
    }

    if(m == 'valvulas'){
        mapa.innerHTML = `<img src="../Mapas/parte 4/2 - Sala Inundada/Válvulas.png" alt="" class="mapa">`
    }

    if(m == 'cofre'){
        mapa.innerHTML = `<img src="../Mapas/parte 4/3 - Sala Escura/Cofre.png" alt="" class="mapa">`
    }

    if(m == 'maleta'){
        mapa.innerHTML = `<img src="../Mapas/parte 4/3 - Sala Escura/Maleta.png" alt="" class="mapa">`
    }

    if(m == 'corredor'){
        mapa.innerHTML = `<img src="../Mapas/parte 4/4 - Sala com Luz Fraca/Corredor.png" alt="" class="mapa">`
    }

    if(m == 'pilar'){
        mapa.innerHTML = `<img src="../Mapas/parte 4/9 - Sala de Fogo/Pilar.png" alt="" class="mapa">`
    }

    if(m == 'simbolos'){
        mapa.innerHTML = `<img src="../Mapas/parte 4/9 - Sala de Fogo/Símbolos.png" alt="" class="mapa">`
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
        mapa.innerHTML = `<img src="../Mapas/parte 3/Casa 1/Carta da cozinha.png" alt="" class="mapa">`
    }

    if(m == 'carta casa 4'){
        mapa.innerHTML = `<img src="../Mapas/parte 3/Casa 4/Carta do escritório.png" alt="" class="mapa">`
    }

    if(m == 'diario 1'){
        mapa.innerHTML = `<img src="../Mapas/parte 4/1 - Sala dos Armários/1 - Armários/Igor/Diário 1.png" alt="" class="mapa">`
    }

    if(m == 'diario 2'){
        mapa.innerHTML = `<img src="../Mapas/parte 4/1 - Sala dos Armários/1 - Armários/Igor/Diário 2.png" alt="" class="mapa">`
    }

    if(m == 'carta 1'){
        mapa.innerHTML = `<img src="../Mapas/parte 4/1 - Sala dos Armários/1 - Armários/Rafael/Carta.png" alt="" class="mapa">`
    }

    if(m == 'carta 2'){
        mapa.innerHTML = `<img src="../Mapas/parte 4/2 - Sala Inundada/Baú/Carta.png" alt="" class="mapa">`
    }

    if(m == 'carta 3'){
        mapa.innerHTML = `<img src="../Mapas/parte 4/3 - Sala Escura/Carta.png" alt="" class="mapa">`
    }

    if(m == 'carta 4'){
        mapa.innerHTML = `<img src="../Mapas/parte 4/4 - Sala com Luz Fraca/Carta.png" alt="" class="mapa">`
    }

    if(m == 'carta 5'){
        mapa.innerHTML = `<img src="../Mapas/parte 4/5 - Sala dos Espinhos/Carta.png" alt="" class="mapa">`
    }

    if(m == 'mensagem'){
        mapa.innerHTML = `<img src="../Mapas/parte 4/2 - Sala Inundada/mensagem.png" alt="" class="mapa">`
    }

    if(m == 'pedaço de papel'){
        mapa.innerHTML = `<img src="../Mapas/parte 4/7 - Sala das Centopéias/pedaço de papell.png" alt="" class="mapa">`
    }

    if(m == 'papel com codigo'){
        mapa.innerHTML = `<img src="../Mapas/parte 4/11 - Sala das Serras/Papel com código.png" alt="" class="mapa">`
    }

    if(m == 'desenho'){
        mapa.innerHTML = `<img src="../Mapas/parte 4/13 - Sala de Sangue/Desenho.png" alt="" class="mapa">`
    }

    if(m == 'carta 6'){
        mapa.innerHTML = `<img src="../Mapas/parte 4/14 - Homem Centopéia/Carta.png" alt="" class="mapa">`
    }

    if(m == 'carta 7'){
        mapa.innerHTML = `<img src="../Mapas/parte 4/17- Sala de mineração/carta 1.png" alt="" class="mapa">`
    }

    if(m == 'carta 8'){
        mapa.innerHTML = `<img src="../Mapas/parte 4/17- Sala de mineração/carta 2.png" alt="" class="mapa">`
    }

    if(m == 'l1'){
        mapa.innerHTML = `<img src="../Mapas/parte 4/19 - Biblioteca Destruída/1ª Fileira/1ª Estante/Livro - A morte de Lina/Capa do livro.png" alt="" class="mapa">`
    }

    if(m == 'l1p1'){
        mapa.innerHTML = `<img src="../Mapas/parte 4/19 - Biblioteca Destruída/1ª Fileira/1ª Estante/Livro - A morte de Lina/Pag 1 - livro.png" alt="" class="mapa">`
    }

    if(m == 'l1p2'){
        mapa.innerHTML = `<img src="../Mapas/parte 4/19 - Biblioteca Destruída/1ª Fileira/1ª Estante/Livro - A morte de Lina/Pag 2 - Livro.png" alt="" class="mapa">`
    }

    if(m == 'l2'){
        mapa.innerHTML = `<img src="../Mapas/parte 4/19 - Biblioteca Destruída/1ª Fileira/1ª Estante/6 Mandamentos da Rainha/Capa do livro.png" alt="" class="mapa">`
    }

    if(m == 'l2p1'){
        mapa.innerHTML = ` <img src="../Mapas/parte 4/19 - Biblioteca Destruída/1ª Fileira/1ª Estante/6 Mandamentos da Rainha/pag 1.png" alt="" class="mapa">`
    }

    if(m == 'l3'){
        mapa.innerHTML = `<img src="../Mapas/parte 4/19 - Biblioteca Destruída/1ª Fileira/2ª Estante/Livro DECORE-ME/Capa do livro.png" alt="" class="mapa">`
    }

    if(m == 'l3p1'){
        mapa.innerHTML = `<img src="../Mapas/parte 4/19 - Biblioteca Destruída/1ª Fileira/2ª Estante/Livro DECORE-ME/Pág 1.png" alt="" class="mapa">`
    }

    if(m == 'l3p2'){
        mapa.innerHTML = `<img src="../Mapas/parte 4/19 - Biblioteca Destruída/1ª Fileira/2ª Estante/Livro DECORE-ME/Pág 2.png" alt="" class="mapa">`
    }

    if(m == 'l3p3'){
        mapa.innerHTML = `<img src="../Mapas/parte 4/19 - Biblioteca Destruída/1ª Fileira/2ª Estante/Livro DECORE-ME/Pág 3.png" alt="" class="mapa">`
    }

    if(m == 'l4'){
        mapa.innerHTML = `<img src="../Mapas/parte 4/19 - Biblioteca Destruída/1ª Fileira/3ª Estante/Deuses Gregos/Capa do livro.png" alt="" class="mapa">`
    }

    if(m == 'l4p1'){
        mapa.innerHTML = `<img src="../Mapas/parte 4/19 - Biblioteca Destruída/1ª Fileira/3ª Estante/Deuses Gregos/Pag 1.png" alt="" class="mapa">`
    }

    if(m == 'l4p2'){
        mapa.innerHTML = `<img src="../Mapas/parte 4/19 - Biblioteca Destruída/1ª Fileira/3ª Estante/Deuses Gregos/Pag 2.png" alt="" class="mapa">`
    }

    if(m == 'l4p3'){
        mapa.innerHTML = `<img src="../Mapas/parte 4/19 - Biblioteca Destruída/1ª Fileira/3ª Estante/Deuses Gregos/Pag 3.png" alt="" class="mapa">`
    }

    if(m == 'l4p4'){
        mapa.innerHTML = `<img src="../Mapas/parte 4/19 - Biblioteca Destruída/1ª Fileira/3ª Estante/Deuses Gregos/Pag 4.png" alt="" class="mapa">`
    }

    if(m == 'l4p5'){
        mapa.innerHTML = `<img src="../Mapas/parte 4/19 - Biblioteca Destruída/1ª Fileira/3ª Estante/Deuses Gregos/Pag 5.png" alt="" class="mapa">`
    }

    if(m == 'l4p6'){
        mapa.innerHTML = `<img src="../Mapas/parte 4/19 - Biblioteca Destruída/1ª Fileira/3ª Estante/Deuses Gregos/Pag 6.png" alt="" class="mapa">`
    }

    if(m == 'l4p7'){
        mapa.innerHTML = `<img src="../Mapas/parte 4/19 - Biblioteca Destruída/1ª Fileira/3ª Estante/Deuses Gregos/Pag 7.png" alt="" class="mapa">`
    }

    if(m == 'l5'){
        mapa.innerHTML = `<img src="../Mapas/parte 4/19 - Biblioteca Destruída/1ª Fileira/3ª Estante/Os Maias/Capa do livro.png" alt="" class="mapa">`
    }

    if(m == 'l5p1'){
        mapa.innerHTML = `<img src="../Mapas/parte 4/19 - Biblioteca Destruída/1ª Fileira/3ª Estante/Os Maias/Pag 1.png" alt="" class="mapa">`
    }

    if(m == 'l5p2'){
        mapa.innerHTML = `<img src="../Mapas/parte 4/19 - Biblioteca Destruída/1ª Fileira/3ª Estante/Os Maias/Pag 2.png" alt="" class="mapa">`
    }

    if(m == 'l6'){
        mapa.innerHTML = `<img src="../Mapas/parte 4/19 - Biblioteca Destruída/1ª Fileira/3ª Estante/Charadas/Capa do livro.png" alt="" class="mapa">`
    }

    if(m == 'l6p1'){
        mapa.innerHTML = `<img src="../Mapas/parte 4/19 - Biblioteca Destruída/1ª Fileira/3ª Estante/Charadas/Pag 1.png" alt="" class="mapa">`
    }

    if(m == 'l7'){
        mapa.innerHTML = `<img src="../Mapas/parte 4/19 - Biblioteca Destruída/2ª Fileira/1ª Estante/Diário/Capa.png" alt="" class="mapa">`
    }

    if(m == 'l7p1'){
        mapa.innerHTML = `<img src="../Mapas/parte 4/19 - Biblioteca Destruída/2ª Fileira/1ª Estante/Diário/Pag 1.png" alt="" class="mapa">`
    }

    if(m == 'l7p2'){
        mapa.innerHTML = `<img src="../Mapas/parte 4/19 - Biblioteca Destruída/2ª Fileira/1ª Estante/Diário/Pag 2.png" alt="" class="mapa">`
    }


    //PORTAS

    if(m == 'bau'){
        mapa.innerHTML = `<img src="../Mapas/parte 3/Casa 2/Baú.png" alt="" class="mapa">`
    }

    if(m == 'porta 1'){
        mapa.innerHTML = `<img src="../Mapas/parte 3/Casa 2/Porta do depósito.png" alt="" class="mapa">`
    }

    if(m == 'porta 2'){ //casa 5
        mapa.innerHTML = `<img src="../Mapas/parte 3/Casa 5/Porta de caveira.png" alt="" class="mapa">`
    }

    if(m == 'porta 3'){
        mapa.innerHTML = `<img src="../Mapas/parte 4/2 - Sala Inundada/Porta.png" alt="" class="mapa">`
    }


    //ITENS NÃO PEGÁVEIS

    if(m == 'livro'){
        mapa.innerHTML = `<img src="../Mapas/parte 4/9 - Sala de Fogo/Livro.png" alt="" class="mapa">`
    }



    //MERCADOR

    if(m == 'mercador'){
        mapa.innerHTML = `<iframe src="../Mercador/mercador.html" frameborder="1" width="400px" height="400px"></iframe>`
    }


    //CULTISTA

    if(m == 'cultista'){
        mapa.innerHTML = `<iframe src="../Cultista/cultista.html" frameborder="1" width="400px" height="400px"></iframe>`
    }

}