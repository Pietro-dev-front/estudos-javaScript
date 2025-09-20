const dist = prompt("dia da semana ( seg, ter,qua, ...):");

switch (dia) {
    case "seg":
    case "ter":
    case "qua":
    case "qui":
    case "sex":
        console.log("dia util");
        break;

    case "sab":
    case "dom":
        console.log("fim de semana");
        break;
    default:
        console,log("dia invalido");
}
