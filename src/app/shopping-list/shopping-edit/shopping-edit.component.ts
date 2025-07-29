import { Component, OnDestroy, OnInit, ViewChild,  } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { Ingredient } from '../../shared/ingredient.model';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('formElement') shoppingListForm: NgForm;
  classSubscription: Subscription;
  editMode: boolean = false;
  editedItemIndex:number;
  editedItem: Ingredient;
  constructor(private shoppingListService: ShoppingListService){}

  ngOnInit(): void {
    this.classSubscription = this.shoppingListService.startedEditing.subscribe((index:number)=>{
      this.editedItemIndex = index;
      this.editMode = true;
      this.editedItem = this.shoppingListService.getIngredient(index);
      this.shoppingListForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      })
    })
  }
  onSubmit(form: NgForm){
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount)
    if(this.editMode){
      this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient);
      this.editMode = false;
    }else{
      this.shoppingListService.onAddItem(newIngredient);
    }
    form.reset();
  }
  ngOnDestroy(): void {
    this.classSubscription.unsubscribe();
  }
}
