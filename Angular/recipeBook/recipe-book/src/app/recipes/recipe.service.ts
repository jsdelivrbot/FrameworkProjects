import { Injectable } from '@angular/core';

import {Recipe} from './recipe';

import { Ingredient } from './ingredient';

@Injectable()
export class RecipeService {

  private recipes : Recipe[] = [
    new Recipe('Schnitzel', 'Dummy Description', 'http://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-7_edited.jpg', 
      [
        new Ingredient ('French Fries', 2),
        new Ingredient ('Pork Meat', 1)
      ]),
    new Recipe('Summer Salad', 'Dummy Description 2', 'http://cdn.iowagirleats.com/wp-content/uploads/2013/05/Triple-Berry-Summer-Salad-03_mini.jpg', []),
  ];

  constructor() { }

  getRecipes(){
    return this.recipes;
  }

  getRecipe(id: number){
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe){
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe){
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

}
