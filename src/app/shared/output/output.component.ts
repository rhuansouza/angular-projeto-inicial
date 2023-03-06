import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent {

  @Output()
  public enviarDados = new EventEmitter();

  public list: Array<{ nome: string, idade:number}> = [
    { nome: "Rhuan", idade: 32},
    { nome: "Ana", idade: 32},
  ]


  public getDados(event:number){
    this.enviarDados.emit(this.list[event]);
  }
}
