function one(pOne, pTwo) {
    return pOne + pTwo;
}

var x= one(4, 3);

console.log(x);

// 6b) Copiar la función suma anterior y agregarle una validación para controlar si alguno de los parámetros no es un número; de no ser un número, mostrar un alert aclarando que uno
// de los parámetros tiene error y retornar el valor NaN como resultado.

function one(pOne, pTwo) {
    if (!isNaN(pOne) && !isNaN(pTwo)) {
        return pOne + pTwo;
    } else {
    return alert("NaN");
    }
}

var p =one(4, 5);

console.log(p);

//6c()

function validateIntegrer(num) {
    if (Number.isInteger(num)) {
        return  true;
    }
    return false;
}

// 6d) Copiar y renombrar la función suma del ejercicio 6b) y agregarle una llamada a la función del ejercicio 6c. y que valide que los números sean enteros. 
// En caso que haya decimales mostrar un alert con el error y retornar el número convertido a entero (redondeado).


function copy (real, unreal) {
    if (!isNaN(real) && !isNaN(unreal)) {
        if (validateIntegrer(real) && validateIntegrer(unreal)) { 
            return real + unreal         
        } else {
            var y = Math.round(real);
            var k = Math.round(unreal);
            console.log(y, k);
            alert("Error numeros");
            return {y, k};
        }   
   }
    return alert("NaN");
}

var u = copy (8.6, 1.2);

// console.log(u);

// 6e) Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de una nueva función probando que todo siga funcionando igual que en el apartado anterior.

function validateIntegrerCopy (numTwo) {
    if (!isNaN(numTwo)) {
        if (Number.isInteger(numTwo)) {
            return true;
        }
        return false;
    }
    alert("NaN")
}

function mathRoundCopy (copy, copyTwo) {
    var m = Math.round(copy);
    var j = Math.round(copyTwo);
    alert("Error numeros");
    return {m, j}; 
}

function final (a, b) {
    if (validateIntegrerCopy(a) && validateIntegrerCopy(b)) {
        return a + b
    } else {
        return mathRoundCopy(a, b)
    }        
}

var z = final(8.6, 1.2)

console.log("valor z: ", z)