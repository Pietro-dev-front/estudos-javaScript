//Calculadora simples com switch
// Crie uma calculadora simples. Peça ao usuário dois números e uma operação (+, -, *, /).
// Use a estrutura switch para realizar a operação escolhida e exibir o resultado.
// Inclua um default para operações inválidas.
const num1 = Number(prompt("Digite o primeiro número:"));
const num2 = Number(prompt("Digite o segundo número:"));
const operacao = prompt("Escolha a operação (+, -, *, /):");
let resultado;
if (Number.isNaN(num1) || Number.isNaN(num2)) {
    console.log("Valor inválido.");
} else {
    switch (operacao) {
        case "+":
            resultado = num1 + num2;
            alert(`Resultado: ${num1} + ${num2} = ${resultado}`);
            console.log(`Resultado: ${num1} + ${num2} = ${resultado}`);
            break;
        case "-":
            resultado = num1 - num2;
            alert(`Resultado: ${num1} - ${num2} = ${resultado}`);
            console.log(`Resultado: ${num1} - ${num2} = ${resultado}`);
            break;  
        case "*":
            resultado = num1 * num2;
            alert(`Resultado: ${num1} * ${num2} = ${resultado}`);
            console.log(`Resultado: ${num1} * ${num2} = ${resultado}`);
            break;
        case "/":
            if (num2 === 0) {
                alert("Erro: Divisão por zero.");
                console.log("Erro: Divisão por zero.");
            } else {
                resultado = num1 / num2;
                alert(`Resultado: ${num1} / ${num2} = ${resultado}`);
                console.log(`Resultado: ${num1} / ${num2} = ${resultado}`);
            }
            break;
        default:
            alert("Operação inválida.");
            console.log("Operação inválida.");
    }
}
