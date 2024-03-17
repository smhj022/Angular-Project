import { EventEmitter, INJECTOR, Injectable } from "@angular/core";
import { Recipe } from "./recipes.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>;

    private recipes: Recipe[] = [
        new Recipe('Sandwich',
            'Veg Sandwich with butter',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAi3eIdKtNukdTf3B7alFEtlzm8KUP4tFwvQ&usqp=CAU',
            [
                new Ingredient('Bread', 1),
                new Ingredient('Potato', 2),
                new Ingredient('Butter', 1)
            ]),
        new Recipe('Burger',
            'Veg Panner Burger ',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6ZPuQqjo5qUX7tTDNhVV90lGCV-AbqR6Owg&usqp=CAU',
            [
                new Ingredient('Ban', 2),
                new Ingredient('Tomato', 2),
                new Ingredient('Panner slice', 1),
            ]),
    ];

    constructor(private slservice: ShoppingListService) {

    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipeByIndex(index: number) {
        return this.recipes[index];
    }

    addIngredientToShoppingList(ingredientList: Ingredient[]) {
        this.slservice.addIngredientsList(ingredientList);
    }
}