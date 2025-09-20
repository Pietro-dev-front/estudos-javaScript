const temp = Number(prompt("Temperatura atual (C):"))

if (Number.isNaN(temp)) {
    console.log("Valor invalido")

} else if (temp < 0){
    console.log("Muito frio")

} else if (temp <= 20) {
    console.log("frio")

}else if (temp <= 30) {
    console.log("Agradavel")

} else {
    console.log("Quente")
}