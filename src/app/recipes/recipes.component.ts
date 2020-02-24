import { RecipeService } from './recipes-list/recipe.service';
import { Recipe } from './recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.receipeSelected
      .subscribe(
        (recipe: Recipe) => {
          this.selectedRecipe = recipe;
          console.log('recipe.component-->  this.selectedRecipe', this.selectedRecipe);
        }
    );
  }

}
