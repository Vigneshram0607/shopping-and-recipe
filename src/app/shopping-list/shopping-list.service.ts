import { EventEmitter } from "@angular/core";
import {Subject} from 'rxjs';
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
    ingredientsChanged = new Subject<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples',100),
        new Ingredient('Oranges',50),
        new Ingredient('Bananas',100)
      ];

      getIngredients(){
        return this.ingredients.slice();
      }

      onAddItem(event: {name: string, amount: number}){
        console.log(event);
        this.ingredients.push(new Ingredient(event['name'], event['amount']));
        this.ingredientsChanged.next(this.ingredients.slice());
      }

      addIngredients(ingredients: Ingredient[]){
        console.log('INGREDIENTS: ',ingredients)
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
      }
      

    
}