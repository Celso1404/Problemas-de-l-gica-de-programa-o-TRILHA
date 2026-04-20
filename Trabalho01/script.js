//Exercicio1
function go() {
    var valueInput = document.getElementById('num').value;

    alert(math);
}

//Exercicio2
function troca() {
    var valueA = document.getElementById('num1').value;
    var valueB = document.getElementById('num2').value; 

    var c = valueB;
    var b = valueA;
    var a = c;

    console.log("Variável A = " + a + "\nVariável B = " + b)
}

//Exercicio3
function lerIdade() {
    var crianca1 = Number(document.getElementById('idade1').value);
    var crianca2 = Number(document.getElementById('idade2').value);

    var soma = crianca1 + crianca2;
    var media = crianca1 / crianca2;

    alert("A soma das idades das crianças é igual a: " + soma + "\nA média da idade das crianças é igual a: " + media)

}

//Exercicio4
function calcular() {

    var valor1 = Number(document.querySelector('#numero1').value);
    var valor2 = Number(document.querySelector('#numero2').value);

    var selectOperation = document.querySelector('input[name="operation"]:checked').value;
    var nameOperation,calculo;

    if(selectOperation == 'Adição') {
        nameOperation = 'Adição';
        calculo = valor1 + valor2;
    } else if (selectOperation == 'Subtração') {
        nameOperation = 'Subtração';
        calculo = valor1 - valor2;
    } else if(selectOperation == 'Multiplicação') {
        nameOperation = 'Multiplicação';
        calculo = valor1 * valor2;
    } else if (selectOperation == 'Divisão') {
        nameOperation = "Divisão";
        calculo = valor1 / valor2;
    }

    console.log(calculo)
}

//Exercício5

function converteparaF() {

    var temperatura = document.getElementById('temperatura').value;
    var valorConvertido = Number(temperatura * 1.8) + 32

    alert(valorConvertido)    
}