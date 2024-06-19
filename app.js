let numero = parseInt(prompt("Ingrese un numero"))

calcularFactorial()
function calcularFactorial(){

    let resultado = 1;
    if(isNaN(numero)){
        console.log("El valor no es un numero")
    }else if(numero === 1 || numero === 0){
        console.log("el factorial es " + 1)
    }else{
        for (let i = 1; i <= numero; i++) {
            resultado = resultado * i;
        }
    }
    
    window.alert("El resultado lo veras en consola");
    console.log(resultado)

}