import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService,private activatedRoute: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
   this.activatedRoute.params.subscribe((params:Params)=>{
    this.id=+params['id']
    this.recipe = this.recipeService.getRecipe(this.id);
   })
  }

  onAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe(){
    this.router.navigate(['new'], {relativeTo: this.activatedRoute})
  }
}
