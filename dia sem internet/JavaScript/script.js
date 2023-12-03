class People{
    name
    age
    isMajority
    description
}

// CONSTANTES E VARIÁVEIS
const MAJORITY = 21
let allNamePeople = [
    'Eduardo Boaro Gouveia',
    'Maria da Penha',
    'Sócrates',
    'Neymar Junior'    
]
let allAgePeople = [
    16,
    39,
    39,
    39    
]
let allDescriptionPeople = [
    '"Ele é quem está programando tudo isso aqui."',
    '"É a mulher da Lei Maria da Penha."',
    '"Ele só sabe que nada sabe."',
    '"Joga futebol profissionalmente."'    
]

for(let i = 0; i < allNamePeople.length; i++){
    let person = new People()
    person.name = allNamePeople[i]
    person.age = allAgePeople[i]
    person.description = allDescriptionPeople[i]
    if(person.age >= MAJORITY){
        person.isMajority = true
    }else{
        person.isMajority = false
    }
    console.log(`- Ficha Técnica de ${person.name} - 
    Idade: ${person.age}
    Maioridade: ${person.isMajority}
    Descrição: ${person.description}`)

   
    if(i == 0){
        var oldestPerson = new People()
        oldestPerson.name = person.name
        oldestPerson.age = person.age
        oldestPerson.description = person.description
    }else{
        if(person.age > oldestPerson.age){
            oldestPerson.name = person.name
            oldestPerson.age = person.age
            oldestPerson.description = person.description
        }else if(person.age == oldestPerson.age){
            oldestPerson.name += ` e ${person.name}`
            oldestPerson.description += `
    ${person.description}`

        }
    }
}

console.log(`-> A(s) pessoa(S) mais velha(s) identificada(s): 
    ${oldestPerson.name}.

-> Sua(s) idade(s) é(são) de respectivamente:
    ${oldestPerson.age} anos.

-> Sua(s) descrição(ções) é(são) respectivamente:
    ${oldestPerson.description}`)