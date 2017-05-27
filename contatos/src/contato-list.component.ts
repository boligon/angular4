import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'contato-list',
  template: `
    <div class="panel panel-default">
      <table class="table table-striped">
        <tr *ngFor="let contato of contatos">
          <td>
            <a [href]="contato.telefone" target="_blank">{{contato.nome}}</a>
          </td>
          <td class="hidden-xs hidden-sm">{{contato.telefone}}</td>
          <td>
            <button (click)="onEdit(contato)" class="btn btn-primary">
              <span class="glyphicon glyphicon-pencil"></span>
              <span class="hidden-xs">Editar</span>
            </button>
            <button (click)="onRemove(contato)" class="btn btn-danger">
              <span class="glyphicon glyphicon-trash"></span>
              <span class="hidden-xs">Deletar</span>
            </button>
          </td>
        </tr>
      </table>
    </div>
      <button (click)="onRemoveAll()" class="btn btn-primary">
            <span class="glyphicon glyphicon-trash"></span>
            <span class="hidden-xs">Deletar Todos</span>
      </button>
    
  `,
})
export class ContatoListComponent {

  @Input() contatos = [];
  @Output() edit = new EventEmitter();
  @Output() remove = new EventEmitter();
  @Output() removeAll = new EventEmitter();

  onEdit(contato) {
    this.edit.emit(contato);
  }

  onRemove(contato) {
    this.remove.emit(contato);
  }

  onRemoveAll() {    
    this.removeAll.emit();      
  }

}
