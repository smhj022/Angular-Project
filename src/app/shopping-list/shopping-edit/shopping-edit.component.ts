import { AfterViewInit, Component, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent implements AfterViewInit {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  @Output() newIngredient = new EventEmitter<Ingredient>();


  ngAfterViewInit(): void {
    this.nameInputRef.nativeElement.focus();
  }

  addIngredient() {
    this.newIngredient.emit(new Ingredient(this.nameInputRef.nativeElement.value,
      this.amountInputRef.nativeElement.value))
  }



}
