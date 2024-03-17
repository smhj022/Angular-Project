import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent implements OnInit {

  recipeDetails: Recipe;
  id: number;

  constructor(private recipeService: RecipeService, public route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;

    // id is index here

    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params["id"];
        this.recipeDetails = this.recipeService.getRecipeByIndex(this.id)
      }
    )

  }

  onAddToShoppingList() {
    this.recipeService.addIngredientToShoppingList(this.recipeDetails.ingredients);
  }

  onRecipeEdit() {
    this.router.navigate(['edit'], { relativeTo: this.route })
  }


}
