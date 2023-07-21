

function adicionamapa(){
    let m = prompt('Digite o mapa que quer abrir: ')
    let mapa = document.getElementById('mapas')

    if(m == 'nenhum'){
        mapa.innerHTML = ''
    }

    if(m == 'casa'){
        mapa.innerHTML = `<img src="../Mapas/parte 2/Casa.png" alt="" class="mapa">`
    }

    if(m == 'mansao'){
        mapa.innerHTML =`<img src="../Mapas/parte 2/Mansão.png" alt="" class="mapa">`
    }

    if(m == 'mansao parte 2'){
        mapa.innerHTML = `<img src="../Mapas/parte 2/Mansão-parte-2.png" alt="" class="mapa">`
    }

    if(m == 'mansao 2 andar'){
        mapa.innerHTML = `<img src="../Mapas/parte 2/Mansão 2 andar.png" alt="" class="mapa">`
    }

    if(m == 'mapa inicial'){
        mapa.innerHTML = `<img src="../Mapas/parte 2/Mapa inicial.png" alt="" class="mapa">`
    }

    if(m == 'galpao'){
        mapa.innerHTML = `<img src="../Mapas/parte 2/Fundo do Galpão.png" alt="" class="mapa">`
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

    if(m == 'escrita do livro'){
        mapa.innerHTML =
        `<section style="text-align: justify; height: 500px;">
            <p>Aquele ser misterioso vira para mim, olha no fundo dos meus olhos. </p>
                
            <p>Me sinto consumido por um medo enorme enquanto a criatura olha no fundo dos meus olhos, e me diz: <br> <br><strong>"Eu posso chegar cedo ou tarde, porém sou inevitável. EU SOU A MORTE!"</strong></p>

            <p>Eu rapidamente sem pensar duas vezes me viro e começo a correr desesperadamente para a saída daquele prédio velho. Encontro minha irmã no meio de minha fuga, rapidamente grito para ela correr.</p>
            
            <p>E em desespero mútuo corremos rapidamente até a saída daquele prédio. Ao saírmos nos deparamos com a luz do sol, de forma que vimos que a criatura não saiu do prédio e apenas retornou ao mesmo com um olhar demoníaco.</p>
        </section>`
    }

    if(m == 'carta do quarto'){
        mapa.innerHTML = `<img src="../Mapas/parte 2/Carta do quarto da mansao.png" alt="" class="mapa">`
    }


    //PORTAS

    if(m == 'porta 1'){
        mapa.innerHTML = '<img src="../Mapas/parte 2/Porta do açougue.png" alt="" class="mapa">'
    }

    if(m == 'porta 2'){
        mapa.innerHTML = '<img src="../Mapas/parte 2/Porta do necrotério.png" alt="" class="mapa">'
    }

    if(m == 'necroterio'){
        mapa.innerHTML = '<img src="../Mapas/parte 2/Necrotério.png" alt="" class="mapa">'
    }

    if(m == 'porta 3'){
        mapa.innerHTML = '<img src="../Mapas/parte 2/porta da mansao-parte2.png" alt="" class="mapa">'
    }

    if(m == 'porta 4'){
        mapa.innerHTML = '<img src="../Mapas/parte 2/porta saída da mansão.png" alt="" class="mapa">'
    }

    if(m == 'porta 5'){
        mapa.innerHTML = '<img src="../Mapas/parte 2/sala de armas.png" alt="" class="mapa">'
    }

    if(m == 'porta 6'){
        mapa.innerHTML = '<img src="../Mapas/parte 2/Porta do depósito.png" alt="" class="mapa">'
    }

    if(m == 'porta 7'){
        mapa.innerHTML = '<img src="../Mapas/parte 2/porta da sala-sala de orgaos.png" alt="" class="mapa">'
    }


    //ITENS NÃO PEGÁVEIS

    if(m == 'livro'){
        mapa.innerHTML = '<img src="../Mapas/parte 2/Livro-O Caos.png" alt="" class="mapa">'
    }


    //MERCADOR

    if(m == 'mercador'){
        mapa.innerHTML = `<iframe src="../mercador.html" frameborder="1" width="400px" height="400px"></iframe>`
    }

}