/**
*Serviço responsavel por executar as operações da Calculadora
*@autor Carlos Junior<carlojunior800@gmail.com>
*@since 1.0
*/

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  /*Definindo as constantes utilizadas
  para identificar as operações de calculo*/
  static readonly SOMA: string = "+";
  static readonly SUBTRACAO: string = "-";
  static readonly DIVISAO: string = "/";
  static readonly MULTIPLICACAO: string = "*";
  static readonly RAIZQUADRADA: string = "√";
  static readonly AOQUADRADO: string = "²";
  static readonly AOCUBO: string = "³";
  static readonly PI: string = "π";

  constructor() { }
  /**
   * Metodo que calcula uma operação matemática dado
   * dois numero e uma operação.
   * Suporta as operações de soma, subtração, dividão e multiplicacao
   * @param num1 number
   * @param num2 number
   * @param operacap string operação a ser executada 
   * @returns number Resultado da operação
   */

  raiz(num1: number): number {
    let resultado: number;
    resultado = Math.sqrt(num1);
    num1 = resultado
    return resultado;
  }
  quadrado(num1: number): number {
    let resultado: number;
    resultado = num1 * num1;
    return resultado;
  }
  cubo(num1: number): number {
    let resultado: number;
    resultado = num1 * num1 * num1;
    return resultado;
  }

  calcular(num1: number, num2: number, operacao: string): number {
    let resultado: number;

    switch (operacao) {
      case CalculadoraService.SOMA:
        resultado = num1 + num2;
        break;
      case CalculadoraService.SUBTRACAO:
        resultado = num1 - num2;
        break;

      case CalculadoraService.DIVISAO:
        resultado = num1 / num2;
        break;
      case CalculadoraService.MULTIPLICACAO:
        resultado = num1 * num2;
        break;
      default:
        resultado = 0;
    }
    return resultado;

  }
}
