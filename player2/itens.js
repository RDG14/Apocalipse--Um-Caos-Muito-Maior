let quant_fq = 3 //FLUÍDO QUÍMICO
let quant_ervas = 0 //ERVAS
let quant_cura = 2 //CURA
let quant_polvora = 0 //PÓLVORA
let quant_muniçaop = 0 //MUNIÇÃO DE PISTOLA
let quant_pano = 0 //PANO
let quant_metal = 0 //METAL
let quant_muniçaos = 0 //MUNIÇÃO DE SHOTGUN
let quant_bandagens = 0 //BANDAGENS
let quant_kitmedico = 2 //KIT MÉDICO
let quant_granadas = 0 //GRANADAS
let quant_muniçao_sniper = 0 //MUNIÇÃO DE SNIPER

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
    let item22 = document.getElementById('itens22')
    let item23 = document.getElementById('itens23')
    let item24 = document.getElementById('itens24')
    let item25 = document.getElementById('itens25')
    let item26 = document.getElementById('itens26')
    let item27 = document.getElementById('itens27')
    let item28= document.getElementById('itens28')
    let item29 = document.getElementById('itens29')
    let item30 = document.getElementById('itens30')
    let item31 = document.getElementById('itens31')
    let item32 = document.getElementById('itens32')
    let item33 = document.getElementById('itens33')
    let item34 = document.getElementById('itens34')
    let item35 = document.getElementById('itens35')
    let item36 = document.getElementById('itens36')
    let item37 = document.getElementById('itens37')
    let item38 = document.getElementById('itens38')
    let item39 = document.getElementById('itens39')
    let item40 = document.getElementById('itens40')
    let item41 = document.getElementById('itens41')
    let item42 = document.getElementById('itens42')
    let item43 = document.getElementById('itens43')


    if (i == 'machado'){
        item1.innerHTML += `<img src="../itens/segunda-parte/Machado.png" alt="" class="item" id="faca">`
        item1.innerHTML += `<p>Machado</p>`
    }

    if(i == 'chave branca'){
        item3.innerHTML += `<img src="../itens/parte 4/1 - Sala de Armários/Aline/Chave Branca.png" alt="" class="item">`
        item3.innerHTML += `<p>Chave Branca</p>`
    }

    if(i == 'pistola'){
        item9.innerHTML += `<img src="../itens/segunda-parte/pistola-amt hardballer.png" alt="" class="item">`
        item9.innerHTML += `<p>Pistola</p>`
    }

    if(i == 'frasco 2'){
        item10.innerHTML += `<img src="../itens/segunda-parte/Frasco melhoria sanidade.png" alt="" class="item">`
        item10.innerHTML += `<p>Frasco de líquido azul</p>`
    }

    if(i == 'kit medico'){
        let quantidade = Number(prompt('Quantas você pegou?'))
        let soma = quant_kitmedico + quantidade
        quant_kitmedico = soma

        if(quant_kitmedico == 1){
            item11.innerHTML = `<img src="../itens/kit medico.png" alt="" class="item">`
            item11.innerHTML += `<p>Kit médico</p>`
        }

        if(quant_kitmedico == 2){
            item11.innerHTML = `<img src="../itens/kit medico.png" alt="" class="item">`
            item11.innerHTML += `<p>Kit médico</p>`

            item22.innerHTML = `<img src="../itens/kit medico.png" alt="" class="item">`
            item22.innerHTML += `<p>Kit médico</p>`
        }
    }

    if(i == 'frasco'){
        item14.innerHTML = `<img src="../itens/segunda-parte/Frasco melhoria vida.png" alt="" class="item"></img>`
        item14.innerHTML += `<p>Frasco de líquido vermelho</p>`
    }

    if(i == 'frasco de sangue'){
        item15.innerHTML = `<img src="../itens/segunda-parte/Frasco melhoria vida.png" alt="" class="item"></img>`
        item15.innerHTML += `<p>Frasco de Sangue</p>`
    }

    if(i == 'cristal valioso'){
        item16.innerHTML = `<img src="../itens/segunda-parte/Cristal valioso.png" alt="" class="item">`
        item16.innerHTML += `<p>Cristal Valioso</p>`
    }

    if(i == 'ruby'){
        item17.innerHTML = `<img src="../itens/segunda-parte/Ruby.png" alt="" class="item">`
        item17.innerHTML += `<p>Ruby</p>`
    }

    if(i == 'chave de setas 2'){
        item18.innerHTML = `<img src="../itens/segunda-parte/Chave de setas melhorada.png" alt="" class="item"></img>`
        item18.innerHTML += `<p>Chave de Setas Melhorada</p>`
    }

    if(i == 'benelli'){
        item20.innerHTML = `<img src="../itens/segunda-parte/Shotgun Benelli M1014.png" alt="" class="item" style="width: 140px";></img>`
        item20.innerHTML += `<p>Benelli M1014</p>`

    }

    if(i == 'amuleto valioso'){
        item21.innerHTML = `<img src="../itens/segunda-parte/amuleto valioso.png" alt="" class="item"></img>`
        item21.innerHTML += `<p>Amuleto Valioso</p>`
    }

    if(i == 'escudo'){
        item25.innerHTML = `<img src="../itens/parte 3/Escudo.png" alt="" class="item"></img>`
        item25.innerHTML += `<p>Escudo</p>`
    }

    if(i == 'sniper'){
        item26.innerHTML = `<img src="../itens/parte 3/Sniper FN Ballista.png" alt="" class="item" style="width: 210px";></img>`
        item26.innerHTML += `<p>FN Ballista</p>`
    }

    if(i == 'anel vermelho'){
        item27.innerHTML = `<img src="../itens/parte 4/1 - Sala de Armários/Aline/Anel Vermelho.png" alt="" class="item">`
        item27.innerHTML += `<p>Anel Vermelho</p>`
    }

    if(i == 'alavanca'){
        item28.innerHTML = `<img src="../itens/parte 4/1 - Sala de Armários/Clara/Alavanca.png" alt="" class="item">`
        item28.innerHTML += `<p>Alavanca</p>`
    }

    if(i == 'bomba a'){
        item29.innerHTML = `<img src="../itens/Granada de atordoamento.png" alt="" class="item">`
        item29.innerHTML += `<p>Bomba de Atordoamento</p>`
    }

    if(i == 'lanterna'){
        item30.innerHTML = `<img src="../itens/primeira-parte/lanterna.png" alt="" class="item">`
        item30.innerHTML += `<p>Lanterna</p>`
    }

    if(i == 'bateria'){
        item31.innerHTML = `<img src="../itens/Bateria.png" alt="" class="item">`
        item31.innerHTML += `<p>Bateria</p>`
    }

    if(i == 'pistola 2'){
        item32.innerHTML = `<img src="../itens/parte 4/4 - Sala com Luz Fraca/Pistola - Astra Model.png" alt="" class="item" style="width: 120px;">`
        item32.innerHTML += `<p>Astra Model</p>`
    }

    if(i == 'lampada'){
        item33.innerHTML = `<img src="../itens/parte 4/4 - Sala com Luz Fraca/lâmpada.png" alt="" class="item">`
        item33.innerHTML += `<p>Lâmpada</p>`
    }

    if(i == 'bomba de e'){
        item34.innerHTML = `<img src="../itens/Granada de estilhaço.png" alt="" class="item">`
        item34.innerHTML += `<p>Bomba de Estilhaço</p>`
    }

    if(i == 'frasco 3'){
        item35.innerHTML = `<img src="../itens/Frasco PE.png" alt="" class="item">`
        item35.innerHTML += `<p>Frasco de Líquido Marrom</p>`
    }

    if(i == 'cruz'){
        item36.innerHTML = `<img src="../itens/parte 4/8 - Sala dos Botões/Cruz.png" alt="" class="item">`
        item36.innerHTML = `<p>Cruz</p>`
    }

    if(i == 'fusivel'){
        item37.innerHTML = `<img src="../itens/parte 4/3 - Sala Escura/Fúsivel.png" alt="" class="item">`
        item37.innerHTML += `<p>Fusível</p>`
    }


