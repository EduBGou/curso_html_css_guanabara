function sumTotalPopulation(){
    let res = document.getElementById('res')
    let lNum = [44411238, 20538718, 16054524, 14141626, 11444380]
    let total = 0
    for(let i = 0; i < lNum.length; i++){
        total += lNum[i]
    }
    total = String(total)
    // DAR ESPAÇO A CADA 3 CARACTERES, DIREITA P/ ESQUERDA
    for(let i = total.length; i > 0; i--){
        res.innerHTML += total[i - 1]
        if(i % 3 == 1 && i != 1){
            res.innerHTML += ' '
        }
    }
}