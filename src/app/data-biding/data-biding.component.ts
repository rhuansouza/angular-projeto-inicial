import { Component } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent {

  public nome: string = 'Rhuan';
  public checkDisabled: boolean = true;
  public position: { x:number, y:number } = { x:0, y:0};

  public alertaInfo(valor: MouseEvent){
    console.log(valor);
  }

  public mouseMoveTeste(valor: MouseEvent){
      this.position.x = valor.offsetX;
      this.position.y = valor.offsetY;
  }
}
