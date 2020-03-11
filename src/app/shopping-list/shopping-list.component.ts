import { LoggingService } from './../logging.service';
import { Subscription, Observable } from 'rxjs';
import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from './store/shopping-list.actions';
import * as fromApp from '../store/app.reducer';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Observable<{ ingredients: Ingredient[] }>;
  private igChangeSub: Subscription;
  constructor(
    private store: Store<fromApp.AppState>,
    private loggingService: LoggingService) { }

  ngOnInit(): void {
    this.ingredients = this.store.select('shoppingList');
    this.loggingService.printLog('Hello from ShoppingListComponent ngOnInit');
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
    // this.slService.startedEditing.next(index);
    this.store.dispatch(new ShoppingListActions.StartEdit(index));
  }
}
