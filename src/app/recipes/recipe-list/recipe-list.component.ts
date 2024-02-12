import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test recipe', 'https://static.toiimg.com/thumb/53314156.cms?imgsize=1762111&width=800&height=800'),
    new Recipe('A Test Recipe 2', 'This is a test recipe 2', 'https://static.toiimg.com/thumb/53314156.cms?imgsize=1762111&width=800&height=800'),
  ];

  @Output() recipeList = new EventEmitter<Recipe>();

  @Output() recipeDetails = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipeElem: Recipe) {
    this.recipeDetails.emit(recipeElem);
  }

}
