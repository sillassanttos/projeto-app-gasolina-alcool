import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  public resultado: String = "Resultado"
  public precoAlcool: number = 0
  public precoGasolina: number = 0

  calcular() {

    if (this.precoAlcool && this.precoGasolina) {
      /*
      Cálculo: (precoAlcool / precoGasolina)
           se: resultado >= 0.7 melhor utilizar gasolina
        senão: melhor utilizar álcool
      */

      var res = this.precoAlcool / this.precoGasolina

      if (res >= 0.7) {

        this.resultado = "Melhor utilizar Gasolina"

      } else {

        this.resultado = "Melhor utilizar Álcool"
        
      }

    } else {

      this.resultado = "Preencha corretamente os campos!"

    }

  }

}
