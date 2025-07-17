import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  @ViewChild('nameInput',{static:false}) nameInputRef: ElementRef;
  @ViewChild('amtInput',{static:false}) amtInputRef: ElementRef;
  // @Output() shoppingData = new EventEmitter<{name: string, amount:number}>();

  constructor(private shoppingListService: ShoppingListService){}

  onAddItem(){
    const nameInputValue = this.nameInputRef.nativeElement.value;
    const amtInputValue = this.amtInputRef.nativeElement.value;
    this.shoppingListService.onAddItem({name: nameInputValue, amount: amtInputValue});
    // this.shoppingData.emit({name: nameInputValue, amount: amtInputValue});
  }
}
