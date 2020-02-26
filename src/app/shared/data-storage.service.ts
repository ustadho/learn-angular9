import { RecipeService } from './../recipes/recipes-list/recipe.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';

import { Recipe } from './../recipes/recipe.model';
@Injectable({providedIn: 'root'})
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {

  }

  storeRecipe() {
    const recipes = this.recipeService.getRecipes();
    this.http.put('https://ustadho-course-recipe-book.firebaseio.com/recipes.json', recipes)
    .subscribe(response => {
      console.log(response);
    });
  }

  fetchRecipes() {
    return this.http.get<Recipe[]>('https://ustadho-course-recipe-book.firebaseio.com/recipes.json')
    .pipe(map(recipes => {
      return recipes.map(recipe => {
        return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []}
      }); // map here is javascript method
    }),
    tap(recipes => {
      this.recipeService.setRecipes(recipes);
    })
    );
  }
}
