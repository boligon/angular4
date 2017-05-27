import { Component } from '@angular/core';
import { ContatoService } from './contato.service';

@Component({
  selector: 'contato-app',
  template: `
    <contato-edit [contato]="editableContato"
      (save)="save($event)" (clear)="clear()"></contato-edit>
    <contato-list [contatos]="contatos"
      (edit)="edit($event)" (remove)="remove($event)" (removeAll)="removeAll()"></contato-list>
  `,
})
export class AppComponent {

  contatos = [];
  editableContato = {};

  constructor(private contatoService: ContatoService) {
    contatoService.errorHandler = error =>
      window.alert('Opaaa! O servidor falhou.');
    this.reload();
  }

  clear() {
    this.editableContato = {};
  }

  edit(contato) {
    this.editableContato = Object.assign({}, contato);
  }

  remove(contato) {
    this.contatoService.removeContato(contato)
      .then(() => this.reload());    
  }

  removeAll() {
    this.contatoService.removeAll()
      .then(() => this.reload());    
  }

  save(contato) {
    if (contato.id) {
      this.contatoService.updateContato(contato)
        .then(() => this.reload());
    } else {
      this.contatoService.addContato(contato)
        .then(() => this.reload());
    }
    this.clear();
  }

  private reload() {
    return this.contatoService.getContatos()
          .then(contatos => this.contatos = contatos);
  }

}
