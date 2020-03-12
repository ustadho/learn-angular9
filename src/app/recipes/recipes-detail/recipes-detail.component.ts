import { map, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { RecipeService } from './../recipes-list/recipe.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as fromApp from '../../store/app.reducer';
import * as RecipesActions from '../store/recipe.actions';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router,
              private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.route.params.pipe(map(params => {
      return +params.id;
    }), switchMap(id => {
      this.id = id;
      return this.store.select('recipes');
    }),
    map(recipeState => {
      return recipeState.recipes.find((recipe, index) => {
        return index === this.id;
      });
    })).subscribe(recipe => {
      this.recipe = recipe;
    });
    // atau bisa juga dengan cara berikut
    // this.route.params
    // .subscribe(
    //   (params: Params) => {
    //     this.id = +params['id'];
    //     // this.recipe = this.recipeService.getRecipe(this.id);
    //     this.store.select('recipes').pipe(
    //       map(recipeState => {
    //         return recipeState.recipes.find((recipe, index) => {
    //           return index === this.id;
    //         });
    //       })
    //     ).subscribe(recipe => {
    //       this.recipe = recipe;
    //     });
    //   }
    // );
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
  onAddToShoppingList() {
    // kenapa kita tidak butuh id lagi
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);

    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteRecipe() {
    // this.recipeService.deleteRecipe(this.id);
    this.store.dispatch(new RecipesActions.DeleteRecipe(this.id));
    this.router.navigate(['/recipes']);
  }
}
