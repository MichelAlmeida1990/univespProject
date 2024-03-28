
function calcularIMC() {
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        document.getElementById("resultado").innerHTML = "Por favor, insira valores válidos para peso e altura.";
        return;
    }

    var imc = peso / (altura * altura);

    var resultadoTexto = "Seu IMC é: " + imc.toFixed(2) + ". ";

    if (imc < 18.5) {
        resultadoTexto += "Você está com baixo peso.";
    } else if (imc <= 24.9) {
        resultadoTexto += "Você está com peso adequado (eutrofia).";
    } else if (imc <= 29.9) {
        resultadoTexto += "Você está com sobrepeso.";
    } else if (imc <= 34.9) {
        resultadoTexto += "Você está com obesidade grau 1.";
    } else {
        resultadoTexto += "Você está com obesidade grau 2 ou superior.";
    }

    document.getElementById("resultado").innerHTML = resultadoTexto;
}