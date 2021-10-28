import read from 'readline-sync';
import chalk from 'chalk';




/**
 * Autor: Jan Carlos Ramos Martínez
 * GitHub: JanCRM
 * Dia: 09/10/2021
 * Función: Factorial de una numero introducido por teclado.
 * 
*/

function factorial(num:number){
    let fact;
    //Entrada de datos.
    num=read.questionInt("Introduce el numero del que quieres saber el factorial: ");
    fact=1;
    //la variable i la igualo al numero introducido por teclado, 
    //de esta forma podemos restar uno en cada iteracion, luego acumulamos en una variable
    //la multiplicacion del numero con el siguiente que es menor.
    for(let i=num; i>1; --i){
        fact*=i;
        
    }
    return fact;
}
export default{factorial}