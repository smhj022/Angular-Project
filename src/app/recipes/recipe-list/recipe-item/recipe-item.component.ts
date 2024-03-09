import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipes.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {

  @Input() recipeItem: Recipe

  constructor(private recipeService: RecipeService) {
  }

  onSelect(recipe: Recipe) {
    this.recipeService.recipeSelected.emit(this.recipeItem);
  }

}
