// 1. **Contagem de 1 a 10:**
//     - Use um `for` para exibir os números de 1 a 10 no console.

// for (let i = 1; i <= 10; i++){
//     console.log(i);
// }

//  2. Tabuada de um número:**
//     - Peça um número ao usuário.
//     - Exiba a tabuada desse número de 1 a 10 usando um `for`.

// numeros.forEach(function(n) {
//     console.log(`7 x ${n} = ${7 * n}`)
// });
// const numeros = [1,2,3,4,5,6,7,8,9,10]
// const x = [1,2,3,4,5,6,7,8,9,10] 

// numeros.forEach(function(numeros) {
//   x.forEach(function(x) {
//     console.log(`${numeros} X ${x} = ${numeros * x} `)
//   })
// })

// 3. **Soma dos primeiros N números naturais:**
//     - Peça um número `N` ao usuário.
//     - Use um `while` ou `for` para somar os números de `1` até `N`.

// let soma = 0
// const num = Number(prompt(`Digite o numero:`))

// for (let i = 1; i <= num; i++) {
//    soma += i 
    
// }

// console.log(soma)

// 1. **Exibir os números pares de 1 a 50:**
//     - Use um `for` ou `while` para exibir apenas os números pares de `1` a `50`.

// let i = 1;
// while (i <= 50) {
//     if (i % 2 === 0) {
//     console.log(i); 
//   }
//    i++
// }


// for (let i = 1; i <= 50; i++) {
//     if (i % 2 === 0) {
//     console.log(i); 
//   }
// }

// 2. **Jogo de adivinhação:**
//     - Gere um número aleatório de 1 a 100.
//     - Peça ao usuário para adivinhar e use um `while` para continuar até ele acertar.
//     - Informe se o número inserido é maior ou menor que o correto.



    // const segredo = Math.floor(Math.random() * 100) + 1;
    // let tentativa;

    // do {
    //     tentativa = Number(prompt("Adivinha o numero  ( entre 1 a 100)"))

    //     if (tentativa > segredo) {
    //         console.log("muito alto! Tenta novamente.")
    //     }else if (tentativa < segredo) {
    //         console.log("muito baixo ! Tente novamente")
    //     } else {
    //         console.log("Parabens, voce acertou!")
    //     }
    // } while ( tentativa !== segredo);

    //Math 

    // console.log(Math.PI);
    // console.log(Math.floor(4.9));
    // console.log(Math.ceil(4.1));
    // console.log(Math.round(4.5));
    // console.log(Math.pow(2, 3));
    // console.log(2 ** 3);
    // console.log(Math.sqrt(16));
    // console.log(Math.min(2, 3, 1, 9));
    // console.log(Math.max(2, 3, 1, 9));


    // // Descobrir o maior numero entre tres valores digitados pelo usuario
    //  console.log("Maior numero :", Math.max(n1, n2, n3))



// 3. **Contagem regressiva:**
//     - Peça um número ao usuário e exiba uma contagem regressiva até 0 usando um `while`.
    
    
    // let num = Number(prompt(`Digite o numero:`))

    // while (num >= 0) {
    //     console.log(num)
    //     num--
    // }


// 1. **Soma dos dígitos de um número:**
//     - Peça ao usuário um número inteiro positivo.
//     - Use um `while` para somar seus dígitos.

// let numero = Number(prompt(`Digite um numero inteiro positivo`))
// let i = 1
// while (numero <= i) {
   
//     console.log(numero + numero)
//      i++
// }
let numero = Number(prompt(`Digite um número inteiro positivo`));
let soma = 0;
let numeroOriginal = numero; // Guarda o número original para a mensagem final

while (numero > 0) {
  // Pega o último dígito do número
  let digito = numero % 10;
  // Adiciona o dígito à soma
  soma += digito;
  // Remove o último dígito do número
  numero = Math.floor(numero / 10);
}

console.log(`A soma dos dígitos de ${numeroOriginal} é ${soma}`);




// 2. **Fatorial de um número:**
//     - Peça um número ao usuário.
//     - Use um `for` ou `while` para calcular o fatorial desse número.



// 3. **Inverter um número:**
//     - Peça um número ao usuário.
//     - Use um `while` para inverter seus dígitos (exemplo: `123` → `321`).


// 4. **Números perfeitos de 1 a 1000:**
//     - Um número perfeito é aquele cuja soma de seus divisores (excluindo ele mesmo) é igual ao próprio número.
//     - Exemplo: `6` → `1 + 2 + 3 = 6`.
//     - Use um `for` aninhado para encontrar e exibir esses números até `1000`.