import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent {
  public condition: boolean = true;
  public list: Array<{ nome: string , idade:number}> = [{nome: "Rhuan", idade: 32}]
  public nome:string = 'rhuan'
  ngOnInit(): void {
    setInterval(()=>{
      if(this.condition){
        this.condition = false;
      }else{
        this.condition = true;
      }
    },2000)
  }

  public onClickAddList(){
    this.list.push({nome: "Ana Maris", idade: 32})
  }

  public onClickEventList(event:number){
    this.list.splice(event, 1)
  }
}
