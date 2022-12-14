// Preço viagem com gasolina e com Etanol

// const precoGasolina = 5.15;
// const precoEtanol = 4.79;
// let kmPorLitro = 10;
// let distanciaKM = 100;
// const tipoCombustivel = "etanol";
// const litrosDaViagem = distanciaKM / kmPorLitro;
// function tipotipoUsuario() {
//   let tipoUsuario = prompt("Seu carro usa Gasolina ou Etanol?", "etanol");
//   if (tipoUsuario === tipoCombustivel) {
//     const gastoDaVIagemEtanol = precoEtanol * litrosDaViagem;
//     console.log(`A viagem de Etanol custou: ${gastoDaVIagemEtanol}!`);
//   } else {
//     const gastoDaViagemGasolina = precoGasolina * litrosDaViagem;
//     console.log(`A viagem de Gasolina custou: ${gastoDaViagemGasolina}`);
//   }
// }

// tipotipoUsuario();

//--------------------------------------------------------------------//
// Calculadora IMC (Formula - IMC = peso / (altura * altura))
// <18.5 = Abaixo do peso
// 18.5 - 25 = Peso normal
// 25 - 30 = Acima do peso
// 30 - 40 = Obeso
// > 40 = Obesidade mórbida
function calcularIMC(peso, altura) {
  return peso / Math.pow(altura, 2);
}
function definirTipo(imc) {
  if (imc < 18.5) {
    return "Abaixo do peso";
  } else if (imc >= 18.5 && imc < 25) {
    return "Peso normal";
  } else if (imc >= 25 && imc < 30) {
    return "Acima do peso";
  } else if (imc >= 30 && imc < 40) {
    return "Obeso";
  } else {
    return "Prima do Felipe";
  }
}
const peso = 100;
const altura = 1.85;
const imc = calcularIMC(peso, altura);
console.log(`Seu IMC é: ${imc}`);
console.log(definirTipo(imc));

//--------------------------------------------------------------------//
/* Elabore um algoritmo que calcule o que deve ser pago por um produto, 
considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os seguintes codigos para ler qual a condição de pagamento escolhida e efetuar o calculo adequeado.

  Condição:
    - A vista no débito = 10% de desconto
    - A vista no PIX = 15% de desconto
    - Em duas vezes, preço normal
    - Acima de duas vezes = 10% de juros
*/
// const precoProduto = 100;
// const debito = precoProduto - precoProduto * 0.1;
// const pix = precoProduto - precoProduto * 0.15;
// const acimaDeDuas = precoProduto + precoProduto * 0.1;
// console.log(
//   `O preço do produto é de: R$ ${precoProduto} em até duas vezes no cartão`
// );
// console.log(`Ou R$ ${debito} com 10% de desconto a vista no débito`);
// console.log(`Ou R$ ${pix} com 15% de desconto no PIX`);
// console.log(`Ou R$ ${acimaDeDuas} acima de duas vezes no cartão`);
