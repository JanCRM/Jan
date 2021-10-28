// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import chalk from 'chalk';

//Variables
let esPrimo=true;
let num=read.questionInt("Introduce un numero para dterminar si es primo: ");
//7 no se comprueba y en esPrimo almacena el valor del numero anterior.
for(let i=2; i<num && esPrimo; i++){
    
    if(num%i!=0){
        esPrimo=true;
        console.log("es ==0"+esPrimo);
    }
    
    
}
console.log(esPrimo);




