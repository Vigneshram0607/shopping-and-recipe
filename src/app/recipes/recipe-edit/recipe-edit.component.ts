import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormControlDirective, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrl: './recipe-edit.component.css'
})
export class RecipeEditComponent implements OnInit {
  id:number;
  editMode:boolean = false;
  recipeForm:FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private recipeService: RecipeService){}

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params['id'])
    this.activatedRoute.params.subscribe((params: Params)=>{
      this.id = +params['id'];
      this.editMode = params['id']!=null;
      this.initForm();
    })
  }

  private initForm(){
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);

    if(this.editMode){
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeDescription = recipe.description;
      recipeImagePath = recipe.imagePath;
      if(recipe['ingredients']){
        for(let ingredeint of recipe.ingredients){
          recipeIngredients.push(new FormGroup({
            'name': new FormControl(ingredeint.name),
            'amount': new FormControl(ingredeint.amount)
          }))
        }
      }
    }

    this.recipeForm = new FormGroup(
      {
      'name': new FormControl(recipeName),
      'imagePath': new FormControl(recipeImagePath),
      'description': new FormControl(recipeDescription),
      'ingredients': recipeIngredients
    }
  )
  }

  get controls() { // a getter!
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  onSubmit(){
    console.log('RECIPE FORM: ',this.recipeForm);
  }
}
