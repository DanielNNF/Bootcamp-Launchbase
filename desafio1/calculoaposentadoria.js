

  //Cálculo de aposentadoria

  //Crie um programa para calcular a aposentadoria de uma pessoa.

//Comece criando constantes para armazenar nome, sexo, idade e contribuicao(em anos), por exemplo:

const nome = 'Daniel';
const sexo = 'M';
const idade = 37;
const contribuicao = 15;

const calculoContribuicao = idade + contribuicao

// essas variáveis irão retornar true ou false
// const recebe sexo, igual M ou F, as duas condições são true, maior igual ao 'valor' e o cálculo contribuição maior igual ao 'valor'
const homemPodeAposentar = sexo == 'M' && contribuicao >= 35 && calculoContribuicao >= 95
const mulherPodeAposentar = sexo == 'F' && contribuicao >= 30 && calculoContribuicao >= 85
// const 1 OU const 2 
if ( homemPodeAposentar || mulherPodeAposentar) {
    console.log(`${nome}, você pode se aposentar!`)
} else {
    console.log(`${nome}, você não pode se aposentar!`)
}