//MUNIÇÃO DE PISTOLA

if(i == 'muniçao de sniper'){

    let quantidade = Number(prompt('Quantas munições você pegou?'))
    let soma = quant_muniçao_sniper + quantidade
    quant_muniçao_sniper = soma

    item2.innerHTML = `<img src="../itens/munição de sniper.png" alt="" class="item">`
    item2.innerHTML += `<p>${quant_muniçao_sniper} Munições de Sniper</p>`
}

//FLUÍDO QUÍMICO



    if(i == 'fq'){

        let quantidade = Number(prompt('Quantas fluídos químicos você pegou?'))
        let soma = quant_fq + quantidade
        quant_fq = soma

        item4.innerHTML = `<img src="../itens/fluido-quimico.png" alt="" class="item">`
        item4.innerHTML += `<p>${quant_fq} Fluídos Químicos</p>`
    }


//ERVAS    

    if(i == 'ervas'){

        let quantidade = Number(prompt('Quantas ervas você pegou?'))
        let soma = quant_ervas + quantidade
        quant_ervas = soma

        item5.innerHTML = `<img src="../itens/ervas.png" alt="" class="item">`
        item5.innerHTML += `<p>${quant_ervas} Ervas</p>`
    }


//CURA

    if(i == 'cura'){

        let quantidade = Number(prompt('Quantas curas você pegou?'))
        let soma = quant_cura + quantidade
        quant_cura = soma

        item6.innerHTML =  `<img src="../itens/cura.png" alt="" class="item">`
        item6.innerHTML += `<p>${quant_cura} Curas</p>`
    }


