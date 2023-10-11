var resultado = document.getElementById("resultado");
var inputArray = [];

function limpiar() {
    resultado.value = "";
    inputArray = [];
}

function agregarNumero(numero) {
    resultado.value += numero;
}

function agregarOperador(operador) {
    resultado.value += operador;
}

function calcularResultado() {
    var input = resultado.value;
    var terms = input.split(/([+\-*/])/);

    var result = 0;
    var operadorActual = '+'; 

    for (var i = 0; i < terms.length; i++) {
        if (terms[i] === '+' || terms[i] === '-' || terms[i] === '*' || terms[i] === '/') {
            operadorActual = terms[i]; 
        } else {
            var number = parseFloat(terms[i]);

            if (operadorActual === '+') { 
                result += number;
            } else if (operadorActual === '-') {
                result -= number;
            } else if (operadorActual === '*') {
                result *= number;
            } else if (operadorActual === '/') { 
                if (number !== 0) {
                    result /= number;
                } else {
                    alert("No se puede dividir por cero");
                    limpiar();
                    return;
                }
            }
        }
    }

    resultado.value = result;
    inputArray = [result];
}
