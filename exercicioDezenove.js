// **Desconto em compras:**
// Se o valor da compra for maior que R$ 100, aplique 10% de desconto.
// Caso contrário, exiba o valor normal.
// const valorCompra = Number(prompt("Valor da compra (R$):"));
// if (Number.isNaN(valorCompra) || valorCompra < 0) {
//     alert("Valor inválido.");
//     console.log("Valor inválido.");
// } else {
//     if (valorCompra > 100) {
//         const desconto = valorCompra * 0.10;
//         const valorComDesconto = valorCompra - desconto;
//         alert(`Valor com desconto: R$ ${valorComDesconto.toFixed(2)} (Desconto de R$ ${desconto.toFixed(2)})`);
//         console.log(`Valor com desconto: R$ ${valorComDesconto.toFixed(2)} (Desconto de R$ ${desconto.toFixed(2)})`);
//     } else {
//         alert(`Valor normal: R$ ${valorCompra.toFixed(2)}`);
//         console.log(`Valor normal: R$ ${valorCompra.toFixed(2)}`);
//     }
// }