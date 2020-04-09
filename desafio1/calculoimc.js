//Cálculo de IMC
//Crie um programa para calcular o IMC e nível de obesidade de uma pessoa.

//Comece criando constantes para armazenar o nome, peso, altura e sexo de uma pessoa, por exemplo:


//A partir desses dados armazene em uma constante chamada imc o cálculo do índice de massa corporal definido pela fórmula abaixo:


//Baseado no valor obtido através desse cálculo exiba as seguintes mensagens:

//SE o IMC maior ou igual a 30: Daniel você está acima do peso;
//SE o IMC menor que 29.9: Daniel você não está acima do peso;
const nome = "Daniel";
const peso = 105;
const altura = 1.75;

const imc = peso / (altura * altura);
let message = '' //Declara uma variável local no escopo do bloco atual, opcionalmente iniciando-a com um valor
if (imc >= 30) {
  message = `${nome} você está acima do peso`
} else {
  message = `${nome} você não está acima do peso`}

  console.log(message) //exibirá mensagem caso true ou false