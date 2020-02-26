import { Subject } from 'rxjs';
import { ShoppingListService } from './../../shopping-list/shopping-list.service';
import { Injectable } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Injectable()
export class RecipeService {
  receipeChanged = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Recipe 1',
  //     'Recipe 1 testing',
  //     'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
  //     [
  //       new Ingredient('Meat', 1),
  //       new Ingredient('French Fries', 20),
  //     ]),
  //   new Recipe(
  //     'Recipe 2',
  //     'Recipe 2 testing',
  //     'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
  //     [
  //       new Ingredient('Buns', 2),
  //       new Ingredient('Meat', 1),
  //     ])
  // ];
  private recipes: Recipe[] = [];
  constructor(private slService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.receipeChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes.slice()[index];
  }

  addIngredientsToShoppingList(igs: Ingredient[]) {
    this.slService.addIngredients(igs);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.receipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.receipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.receipeChanged.next(this.recipes.slice());
  }
}
