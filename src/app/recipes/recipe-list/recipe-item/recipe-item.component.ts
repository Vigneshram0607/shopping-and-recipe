import { Component,  Input } from '@angular/core';
import { RecipeService } from '../../recipe.service';
import { Router } from '@angular/router';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {
 @Input() recipe:Recipe;
 @Input() index: number;

  constructor(private recipeService: RecipeService){}
}
