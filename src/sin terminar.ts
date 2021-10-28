// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import chalk, { red } from 'chalk';
import { match } from 'assert';


/**
 * Autor: Jan Carlos Ramos Martínez
 * Dia: 08/10/2021
 * Función: Determina si el numero introducido por teclado tiene decimales o no.
 */

///determinar si un numero es entero o decimal.
let num:number;

num=read.questionInt("Introduce una numero: ");

console.log(isdecimal(num));


    function isdecimal(x:any){
        if(Number.isSafeInteger(x)){
           return console.log("Es decimal");
        }
        return console.log("No es decimal");
    
    }