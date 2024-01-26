function sumTotalPopulation(){
    // VALORES DA TABELA
    let lNameStates = [
        'São Paulo', 'Minas Gerais', 'Rio de Janeiro', 'Bahia', 'Paraná'
    ]
    let lUrlSites = [
        'https://pt.wikipedia.org/wiki/São_Paulo_(estado)', 'https://pt.wikipedia.org/wiki/Minas_Gerais', 'https://pt.wikipedia.org/wiki/Rio_de_Janeiro_(estado)', 'https://pt.wikipedia.org/wiki/Bahia', 'https://pt.wikipedia.org/wiki/Paraná'
    ]
    let lNumPopulation = [
        44411238, 20538718, 16054524, 14141626, 11444380
    ]

    // OUTROS VALORES DE ENTRADA BÁSICOS
    let res = document.getElementById('res')
    let total = 0
    for(let i = 0; i < lNumPopulation.length; i++){
        total += lNumPopulation[i]
    }

    for(let i = 0; i < lNumPopulation.length; i++){
        let population = document.getElementById(`num0${i+1}`)
        let states = document.getElementById(`name0${i+1}`)
        let noShowPopulation = ''
        noShowPopulation += String(lNumPopulation[i])
        population.innerHTML = ''
        states.innerHTML = `<a href="${lUrlSites[i]}" target="_blank">${lNameStates[i]}</a>`

        // ESCREVENDO O NÚMERO DA POPULAÇÃO
        for(let y = 0; y < noShowPopulation.length; y++){
            population.innerHTML += noShowPopulation[y]

            // DAR ESPAÇO A CADA 3 CARACTERES, DIREITA P/ ESQUERDA
            if(y != noShowPopulation.length - 1){
                if(noShowPopulation.length % 2 == 0){
                    if(y % 3 == 1 && y != 0){
                        population.innerHTML += ' ' // PAR
                    }
                }
                else{
                    if(y % 3 == 2){
                        population.innerHTML += ' ' //IMPAR
                    }
                }
            }
        }
    }

    // ESCREVENDO O NÚMERO TOTAL DA POPULAÇÃO
    total = String(total)
    res.innerHTML = ''

    for(let i = 0; i < total.length; i++){
        res.innerHTML += total[i]

         // DAR ESPAÇO A CADA 3 CARACTERES, DIREITA P/ ESQUERDA
         if(i != total.length - 1){
            if(total.length % 2 == 0){
                if(i % 3 == 1 && i != 0){
                    res.innerHTML += ' ' // PAR
                }
            }
            else{
                if(i % 3 == 2){
                    res.innerHTML += ' ' //IMPAR
                }
            }
        }
    }
}