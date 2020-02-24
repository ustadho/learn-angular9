import { EventEmitter } from '@angular/core';
import { Ingredient } from './../shared/ingredient.model';

export class ShoppingListService {
  ingredientChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  constructor() {}

  getIngredients() {
    return this.ingredients; // but return only the copy of ingredients
  }

  addIngredient(ig: Ingredient) {
    this.ingredients.push(ig);
    this.ingredientChanged.emit(this.ingredients.slice());
  }

  addIngredients(igs: Ingredient[]){
    // for(let ig of igs) {
    //   this.addIngredient(ig);
    // }

    this.ingredients.push(...igs);
    this.ingredientChanged.emit(this.ingredients.slice());
  }
}
