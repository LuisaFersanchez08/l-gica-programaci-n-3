
function calcularFactorial(a) {


    if (typeof a !== 'number' || a < 0 || !Number.isInteger(a)) {
        return "Error: Ingresa un número entero positivo válido.";
    }

    
    if (a === 0 || a === 1) {
        console.log(`${a}! = 1`);
        return 1;
    }

    let resultado = 1;
    let factores = [];

    for (let i = 1; i <= a; i++) {
        resultado *= i;
        factores.push(i);
    }


    console.log(`${a}! = ${factores.join(' x ')} = ${resultado}`);
    return resultado;
}



calcularFactorial(8);
calcularFactorial(9);
calcularFactorial(10);
calcularFactorial(11); 
