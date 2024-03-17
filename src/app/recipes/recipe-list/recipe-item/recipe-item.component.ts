import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipes.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent implements OnInit {

  @Input() recipeItem: Recipe;
  @Input() index: number;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit(): void {

  }

}
