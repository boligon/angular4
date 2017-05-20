import { Component } from '@angular/core';
import { HoraCertaService } from './hora-certa.service';

@Component({
  selector: 'hora-certa',
  template: '<p> Hora Certa: <em>{{horaCerta}}</em></p>'
})
export class HoraCertaComponent {

  horaCerta: any;

  constructor(horaCertaService: HoraCertaService) {
    horaCertaService.generateHoraCerta(1000, horaCerta => this.horaCerta = horaCerta);
  }

}
