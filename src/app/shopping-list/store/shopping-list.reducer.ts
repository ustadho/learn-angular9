import { Action } from '@ngrx/store';
import { Ingredient } from './../shared/ingredient.model';

const intialState = {
  ingredients: [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ]
};

export function ShoppingListReducer(state = intialState, action: Action) {
  switch (action.type)
}
