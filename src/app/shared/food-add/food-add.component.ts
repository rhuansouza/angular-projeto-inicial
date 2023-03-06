import { Component } from '@angular/core';
//Services
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.scss']
})
export class FoodAddComponent {

    constructor(private foodlistService: FoodListService){

    }

    public listAddItem(value: string){
      this.foodlistService.foodListAdd(value).subscribe({

        next:  res => this.foodlistService.foodListAlert(res),
        error: error => error
      })
    }
}
