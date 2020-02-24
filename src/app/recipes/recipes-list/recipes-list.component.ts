import { RecipeService } from './recipe.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[];
  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
