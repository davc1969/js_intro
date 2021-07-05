function borrar_p(){
    document.getElementById("titulo_resultado").innerHTML = "";
    document.getElementById("resultados").innerHTML = "";
    console.log("Boorando");

    document.getElementById("borrador").style.display = "none";
}

function solicita_nombre(){
    var nombre = prompt("Ingrese su nombre:", "Alvaro");
    document.getElementById("nombre_1").innerHTML = `Hola ${nombre}, vamos a probar unos programas`;
    console.log(nombre);
}

function aritmetica(){

    borrar_p();

    var num1 = prompt("ingrese el primer número", 0);
    var num2 = prompt("ingrese el segundo número", 0);

    var suma = num1 * 1 + num2 * 1;
    var resta = num1 - num2;
    var multi = num1 * num2;
    if (num2 !== 0){
        var divi = num1 / num2;
        var modu = num1 % num2;
    }

    var mensaje = ""
    mensaje = mensaje + "  Usted ingresó los siguientes números:"  + "<br/>";
    mensaje = mensaje + "     Número 1: " + num1 + "<br/>";
    mensaje = mensaje + "     Número 2: " + num2  + "<br/>";
    mensaje = mensaje + `     La suma de ${num1} mas ${num2} es igual a ${suma}` + "<br/>";
    mensaje = mensaje + `     La resta de ${num1} menos ${num2} es igual a ${resta}` + "<br/>";
    mensaje = mensaje + `     La multiplicación de ${num1} por ${num2} es igual a ${multi}` + "<br/>";
    if (num2 != 0){
        mensaje = mensaje + `     La división de ${num1} entre ${num2} es igual a ${divi}` + "<br/>";
        mensaje = mensaje + `     Em módulo de ${num1} entre ${num2} es igual a ${modu}` + "<br/>";
    } else{
        mensaje = mensaje + `     Ya que el segundo número es igual a 0, no se puede calcular ni división ni módulo` + "<br/>";
    }
    console.log(mensaje);
    document.getElementById("titulo_resultado").innerHTML = "ARÍTMETICA";
    document.getElementById("resultados").innerHTML = mensaje;

    document.getElementById("borrador").style.display = "block";
}

function temperatura(){

    borrar_p();

    var temp_c = prompt("ingrese un valor de temperatura en °C", 0);

    var temp_k = temp_c * 1 + 273.15;
    var temp_f = (temp_c * 1.8) + 32;

    var mensaje = ""
    mensaje = mensaje + `     Temperatura en °C = ${temp_c}` + "<br/>";
    mensaje = mensaje + `     Temperatura en K = ${temp_k}` + "<br/>";    
    mensaje = mensaje + `     Temperatura en °F = ${temp_f}` + "<br/>";
    console.log(mensaje);
    document.getElementById("titulo_resultado").innerHTML = "CONVERSIÓN TEMPERATURAS";
    document.getElementById("resultados").innerHTML = mensaje;

    document.getElementById("borrador").style.display = "block";
}

function dias(){

    borrar_p();

    var dias_1 = prompt("ingrese una cantidad de días", 0);

    var anos_1 = Math.floor(dias_1 / 365)
    var dias_restantes = dias_1 % 365;
    var sem_1 = Math.floor(dias_restantes / 7);
    var dias_restantes = dias_restantes % 7;

    var mensaje = ""
    mensaje = mensaje + `     Usted ingresó ${dias_1}` + "<br/>";
    mensaje = mensaje + `     Eso representa:` + "<br/>";    
    mensaje = mensaje + `     ${anos_1} años, ${sem_1} semanas y ${dias_restantes} días` + "<br/>";
    console.log(mensaje);
    document.getElementById("titulo_resultado").innerHTML = "CONVERSIÓN DÍAS";
    document.getElementById("resultados").innerHTML = mensaje;

    document.getElementById("borrador").style.display = "block";
}

function promedio(){

    borrar_p();

    var num1 = prompt("Ingrese el primer número", 0);
    var num2 = prompt("Ingrese el segundo número", 0);
    var num3 = prompt("Ingrese el tercer número", 0);
    var num4 = prompt("Ingrese el cuarto número", 0);
    var num5 = prompt("Ingrese el quinto número", 0);

    var suma = parseFloat(num1) + parseFloat(num2) + parseFloat(num3) + parseFloat(num4) + parseFloat(num5);
    var promedio = suma / 5;

    var mensaje = ""
    mensaje = mensaje + `Los números que usted ingresó fueron:` + "<br/>";
    mensaje = mensaje + `Número 1: ${num1}` + "<br/>";
    mensaje = mensaje + `Número 1: ${num2}` + "<br/>";
    mensaje = mensaje + `Número 1: ${num3}` + "<br/>";
    mensaje = mensaje + `Número 1: ${num4}` + "<br/>";
    mensaje = mensaje + `Número 1: ${num5}` + "<br/>";
    mensaje = mensaje + `La suma de ellos es: ${suma}` + "<br/>";
    mensaje = mensaje + `Y su promedio es: ${promedio}` + "<br/>";

    console.log(mensaje);
    document.getElementById("titulo_resultado").innerHTML = "SUMA Y PROMEDIO DE 5 NÚMEROS";
    document.getElementById("resultados").innerHTML = mensaje;

    document.getElementById("borrador").style.display = "block";
}