import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  refreshIngredientsList() {
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredient(ingredient: Ingredient) {
    this.addIngredientInner(ingredient);
    this.refreshIngredientsList();
  }

  addIngredients(ingredients: Ingredient[]) {
    ingredients.forEach((item) => this.addIngredientInner(item));
    this.refreshIngredientsList();
  }

  addIngredientInner(ingredient: Ingredient) {
    var existIngredient = this.ingredients.find(
      (item) => item.name === ingredient.name
    );

    if (existIngredient == null) {
      this.ingredients.push(ingredient);
    } else {
      existIngredient.amount += ingredient.amount;
    }
  }
}