//PÓLVORA

    if(i == 'polvora'){

        let quantidade = Number(prompt('Quantas pólvoras você pegou?'))
        let soma = quant_polvora + quantidade
        quant_polvora = soma

        item7.innerHTML = `<img src="../itens/polvora.png" alt="" class="item">`
        item7.innerHTML += `<p>${quant_polvora} Pólvoras</p>`
    }


//MUNIÇÃO DE PISTOLA

    if(i == 'muniçao de pistola'){

            let quantidade = Number(prompt('Quantas munições você pegou?'))
            let soma = quant_muniçaop + quantidade
            quant_muniçaop = soma

            item8.innerHTML = `<img src="../itens/munição de pistola.png" alt="" class="item">`
            item8.innerHTML += `<p>${quant_muniçaop} Munições de pistola</p>`
            
    }

//PANOS

    if(i == 'pano'){

        let quantidade = Number(prompt('Quantos panos você pegou?'))
        let soma = quant_pano + quantidade
        quant_pano = soma

        item12.innerHTML = `<img src="../itens/pano.png" alt="" class="item">`
        item12.innerHTML += `<p>${quant_pano} Panos</p>`
        
    }

//METAL

if(i == 'metal'){

    let quantidade = Number(prompt('Quantos metais você pegou?'))
    let soma = quant_metal + quantidade
    quant_metal = soma

    item13.innerHTML = `<img src="../itens/Metal.png" alt="" class="item">`
    item13.innerHTML += `<p>${quant_metal} Metais</p>`
    
}

//MUNIÇÃO DE SHOTGUN

if(i == 'muniçao de shotgun'){
    let quantidade = Number(prompt('Quantas munições você pegou?'))
    let soma = quant_muniçaos + quantidade
    quant_muniçaos = soma

    item19.innerHTML = `<img src="../itens/munição de shotgun.png" alt="" class="item">`
    item19.innerHTML += `<p>${quant_muniçaos} Munição de Shotgun</p>`
}

//BANDAGENS

if(i == 'bandagem'){
    let quantidade = Number(prompt('Quantas bandagens você pegou?'))
    let soma = quant_bandagens + quantidade
    quant_bandagens = soma

    item24.innerHTML = `<img src="../itens/bandagem.png" alt="" class="item">`
    item24.innerHTML += `<p>${quant_bandagens} Bandagens</p>`
}

//GRANADA

