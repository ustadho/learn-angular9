import { Subscription, Observable } from 'rxjs';
import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingListService } from './shopping-list.service';
import { Store } from '@ngrx/store';
import * as fromShoppingList from './store/shopping-list.reducer';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Observable<{ ingredients: Ingredient[] }>;
  private igChangeSub: Subscription;
  constructor(
    private slService: ShoppingListService,
    private store: Store<fromShoppingList.AppState>) { }

  ngOnInit(): void {
    this.ingredients = this.store.select('shoppingList');
    // this.ingredients = this.slService.getIngredients();
    // this.igChangeSub = this.slService.ingredientChanged.subscribe(
    //   (igs: Ingredient[]) => {
    //     this.ingredients = igs;
    //   }
    // );
  }

  ngOnDestroy(): void {
    // this.igChangeSub.unsubscribe();
  }

  onEditItem(index: number) {
    this.slService.startedEditing.next(index);
  }
}
