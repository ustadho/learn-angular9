import { Subject } from 'rxjs';
import { Ingredient } from './../shared/ingredient.model';

export class ShoppingListService {
  ingredientChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  constructor() {}

  getIngredients() {
    return this.ingredients; // but return only the copy of ingredients
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ig: Ingredient) {
    this.ingredients.push(ig);
    this.ingredientChanged.next(this.ingredients.slice());
  }

  addIngredients(igs: Ingredient[]){
    // for(let ig of igs) {
    //   this.addIngredient(ig);
    // }

    this.ingredients.push(...igs);
    this.ingredientChanged.next(this.ingredients.slice());
  }

  updateIgredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientChanged.next(this.ingredients.slice());
  }
}
