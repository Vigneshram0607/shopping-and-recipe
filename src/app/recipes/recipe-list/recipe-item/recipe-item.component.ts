import { Component,  Input } from '@angular/core';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {
  @Input() recipe:any;

  constructor(private recipeService: RecipeService){}

  onSelected(){
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}
