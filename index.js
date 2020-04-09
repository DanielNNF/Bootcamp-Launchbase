//Exemplos dados para introdução à programação web

//Aprendendo a utilização de uma string

const nome = 'Daniel '
const nome2 = "Nicolas"
const nome3 = 'Filipe'
const nome4 = `Nathalia e ${nome}`

//Aprendendo a utilização de um number

const notaAluno01 = 10
const notaAluno02 = 1.6
const notaAluno03 = 5.9
const notaAluno04 = 1.8
const notaAluno05 = 4.9

const media = (notaAluno01+notaAluno02+notaAluno03+notaAluno04+notaAluno05) / 5

//Exemplos de Condicionais

if (media > 6){
  console.log(`A media foi de ${media}. Parabéns!!!!`)
}
else{
  console.log('Nota abaixo da média 6. Precisa se esforçar mais!!!!!')
}

// Operadores relacionados

console.log(4=="4")//true
console.log(4==="4")//false
console.log((4!="5"))//true
console.log(4!=="5")//true

 // Operadores lógicos

 //&& - duas condições são true
 // || - ou (Umas das condições é true pra condição final ser true)
//! - Pra negar a condição
