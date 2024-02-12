import { Component } from '@angular/core';
import { Recipe } from './recipes/recipes.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  selectedOption: string = 'recipes';

  onNavigate(option: string) {
    this.selectedOption = option;
  }

}
