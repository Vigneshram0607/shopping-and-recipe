import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrl: './recipe-edit.component.css'
})
export class RecipeEditComponent implements OnInit {
  id:number;
  editMode:boolean = false;

  constructor(private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params['id'])
    this.activatedRoute.params.subscribe((params: Params)=>{
      this.id = +params['id'];
      this.editMode = params['id']!=null;
    })
  }

}
