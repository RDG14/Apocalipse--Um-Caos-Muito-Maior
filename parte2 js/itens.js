let quant_fq = 3 //FLUÍDO QUÍMICO
let quant_ervas = 0 //ERVAS
let quant_cura = 5 //CURA
let quant_polvora = 0 //PÓLVORA
let quant_muniçaop = 7 //MUNIÇÃO DE PISTOLA
let quant_pano = 1 //PANO
let quant_metal = 0 //METAL
let quant_muniçaos = 8 //MUNIÇÃO DE SHOTGUN
let quant_bandagens = 0 //BANDAGENS

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

    if(i == 'frasco 2'){
        item10.innerHTML += `<img src="itens/segunda-parte/Frasco melhoria sanidade.png" alt="" class="item">`
        item10.innerHTML += `<p>Frasco de líquido azul</p>`
    }

    if(i == 'kit medico'){
        item11.innerHTML = `<img src="itens/kit medico.png" alt="" class="item">`
        item11.innerHTML += `<p>Kit médico</p>`
    }

    if(i == 'frasco'){
        item14.innerHTML = `<img src="itens/segunda-parte/Frasco melhoria vida.png" alt="" class="item"></img>`
        item14.innerHTML += `<p>Frasco de líquido vermelho</p>`
    }

    if(i == 'amuleto 2'){
        item15.innerHTML = `<img src="itens/segunda-parte/Amuleto 2.png" alt="" class="item"></img>`
        item15.innerHTML += `<p>Amuleto 2</p>`
    }

    if(i == 'cristal valioso'){
        item16.innerHTML = `<img src="itens/segunda-parte/Cristal valioso.png" alt="" class="item">`
        item16.innerHTML += `<p>Cristal Valioso</p>`
    }

    if(i == 'ruby'){
        item17.innerHTML = `<img src="itens/segunda-parte/Ruby.png" alt="" class="item">`
        item17.innerHTML += `<p>Ruby</p>`
    }

    if(i == 'chave de setas 2'){
        item18.innerHTML = `<img src="itens/segunda-parte/Chave de setas melhorada.png" alt="" class="item"></img>`
        item18.innerHTML += `<p>Chave de Setas Melhorada</p>`
    }

    if(i == 'benelli'){
        item20.innerHTML = `<img src="itens/segunda-parte/Shotgun Benelli M1014.png" alt="" class="item" style="width: 140px";></img>`
        item20.innerHTML += `<p>Benelli M1014</p>`

    }

    if(i == 'amuleto valioso'){
        item21.innerHTML = `<img src="itens/segunda-parte/amuleto valioso.png" alt="" class="item"></img>`
        item21.innerHTML += `<p>Amuleto Valioso</p>`
    }

    if(i == 'amuleto 1'){
        item22.innerHTML = `<img src="itens/segunda-parte/Amuleto 1.png" alt="" class="item"></img>`
        item22.innerHTML += `<p>Amuleto 1</p>`
    }

    if(i == 'amuleto 3'){
        item23.innerHTML = `<img src="itens/segunda-parte/Amuleto 3.png" alt="" class="item"></img>`
        item23.innerHTML += `<p>Amuleto 3</p>`
    }


//FLUÍDO QUÍMICO



    if(i == 'fq'){

        let quantidade = Number(prompt('Quantas fluídos químicos você pegou?'))
        let soma = quant_fq + quantidade
        quant_fq = soma

        item4.innerHTML = `<img src="itens/fluido-quimico.png" alt="" class="item">`
        item4.innerHTML += `<p>${quant_fq} Fluídos Químicos</p>`
    }


//ERVAS    

    if(i == 'ervas'){

        let quantidade = Number(prompt('Quantas ervas você pegou?'))
        let soma = quant_ervas + quantidade
        quant_ervas = soma

        item5.innerHTML = `<img src="itens/ervas.png" alt="" class="item">`
        item5.innerHTML += `<p>${quant_ervas} Ervas</p>`
    }


//CURA

    if(i == 'cura'){

        let quantidade = Number(prompt('Quantas curas você pegou?'))
        let soma = quant_cura + quantidade
        quant_cura = soma

        item6.innerHTML =  `<img src="itens/cura.png" alt="" class="item">`
        item6.innerHTML += `<p>${quant_cura} Curas</p>`
    }


//PÓLVORA

    if(i == 'polvora'){

        let quantidade = Number(prompt('Quantas pólvoras você pegou?'))
        let soma = quant_polvora + quantidade
        quant_polvora = soma

        item7.innerHTML = `<img src="itens/polvora.png" alt="" class="item">`
        item7.innerHTML += `<p>${quant_polvora} Pólvoras</p>`
    }


//MUNIÇÃO DE PISTOLA

    if(i == 'muniçao de pistola'){

            let quantidade = Number(prompt('Quantas munições você pegou?'))
            let soma = quant_muniçaop + quantidade
            quant_muniçaop = soma

            item8.innerHTML = `<img src="itens/munição de pistola.png" alt="" class="item">`
            item8.innerHTML += `<p>${quant_muniçaop} Munições de pistola</p>`
            
    }

//PANOS

    if(i == 'pano'){

        let quantidade = Number(prompt('Quantos panos você pegou?'))
        let soma = quant_pano + quantidade
        quant_pano = soma

        item12.innerHTML = `<img src="itens/pano.png" alt="" class="item">`
        item12.innerHTML += `<p>${quant_pano} Panos</p>`
        
    }

//METAL

