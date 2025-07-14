import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Apples',100),
    new Ingredient('Oranges',50),
    new Ingredient('Bananas',100)
  ];

  onAddItem(event: Event){
    console.log(event);
    this.ingredients.push(new Ingredient(event['name'], event['amount']))
  }

}
