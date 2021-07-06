// función para borrar la etiqueta <p> donde se muestran los resultados
function borrar_p(){
    //Borra el tiutlo y el parrafo
    document.getElementById("titulo_resultado").innerHTML = "";
    document.getElementById("resultados").innerHTML = "";
    //oculta el boton de limpiar resultados porque no hay nada que borrar
    document.getElementById("borrador").style.display = "none";
}

//función para escribir los resultados en la sección resultados del HTML
// Escribe el título y el mensaje de los resultados
function escribir_resultados(titulo_1, parrafo_1){
    document.getElementById("titulo_resultado").innerHTML = titulo_1;
    document.getElementById("resultados").innerHTML = parrafo_1;
}

// función para solicitar el nombre y personalizar la pantalla con el nombre del usuario
function solicita_nombre(){
    // primero solicita el nombre utilizando un "prompt"
    var nombre = prompt("Ingrese su nombre:", "Alvaro");
    //luego lo inserta en el documento utilizando innerHTML, en el subtítulo
    document.getElementById("nombre_1").innerHTML = `Hola ${nombre}, vamos a probar unos programas`;
    console.log(nombre);
}

// función para ejecutar el primer programa, con las operaciones matemáticas entre dos números solciitados al usuario
function aritmetica(){

    // primero se limpian los campos de resultado
    borrar_p();

    // se solicitan dos valores al usuario
    var num1 = prompt("ingrese el primer número", 0);
    var num2 = prompt("ingrese el segundo número", 0);

    // se calcula la suma, en lugar de usar "parseint" se multpilica cada número por 1
    var suma = num1 * 1 + num2 * 1;
    // se calcula la resta de ambos números
    var resta = num1 - num2;
    // multiplicación de ambos números
    var multi = num1 * num2;
    // para la división y el módulo, se determina primero si el divisor es diferente de 0
    if (num2 !== 0){
        var divi = num1 / num2;
        var modu = num1 % num2;
    }

    // se escriben los resultados en un único mensaje que luego se escribirá en la sección de resultados
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

    // se llama a la función para escribir resultados
    escribir_resultados("ARÍTMETICA", mensaje)
    // se muestra el botón para limpiar resultados
    document.getElementById("borrador").style.display = "block";
}

function temperatura(){

    // primero se borran los resultados que estén mostrados de otro programa anterior
    borrar_p();

    // se solicita al usuario que ingrese una temepratura en grados centígrados
    var temp_c = prompt("ingrese un valor de temperatura en °C", 0);
    // se calcula la temperatura en Kelvin
    var temp_k = temp_c * 1 + 273.15;
    // se calcula la temperatura en grados Farenheit
    var temp_f = (temp_c * 1.8) + 32;

    // s escriben los resultados en un mensaje compuesto
    var mensaje = ""
    mensaje = mensaje + `     Temperatura en °C = ${temp_c}` + "<br/>";
    mensaje = mensaje + `     Temperatura en K = ${temp_k}` + "<br/>";    
    mensaje = mensaje + `     Temperatura en °F = ${temp_f}` + "<br/>";

    // se llama a la función para escribir resultados
    escribir_resultados("CONVERSIÓN DE TEMPERATURAS", mensaje)
    // se muestra el botón para limpiar resultados
    document.getElementById("borrador").style.display = "block";
}

function dias(){

    // primero se borran los resultados que estén mostrados de otro programa anterior
    borrar_p();

    // Se le pide al suaurio que ingrese un número de días
    var dias_1 = prompt("ingrese una cantidad de días", 0);

    // se calcula a cuántos años corresponde ese total de días en número entero
    var anos_1 = Math.floor(dias_1 / 365)
    // se determina cuantos días quedan de la fracción de año restante del cálculo anterior
    var dias_restantes = dias_1 % 365;
    // se determinan las semanas a las que cooresponden esos días sobrantes, también calculado en núero entero
    var sem_1 = Math.floor(dias_restantes / 7);
    // se determinan los días restantes de las semanas enteras
    var dias_restantes = dias_restantes % 7;

    // se crea el mensaje compuesto con los resultados
    var mensaje = ""
    mensaje = mensaje + `     Usted ingresó ${dias_1}` + "<br/>";
    mensaje = mensaje + `     Eso representa:` + "<br/>";    
    mensaje = mensaje + `     ${anos_1} años, ${sem_1} semanas y ${dias_restantes} días` + "<br/>";

    // se llama a la función para escribir resultados
    escribir_resultados("CONVERSIÓN DE DÍAS", mensaje)
    // se muestra el botón para limpiar resultados
    document.getElementById("borrador").style.display = "block";
}

// función
function promedio(){

    // primero se borran los resultados que estén mostrados de otro programa anterior
    borrar_p();

    // se le solicita al usaurio que ingrese 5 números.  No se hace verificación que efectivameente sean números.  Es necesario
    var num1 = prompt("Ingrese el primer número", 0);
    var num2 = prompt("Ingrese el segundo número", 0);
    var num3 = prompt("Ingrese el tercer número", 0);
    var num4 = prompt("Ingrese el cuarto número", 0);
    var num5 = prompt("Ingrese el quinto número", 0);

    // Se suman los número ingresados, aquí si se hace el parsefloat en caso que el usuario haya ingresado un númemro decimal
    var suma = parseFloat(num1) + parseFloat(num2) + parseFloat(num3) + parseFloat(num4) + parseFloat(num5);
    // se calcula el promedio, tann solo dividiendo la suma entre 5
    var promedio = suma / 5;

    // se crea el mensaje compuesto con los resultados
    var mensaje = ""
    mensaje = mensaje + `Los números que usted ingresó fueron:` + "<br/>";
    mensaje = mensaje + `Número 1: ${num1}` + "<br/>";
    mensaje = mensaje + `Número 1: ${num2}` + "<br/>";
    mensaje = mensaje + `Número 1: ${num3}` + "<br/>";
    mensaje = mensaje + `Número 1: ${num4}` + "<br/>";
    mensaje = mensaje + `Número 1: ${num5}` + "<br/>";
    mensaje = mensaje + `La suma de ellos es: ${suma}` + "<br/>";
    mensaje = mensaje + `Y su promedio es: ${promedio}` + "<br/>";

    // se llama a la función para escribir resultados
    escribir_resultados("SUMA Y PROMEDIO DE CINCO NÚMEROS", mensaje)
    // se muestra el botón para limpiar resultados
    document.getElementById("borrador").style.display = "block";
}