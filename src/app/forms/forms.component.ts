import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {
  public listComidas: Array<{comida: string, preco: number}> = [
    {
      "comida": "x-salada",
      "preco": 10
    },
    {
      "comida": "x-bacon",
      "preco": 12
    },
    {
      "comida": "x-egg",
      "preco": 8
    }
  ]

  public submitForm(form: NgForm){
    console.log(form)
  }

}
