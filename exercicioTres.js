//Idade detalhada

//Converter anos em meses, dias horas e minutos.
//Faca um programa que leia a ** idade de uma pessoa em anos ** 
// e mostre a mesma idade aproximada em:
// meses 
//dias 
//horas
//minutos
//use **365 dias por ano** como simplificacao.

const anos = Number(prompt("Insira sua idade ?"))

const meses = anos * 12;
const dias  = anos * 365;
const horas = dias * 24;
const minutos = horas * 60;

console.log(`Voce tem aproximadamente ${meses} meses, ${dias} dias , ${horas } horas e ${minutos} minutos`)

