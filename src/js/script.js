/* // Declarações


let nome = "Fiap";
const idade = 30;
let altura = 1.75;
let estudante = true

console.log(typeof nome);
console.log(typeof idade);
console.log(typeof altura);
console.log(typeof estudante);

// MÉTODOS DE EXIBIÇÃO

alert("Bem-vindo ao Sistema")

let nomeUsuario = prompt("Qual é o nome do usuário")

// `` ${} = concatenação
console.log(`Olá, ${nomeUsuario}`)

let desejaContinuar = confirm("Deseja Realmente Continuar?")

console.log("Resposta Verdadeira",desejaContinuar)

/* Metodos de exbição */


//Operadores (Aritiméticos, comparação e lógicos)

let soma = 10 + 5;
console.log(soma)

let multiplicacao = 4 * 2;
console.log(multiplicacao);

let subtracao = 10 - 5;
console.log(subtracao);

let resto = 10 % 3;
console.log(resto);

let divisao = 5 / 2;
console.log(divisao);

// Comparação

let a = 10;
let b = "10";

// = (atribuir)
// == (compara o valor)
// === (compara valor e variavel)

console.log(a == b); /* compara valor */

console.log(a === b); /* compara valor e variavel */

console.log(a > b); /*  maior */

console.log(a >= b); /* maior igual */

console.log(a != b); /* diferente */

console.log( a < 10);

/* Operador && = and - as duas tem que ser verdadeira */
console.log(b < a && a > b);

/* Operador || = or - uma das duas tem que ser verdadeira */
console.group( a > 20 || b >= a);


let idade2 = 17

let habilitacao = true;

let dirigir = (idade2 >= 18) && habilitacao;
console.log("O Usuário pode dirigir?", dirigir)


// Estrutura condicional

if(false){
    console.log("É verdadeiro")
}

if(true){
    console.log("verdadeiro")

}else{
    console.log("Falso")
}


//  if/ ifelse/ else - encadeado

let nota = 7;
if (nota >= 8) {
    console.log("Aprovado com sucesso")
}
else if (nota >= 6) {
    console.log("Ficou de exame")
}
else {
    console.log("Reprovado")
}


//  Switch case

let diaSemana = "3";

switch(diaSemana){
    case 1:
        console.log("Segunda-Feira")
        break;
    case 2:
        console.log("Terça-feira")
        break;
    case 3:
        console.log("Quarta-feira")
        break;
    case 4:
        console.log("Quinta-feira")
        break;
    case 5:
        console.log("Sexta-feira")
        break;
    default:
        console.log("Outro dia")
}

// ternario

let notaUsuario = (nota >=6)? "Aprovado": "Reprovado";
console.log(notaUsuario)

let idade1 = 18;

let podePilotar = idade1 >= 18 ? "Pode pilotar": "Não pode pilotar";

let resultado = 250;

let jogador = resultado >= 10 ? "Jogo bom" :
              resultado >= 20 ? "Jogo Médio":
              resultado >= 100 ? "Jogo Alto" : "Extraordinário";

console.log(jogador)

let nome = prompt("Qual seu nome?")

let mensagem1 = nome ? `Ola, dev ${nome}`: "Voce não digitou";

console.log(mensagem1)


// ESTRUTURA DE REPETIÇÃO
//FOR

      //declaração      operação       incremento
    for(let numero1 = 0; numero1 < 10; numero1 ++){
        console.log(`Contagm de numeros ${numero1}`)
    }


