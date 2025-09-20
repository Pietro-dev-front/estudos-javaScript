//Tempo total em segundos
//Escreva um programa que leia um tempo no formato hh:mm:ss
//(horas:minutos:segundos) e converta tudo para segundos totais.
//exemplo:
//01:10:15 = 4215 segundos

const t = prompt("Digite o tempo (hh:mm:ss)");
const [hh, mm, ss] = t.split(":").map(Number)
const total = hh * 3600 + mm * 60 + ss;

console.log(`${t} = ${total} segundos`)