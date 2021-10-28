import read from 'readline-sync';
import chalk, { hwb } from 'chalk';
import mod3 from './mod-relacion-03/mod-relacion-03-JCRamos';

/**
 * Autor: Jan Carlos Ramos Martínez
 * Dia: 08/10/2021
 * GitHub: JanCRM
 * Función: Recopilacion de los ejercicios de la relacion 3, llamando las funciones que se encuentran en otro documento llamado mod-relacion-03.
 */

//Declaracion de variables.
let menu:string;
let continuar:boolean;
do{

    console.log("Selecciones la operacion que deseas realizar.");
    console.log("Area de una circulo, marque[1]");
    console.log("Circunferencia de una circulo, marque[2]");
    console.log("Numero porsitivo, marque[3]");
    console.log("Raiz de una numero, marque[4]");
    console.log("Restar el numero mayor al menor, marque[5]");
    console.log("Comprobar si el año es bisiesto, marque[6]");
    menu=read.question();

    switch(menu){
        //Area de un circulo.
        case '1':
            let r:number;
            let a:number;
            r=read.questionInt("Introduce el radio del circulo, para determinar el area: ");
            a=mod3.area(r);
            console.log(chalk.green.bold("El area es: "+a));
        break;

        //Circunferencia de un circulo.
        case '2':
            let rc:number;
            let c:number;
            rc=read.questionInt("Introduce el radio del circulo, para determinar la circunferencia: ");
            c=mod3.Circunferencia(rc);
            console.log(chalk.green.bold("El area es: "+c));
        break;

        //Determinar si un numero introducido por teclado es positivo.
        case '3':
            let res:boolean;
            let num=read.questionInt("Introduce el numero que deseas comprobar: ");
            res=mod3.esPositivo(num);
            if(res==true){
                console.log("El numero introducido es positivo");
            }else{
                console.log("El numero introducido es negativo.");
            }
        break;

        //Raiz cuadrada de un numero.
        case '4':
            let numR=read.questionInt("Introduce el numero del que quieres saber la raiz: ");
            let comprobar:boolean;
            let resR:number;
            comprobar=mod3.esPositivo(numR);
            if(comprobar==true){
                resR=mod3.rCuadrada(numR);
                console.log(chalk.green.bold("La raiz cuadrada es: "+resR));
            }else{
                console.log(chalk.red.bold("El numero introducido es negativo."));
            }

        break;

        //Restar el numero mayor al menor.
        case '5':
            let aR=read.questionInt("Introduce el valor de a: ");
            let bR=read.questionInt("Introduce el valor de b: ");
            let resultadoR=mod3.restaElMayor(aR,bR);
            console.log(chalk.green.bold("El resutado de la resta es: "+resultadoR));

        break;

        //Determinar si el años es bisiesto o no.
        case '6':
            let anio=read.questionInt("Introduce el año: ");
            let esBisiesto=mod3.esbisisto(anio);
            if(esBisiesto){
                console.log(chalk.green.bold("El año es bisiesto."));
            }else{
                console.log(chalk.yellow.bold("El año no es bisiesto"));
            }
        break;

        //Conversion de pesetas a euro y de euro a pesetas.
        case '7':

        break;
        default:
            console.log(chalk.red.bold("La opcion seleccionada no existe."));
            break;
    }

//Llamada a la funcion que le pregunta al usuario si desea continuar o salir.
continuar=mod3.continuar(chalk.blue.bold("Desea salir del programa "));
}while(continuar)

console.log(chalk.red.bold("Fin del programa"));
