import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    constructor(private shoppingListService: ShoppingListService){}

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe',
             'This is just a sample recipe',
             'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=700,636',
             [new Ingredient('Meat',10), new Ingredient('Egg', 2)]),
        new Recipe('A Test Recipe 2',
             'This is just a sample recipe',
             'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=700,636',
             [new Ingredient('Milk',10), new Ingredient('Egg', 4)])
    ];

    getRecipes(){
    return this.recipes.slice(); //to return copy of the array
    }

    getRecipe(index:number){
        return this.recipes[index];
    }
    addIngredientsToShoppingList(ingredient: Ingredient[]){
        this.shoppingListService.addIngredients(ingredient)
    }
}