if(i == 'granada'){
    let quantidade = Number(prompt('Quantas granadas você pegou?'))
    let soma = quant_granadas + quantidade
    quant_granadas = soma

    item23.innerHTML = `<img src="../itens/Granadas.png" alt="" class="item">`
    item23.innerHTML += `<p>${quant_granadas} Granadas</p>`
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
    let item22 = document.getElementById('itens22')
    let item23 = document.getElementById('itens23')
    let item24 = document.getElementById('itens24')
    let item25 = document.getElementById('itens25')
    let item26 = document.getElementById('itens26')
    let item27 = document.getElementById('itens27')
    let item28 = document.getElementById('itens28')
    let item29 = document.getElementById('itens29')
    let item30 = document.getElementById('itens30')
    let item31 = document.getElementById('itens31')
    let item32 = document.getElementById('itens32')
    let item33 = document.getElementById('itens33')
    let item34 = document.getElementById('itens34')
    let item35 = document.getElementById('itens35')
    let item36 = document.getElementById('itens36')
    let item37 = document.getElementById('itens37')
    let item38 = document.getElementById('itens38')
    let item39 = document.getElementById('itens39')
    let item40 = document.getElementById('itens40')
    let item41 = document.getElementById('itens41')
    let item42 = document.getElementById('itens42')
    let item43 = document.getElementById('itens43')

    if(i == 'faca'){
        item1.innerHTML = ''
    }

    if(i == 'chave branca'){
        item3.innerHTML = ''
    }

    if(i == 'amt hardballer'){
        item9.innerHTML = ''
    }

    if(i == 'frasco 2'){
        item10.innerHTML = ''
    }

    if(i == 'kit medico'){

        if(quant_kitmedico == 2){
            item22.innerHTML = ''
            quant_kitmedico = quant_kitmedico - 1
        }

        if(quant_kitmedico == 1){
            item11.innerHTML = ''
            quant_kitmedico = quant_kitmedico - 1
        }
    }

    if(i == 'frasco'){
        item14.innerHTML = ''
    }

    if(i == 'frasco de sangue'){
        item15.innerHTML = ''
    }

    if(i == 'cristal valioso'){
        item16.innerHTML = ''
    }

    if(i == 'ruby'){
        item17.innerHTML = ''
    }

    if(i == 'chave de setas 2'){
        item18.innerHTML = ''
    }

    if (i == 'benelli'){
        item20.innerHTML = ''
    }

    if(i == 'amuleto valioso'){
        item21.innerHTML = ''
    }

    if(i == 'escudo'){
        item25.innerHTML = ''
    }

    if(i == 'sniper'){
        item26.innerHTML = ''
    }

    if(i == 'anel vermelho'){
        item27.innerHTML = ''
    }

    if(i == 'alavanca'){
        item28.innerHTML = ''
    }

    if(i == 'bomba a'){
        item29.innerHTML = ''
    }

    if(i == 'lanterna'){
        item30.innerHTML = ''
    }

    if(i == 'bateria'){
        item31.innerHTML = ''
    }

    if(i == 'pistola 2'){
        item32.innerHTML = ''
    }

    if(i == 'lampada'){
        item33.innerHTML = ''
    }

    if(i == 'bomba de e'){
        item34.innerHTML = ''
    }

    if(i == 'frasco 3'){
        item35.innerHTML = ''
    }

    if(i == 'cruz'){
        item36.innerHTML = ''
    }

    if(i == 'fusivel'){
        item37.innerHTML = ''
    }
    

//MUNIÇÃO DE SNIPER

if(i == 'muniçao de sniper'){
    let quantidade = prompt('Quantas munições você usou?')

    let subtração = quant_muniçao_sniper - quantidade
    quant_muniçao_sniper = subtração

    item2.innerHTML = `<img src="../itens/munição de sniper.png" alt="" class="item">`
    item2.innerHTML += `<p>${quant_muniçao_sniper} Munições de Sniper</p>`

    if(quant_muniçao_sniper == 0){
        item2.innerHTML = ''
    }
    
}

//FLUÍDO QUÍMICO

    if(i == 'fq'){
        let quantidade = prompt('Quantos fluídos químicos você usou?')

        let subtração = quant_fq - quantidade
        quant_fq = subtração

        item4.innerHTML = `<img src="../itens/fluido-quimico.png" alt="" class="item">`
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

        item5.innerHTML = `<img src="../itens/ervas.png" alt="" class="item">`
        item5.innerHTML += `<p>${quant_ervas} Ervas</p>`

        if(quant_ervas == 0){
            item5.innerHTML = ''
        }

    }

//CURA

if(i == 'cura'){
    let quantidade = prompt('Quantas curas você usou?')

    let subtração = quant_cura - quantidade
    quant_cura = subtração

    item6.innerHTML =  `<img src="../itens/cura.png" alt="" class="item">`
    item6.innerHTML += `<p>${quant_cura} Curas</p>`

    if(quant_cura == 0){
        item6.innerHTML = ''
    }

}



//PÓLVORA

    if(i == 'polvora'){
        let quantidade = prompt('Quantas pólvoras você usou?')

        let subtração = quant_polvora - quantidade
        quant_polvora = subtração

        item7.innerHTML = `<img src="../itens/polvora.png" alt="" class="item">`
        item7.innerHTML += `<p>${quant_polvora} Pólvoras</p>`

        if(quant_polvora == 0){
            item7.innerHTML = ''
        }

    }


//MUNIÇÃO DE PISTOLA

    if(i == 'muniçao de pistola'){
        let quantidade = prompt('Quantas munições você usou?')

        let subtração = quant_muniçaop - quantidade
        quant_muniçaop = subtração

        item8.innerHTML = `<img src="../itens/munição de pistola.png" alt="" class="item">`
        item8.innerHTML += `<p>${quant_muniçaop} Munições de pistola</p>`

        if(quant_muniçaop == 0){
            item8.innerHTML = ''
        }
    }

//PANOS

if(i == 'pano'){
    let quantidade = prompt('Quantos panos você usou?')

    let subtração = quant_pano - quantidade
    quant_pano = subtração

    item12.innerHTML = `<img src="../itens/pano.png" alt="" class="item">`
    item12.innerHTML += `<p>${quant_pano} Panos</p>`

    if(quant_pano == 0){
        item12.innerHTML = ''
    }
}

//METAL

if(i == 'metal'){
    let quantidade = prompt('Quantos metais você usou?')

    let subtração = quant_metal - quantidade
    quant_metal = subtração

    item13.innerHTML = `<img src="../itens/metal.png" alt="" class="item">`
    item13.innerHTML += `<p>${quant_metal} Metais</p>`

    if(quant_metal == 0){
        item13.innerHTML = ''
    }

}


//MUNIÇÃO DE SHOTGUN

if(i == 'muniçao de shotgun'){
    let quantidade = prompt('Quantas munições você usou?')

    let subtração = quant_muniçaos - quantidade
    quant_muniçaos = subtração

    item19.innerHTML = `<img src="../itens/munição de shotgun.png" alt="" class="item">`
    item19.innerHTML += `<p>${quant_muniçaos} Munição de Shotgun</p>`

    if(quant_muniçaos == 0){
        item19.innerHTML = ''
    }
}

//BANDAGENS

if(i == 'bandagem'){
    let quantidade = prompt('Quantas bandagens você usou?')

    let subtração = quant_bandagens - quantidade
    quant_bandagens = subtração

    item24.innerHTML = `<img src="../itens/bandagem.png" alt="" class="item">`
    item24.innerHTML += `<p>${quant_bandagens} Bandagens</p>`

    if(quant_bandagens == 0){
        item24.innerHTML = ''
    }
}

//GRANADA

if(i == 'granada'){
    let quantidade = prompt('Quantas granadas você usou?')

    let subtração = quant_granadas - quantidade
    quant_granadas = subtração

    item23.innerHTML = `<img src="../itens/Granadas.png" alt="" class="item">`
    item23.innerHTML += `<p>${quant_granadas} Granadas</p>`

    if(quant_granadas == 0){
        item23.innerHTML = ''
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

    if(d == 'd2'){ //Machado
        let n = Math.floor(Math.random() * 12)
        let n2 = Math.floor(Math.random() * 4)
        let n3 = Math.floor(Math.random() * 4)
        n++
        n2++
        n3++
        let soma = n + n2 + n3

        alert(`d12 = ${n}`)
        alert(`2d4 = ${n2 + n3}`)
        alert(`${soma} de dano`)


    }

    if(d == 'd3'){ //ASP 9

        let n = Math.floor(Math.random() * 12)
        let n2 = Math.floor(Math.random() * 8)
        let n3 = Math.floor(Math.random() * 6)
        let n4 = Math.floor(Math.random() * 6)
        n++
        n2++
        n3++
        n4++

        let soma = n + n2 + n3 + n4

        alert(`d12 = ${n}`)
        alert(`d8 = ${n2}`)
        alert(`2d6 = ${n3 + n4}`)
        alert(`${soma} de dano`)

    }

    if(d == 'd4'){ //Banelli M1014
        let melhoria = confirm('OK para rolar dano. CANCELAR para usar melhoria')
        let n = Math.floor(Math.random() * 20 + 1)
        let n2 = Math.floor(Math.random() * 20 + 1)
        let n3 = Math.floor(Math.random() * 8 + 1)
        let soma = n + n2 + n3

        if(melhoria == true){
            alert(`d20 = ${n}`)
            alert(`d20 = ${n2}`)
            alert(`d8 = ${n3}`)
        }
        
        alert(`${soma} de dano`)
    }

    if(d == 'd5'){ //Astra Model
        let n = Math.floor(Math.random() * 12 + 1)
        let n2 = Math.floor(Math.random() * 8 + 1)
        let n3 = Math.floor(Math.random() * 4 + 1)
        let n4 = 2
        let soma = n + n2 + n3 + n4

        alert(`d12 = ${n}`)
        alert(`d8 = ${n2}`)
        alert(`d4 = ${n3}`)
        alert('+2')
        alert(`${soma} de dano`)
    }

    if(d == 'd6'){ //Adaga
        let n = Math.floor(Math.random() * 12 + 1)
        let n2 = Math.floor(Math.random() * 8 + 1)

        let soma = n + n2

        alert(`d12 = ${n}`)
        alert(`d8 = ${n2}`)
        alert(`${soma} de dano`)
    }

}

function curas(){
    let item6 = document.getElementById('itens6')
    let item11= document.getElementById('itens11')
    let item24 = document.getElementById('itens24')

    let confirmaçao = confirm('OK para usar a cura em você. CANCELAR para usar a cura em outra.')

    if(confirmaçao == true){
        let cura = prompt('Qual item você quer usar para curar.')

        if(cura == 'cura'){
            if(quant_cura == 0){
                alert('Você não tem cura para usar')
            }
    
            else{
                let dado20 = Math.floor(Math.random() * 20)
                dado20 ++
                let dado12 = Math.floor(Math.random() * 12)
                dado12 ++
        
                let soma = dado20 + dado12
        
                alert(`${dado20} + ${dado12} = ${soma}`)
        
                quant_cura = quant_cura - 1
                item6.innerHTML =  `<img src="../itens/cura.png" alt="" class="item">`
                item6.innerHTML += `<p>${quant_cura} Curas</p>`
            
                if(quant_cura == 0){
                    item6.innerHTML = ''
                }
        
                v = v + soma
                vida.innerHTML = `Vida: ${v}/${vmx}`
        
                if(v > vmx){
                    v = vmx
                    vida.innerHTML = `Vida: ${v}/${vmx}`
                }
            }
        }
    
        if(cura == 'kit medico'){
            let atributo = confirm('OK para Medicina. CANCELAR para Primeiros Socorros')
    
            if(atributo == true){
                let n = Math.floor(Math.random() * 20)
                n ++
                let n2 = Math.floor(Math.random() * 12)
                n2 ++

                let n3 = Math.floor(Math.random() * 20)
                n3++
        
                let soma1 = n + n3 + n2
    
                let nn = Math.floor(Math.random() * 20)
                nn ++
                let nn2 = Math.floor(Math.random() * 12)
                nn2 ++

                let nn3 = Math.floot(Math.random() * 20)
                nn3++
    
                let soma2 = nn + nn3 + nn2
    
                if(soma1 > soma2){
                    alert(`${n} + ${n3} + ${n2} = ${soma1}        /      2º dado = ${soma2}`)
                    v = v + soma1
                    vida.innerHTML = `Vida: ${v}/${vmx}`
                } 
                
                else if (soma2 > soma1){
                    alert(`${nn} + ${nn3} + ${nn2} = ${soma2}       /      1º dado = ${soma1}`)
                    v = v + soma2
                    vida.innerHTML = `Vida: ${v}/${vmx}`
                }
    
                if(v > vmx){
                    v = vmx
                    vida.innerHTML = `Vida: ${v}/${vmx}`
                }
    
                item11.innerHTML = ''
            }
    
            else{
                let n = Math.floor(Math.random() * 20)
                n ++
                let n2 = Math.floor(Math.random() * 12)
                n2 ++
                let n3 = Math.floor(Math.random() * 20 + 1)
        
                let soma1 = n + n3 + n2
    
                alert(`${n} + ${n3} + ${n2} = ${soma1}`)
    
                v = v + soma1
                vida.innerHTML = `Vida: ${v}/${vmx}`
    
                if(v > vmx){
                    v = vmx
                    vida.innerHTML = `Vida: ${v}/${vmx}`
                }
    
                item11.innerHTML = ''
            }
        }
    
        if(cura == 'bandagem'){
    
            if(quant_bandagens == 0){
                alert('Você não tem bandagens para usar')
            }
    
            else{
                let dado6 = Math.floor(Math.random() * 10)
                dado6++
    
                alert(`d10 = ${dado6}`)
    
                v = v + dado6
    
                vida.innerHTML = `Vida: ${v}/${vmx}`
    
                quant_bandagens = quant_bandagens - 1
    
                item24.innerHTML = `<img src="../itens/bandagem.png" alt="" class="item">`
                item24.innerHTML += `<p>${quant_bandagens} Bandagens</p>`
    
                if(quant_bandagens == 0){
                    item24.innerHTML = ''
                }
    
                if(v >= vmx){
                    v = vmx
                }
            }
        }
    }

    else{
        let cura = prompt('Qual item você quer usar para curar.')

        if(cura == 'cura'){
            if(quant_cura == 0){
                alert('Você não tem cura para usar')
            }
    
            else{
                let dado20 = Math.floor(Math.random() * 20)
                dado20 ++
                let dado12 = Math.floor(Math.random() * 12)
                dado12 ++
        
                let soma = dado20 + dado12
        
                alert(`${dado20} + ${dado12} = ${soma}`)
        
                quant_cura = quant_cura - 1
                item6.innerHTML =  `<img src="../itens/cura.png" alt="" class="item">`
                item6.innerHTML += `<p>${quant_cura} Curas</p>`
            
                if(quant_cura == 0){
                    item6.innerHTML = ''
                }
        
                v = v + soma
                vida.innerHTML = `Vida: ${v}/${vmx}`
        
                if(v > vmx){
                    v = vmx
                    vida.innerHTML = `Vida: ${v}/${vmx}`
                }
            }
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
    
        if(cura == 'bandagem'){
    
            if(quant_bandagens == 0){
                alert('Você não tem bandagens para usar')
            }
    
            else{
                let dado6 = Math.floor(Math.random()*6)
                dado6++
    
                alert(`d6 = ${dado6}`)
    
                quant_bandagens = quant_bandagens - 1
    
                item24.innerHTML = `<img src="../itens/bandagem.png" alt="" class="item">`
                item24.innerHTML += `<p>${quant_bandagens} Bandagens</p>`
    
                if(quant_bandagens == 0){
                    item24.innerHTML = ''
                }
            }
        }
    }

 
}

function habilidade(){
    let hab = prompt('Qual habilidade você quer usar')

    if(hab == 'h1'){

            alert(`${n} = Recupera vida parcial`)
            let v1 = Math.floor(Math.random() * 20)
            let v2 = Math.floor(Math.random() * 20)
            let v3 = Math.floor(Math.random() * 20)
            v1++
            v2++
            v3++

            let soma = v1 + v2 + v3

            alert(`Recupera ${soma} de vida`)

            v = v + soma

            if(v > vmx){
                v = vmx
            }

            vida.innerHTML = `Vida: ${v}/${vmx}`      
    }
}
