// Variáveis que recebem o tipo booleanos (false e true)
let falso1 = false;
let verdadeiro1 = true;
console.log (typeof (falso1));
console.log (typeof (verdadeiro1));

// Função de condição if (se) e else (se não)
if (falso1 === true) { // se falso1 for igual a true, faça tal coisa
  console.log ("Booleano é verdadeiro");
}
else { // se não faça outra coisa
  console.log ("booleano é falso");
}

let nome1 = "Blue";
let mensagem1 = "";
if (nome1 == "Blue") {
  mensagem1 = "Nome igual";
}
else {
mensagem1 = "Nome diferente";
}
console.log (mensagem1)

let media1 = "vermelha";
if (media1 == "verde") {
  console.log( "Aprovado");
}
else if (media1 == "amarela") {
  console.log( "Em recuperação");
}
else {
console.log( "Reprovado");
}

let username1 = "usuario123";
let password1 = "123456";
if (username1 == "usuario123" && password1 == "123456") {
  console.log("Usuário autenticado");
}
else {
  console.log("Login e/ou senha incorrretos");
}

// Função for faz um loop até a condição for verdadeira
for (let numero1 = 0 ; numero1 < 4; numero1 ++ ) { // enquanto numero1 = 0 for menor que 4, insira +1
  console.log (numero1);
}

// Transformando uma variável no tipo boolean
let frase1 = Boolean ("Oi"); // função Boolean transforma o tipo da variável
console.log (frase1); // imprime true porque a variável não está vazia
console.log (typeof (frase1)); // imprime o tipo da variável