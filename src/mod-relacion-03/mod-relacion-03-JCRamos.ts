import read from 'readline-sync';
import chalk from 'chalk';

/**
 * Autor: Jan Carlos Ramos Martínez
 * Dia: 08/10/2021
 * GitHub: JanCRM
 * Función: Conjunto de funciones de la relacion 3.
 */


 function continuar(mensaje: string): boolean {
    let opcion = read.question(mensaje + ' (s/n): ');
    let continuar = false;
    if (opcion == 's' || opcion == 'S')
      continuar = false;
    else
      continuar = true;
    // Devolvemos porque somos una funcion
    return continuar;
  }
function area(r:number):number{
    const NUM_PI=3.1416;
    let a:number;
    a=(NUM_PI*(r*r));
    return a;
}
function Circunferencia(r:number):number{
    const NUM_PI=3.1416;
    let c:number;
    c=2*NUM_PI*r;
    return c;
}
function esPositivo(num:number):boolean{
    let esPositivo=true;
    if(num>0){
        esPositivo=true;
    }else{
        esPositivo=false;
    }
    return esPositivo;
}
function rCuadrada (num:number):number{
    let raiz:number;
    raiz=Math.sqrt(num);
    return raiz;
}
function restaElMayor (a:number, b:number):number{
    let res=0;
    if(a>b){
        res=a-b;
    }else if(b>a){
        res=b-a;
    }
    return res;
}
function esbisisto(anio:number):boolean{
    let esBisiesto:boolean;
    if(anio % 4==0 && anio % 100 != 0 || anio % 400 == 0){
        esBisiesto=true;
    }else{
        esBisiesto=false;
    }
    return esBisiesto;
}
function conversorDeMonedas(moneda:number){
    let euro:number;
    let ptas:number;
    
}

export default {continuar, area, Circunferencia, esPositivo, rCuadrada, restaElMayor, esbisisto}