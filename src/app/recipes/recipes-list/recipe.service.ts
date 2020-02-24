import { EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

export class RecipeService {
  receipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Recipe 1', 'Recipe 1 testing', 'https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/53/2019/02/Cheesy-mince-pasta-bake-920x605.jpg'),
    new Recipe('Recipe 2', 'Recipe 2 testing', 'https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/53/2020/02/Mummy-Meagz-Squeaky-Bean-creme-egg-pancake-stack-920x583.png')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
