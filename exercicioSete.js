//Condicionais 

// if/else 

    const idade = Number(prompt("Insira sua idade :"));

    if (Number.isNaN(idade) || idade < 0) {
        console.log("Idade invalida")

    } else {

        if (idade >= 18){
            console.log("maior de idade")

        } else {
            console.log("Menor de idade")
        }

    }
    