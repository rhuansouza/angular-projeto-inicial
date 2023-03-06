import { Component } from '@angular/core';
import { FoodList } from 'src/app/module/food-list';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent {

  public foodList: Array<FoodList> = [];

  constructor(private foodListService:FoodListService){

  }

  ngOnInit(): void {
    this.foodListService.foodList().subscribe({
      next:res => this.foodList =  res,
      error:error => console.log(error)
  });

    this.foodListService.emitEvent.subscribe(
      res => {
        alert(`Olha você adicionou um item ${res.nome}`)
        return this.foodList.push(res)
      }
    );
  }

  public foodListDelete(id: number){
    return this.foodListService.foodListDelete(id).subscribe({
      next: res => {
        this.foodList = this.foodList.filter(item =>{
          return id !== item.id
        })
      },
      error: error => error
    })
  }


  public foodListEdit(value: string, id: number){
    return this.foodListService.foodListEdit(value, id).subscribe({
      next: res =>{
        return console.log(res);
      },
      error: error => error,
    })
  }

}
