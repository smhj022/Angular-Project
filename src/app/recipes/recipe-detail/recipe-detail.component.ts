import { Component, Input } from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent {

  @Input() recipeDetails: Recipe;

  constructor(private recipeService: RecipeService) {
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientToShoppingList(this.recipeDetails.ingredients);
  }


}
