import { RouterModule } from '@angular/router';
import { RecipesResolverService } from './recipes-resolver.service';
import { RecipesDetailComponent } from './recipes-detail/recipes-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { AuthGuard } from './../auth/auth.guard';
import { RecipesComponent } from './recipes.component';
import { NgModule } from '@angular/core';

const routes = [
  {
    path: 'recipes',
    component: RecipesComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: RecipeStartComponent},
      { path: 'new', component: RecipeEditComponent}, // harus diatas kalau tidak maka tidak didetek
      { path: ':id', component: RecipesDetailComponent, resolve: [RecipesResolverService]},
      { path: ':id/edit', component: RecipeEditComponent, resolve: [RecipesResolverService]},
    ]
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule {

}
