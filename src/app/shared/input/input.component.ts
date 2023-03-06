import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() public contador:number = 0;
  @Input() public dados:Array<{nome:string, idade:number}> = [{nome:"", idade: 0}];

  public nome: string = ""
  public idade: number = 0


  public adicionarAnalista(){
    this.dados.push({
      nome: this.nome,
      idade: this.idade,
    })
  }
}
