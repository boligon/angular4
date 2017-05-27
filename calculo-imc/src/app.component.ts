import { Component } from '@angular/core';
import { CalculaImcService } from './calcula-imc.service';

@Component({
  selector: 'calcula-imc',
  template: `
    <p>Peso: </p>
    <input type="number" [(ngModel)]="peso" />
    <p>Altura: </p>
    <input type="number" [(ngModel)]="altura" />    
    <button (click)="clicked($event)"> Calcular </button>
    <h1 *ngIf="valorImc > 0">Seu Imc é {{valorImc}}</h1>    
    <h1>{{classificacao}}</h1>    
  `
})

export class AppComponent {
  private peso: number;
  private altura: number;
  private valorImc: any;
  private classificacao: string;

  constructor(private calculaImcService: CalculaImcService) { }

  getValorImc() {
    this.valorImc = this.calculaImcService.getCalculoImc(this.peso, this.altura);
  }

  getClassificacao() {
    this.classificacao =  this.calculaImcService.getClassificacao(this.valorImc);
  }
  
  clicked(event) {
    this.getValorImc();
    this.getClassificacao();
  }
}