if(i == 'metal'){

    let quantidade = Number(prompt('Quantos metais você pegou?'))
    let soma = quant_metal + quantidade
    quant_metal = soma

    item13.innerHTML = `<img src="itens/Metal.png" alt="" class="item">`
    item13.innerHTML += `<p>${quant_metal} Metais</p>`
    
}

//MUNIÇÃO DE SHOTGUN

if(i == 'muniçao de shotgun'){
    let quantidade = Number(prompt('Quantas munições você pegou?'))
    let soma = quant_muniçaos + quantidade
    quant_muniçaos = soma

    item19.innerHTML = `<img src="itens/munição de shotgun.png" alt="" class="item">`
    item19.innerHTML += `<p>${quant_muniçaos} Munição de Shotgun</p>`
}

//BANDAGENS

if(i == 'bandagem'){
    let quantidade = Number(prompt('Quantas bandagens você pegou?'))
    let soma = quant_bandagens + quantidade
    quant_bandagens = soma

    item24.innerHTML = `<img src="itens/bandagem.png" alt="" class="item">`
    item24.innerHTML += `<p>${quant_bandagens} Bandagens</p>`
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

    if(i == 'frasco 2'){
        item10.innerHTML = ''
    }

    if(i == 'kit medico'){
        item11.innerHTML = ''
    }

    if(i == 'frasco'){
        item14.innerHTML = ''
    }

    if(i == 'amuleto 2'){
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

    if(i == 'amuleto 1'){
        item22.innerHTML =  ''
    }

    if(i == 'amuleto 3'){
        item23.innerHTML = ''
    }



    

//FLUÍDO QUÍMICO

    if(i == 'fq'){
        let quantidade = prompt('Quantos fluídos químicos você usou?')

        let subtração = quant_fq - quantidade
        quant_fq = subtração

        item4.innerHTML = `<img src="itens/fluido-quimico.png" alt="" class="item">`
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

        item5.innerHTML = `<img src="itens/ervas.png" alt="" class="item">`
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

    item6.innerHTML =  `<img src="itens/cura.png" alt="" class="item">`
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

        item7.innerHTML = `<img src="itens/polvora.png" alt="" class="item">`
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

        item8.innerHTML = `<img src="itens/munição de pistola.png" alt="" class="item">`
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

    item12.innerHTML = `<img src="itens/pano.png" alt="" class="item">`
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

    item13.innerHTML = `<img src="itens/metal.png" alt="" class="item">`
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

    item19.innerHTML = `<img src="itens/munição de shotgun.png" alt="" class="item">`
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

    item24.innerHTML = `<img src="itens/bandagem.png" alt="" class="item">`
    item24.innerHTML += `<p>${quant_bandagens} Bandagens</p>`

    if(quant_bandagens == 0){
        item24.innerHTML = ''
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

    if(d == 'd2'){ //Faca
        let n = Math.floor(Math.random() * 8)

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

        if(n == 6){
            alert('7 de dano')
        }

        if(n == 7){
            alert('8 de dano')
        }
    }

    if(d == 'd3'){ //AMT Hardballer

        let melhoria = confirm('OK para rolar dano. CANCELAR para usar melhoria')
        let n = Math.floor(Math.random() * 20)
        n = n + 1

        n2 = Math.floor(Math.random() * 5)
        n2++

        alert(`d20 = ${n}`)
        alert(`d6 = ${n2}`)

        n = n + n2

        if(melhoria == false){
            let m = prompt('Qual melhoria?')

            if(m == 'dano'){
                let quantidade = Number(prompt('Quantas?'))

                n = n + quantidade
            }

            if(m == 'dano 2'){
                let quantidade = Number(prompt('Quantas?'))

                n2 = Math.floor(Math.random() * 5 * quantidade)
                n2++

                alert(`d20 = ${n}`)
                alert(`${quantidade}d6 = ${n2}`)

                n = n + n2
                
            }

        }

        alert(`${n} de dano`)

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

}

function curas(){
    let item6 = document.getElementById('itens6')
    let item11= document.getElementById('itens11')
    let item24 = document.getElementById('itens24')

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
            item6.innerHTML =  `<img src="itens/cura.png" alt="" class="item">`
            item6.innerHTML += `<p>${quant_cura} Curas</p>`
        
            if(quant_cura == 0){
                item6.innerHTML = ''
            }
    
            v = v + soma
            vida.innerHTML = `Vida: ${v}/${vmx}`
    
            if(v > 100){
                v = 100
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
                v = v + soma1
                vida.innerHTML = `Vida: ${v}/${vmx}`
            } 
            
            else if(soma1 < soma2){
                alert(`${dado20_2} + ${dado12_2} = ${soma2}       /      1º dado = ${soma1}`)
                v = v + soma2
                vida.innerHTML = `Vida: ${v}/${vmx}`
            }

            if(v > 100){
                v = 100
                vida.innerHTML = `Vida: ${v}/${vmx}`
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

            v = v + soma1
            vida.innerHTML = `Vida: ${v}/100`

            if(v > 100){
                v = 100
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
            let dado6 = Math.floor(Math.random()*6)
            dado6++

            alert(`d6 = ${dado6}`)

            v = v + dado6

            vida.innerHTML = `Vida: ${v}/${vmx}`

            quant_bandagens = quant_bandagens - 1

            item24.innerHTML = `<img src="itens/bandagem.png" alt="" class="item">`
            item24.innerHTML += `<p>${quant_bandagens} Bandagens</p>`

            if(quant_bandagens == 0){
                item24.innerHTML = ''
            }

            if(v >= 100){
                v = 100
            }
        }
    }
}


