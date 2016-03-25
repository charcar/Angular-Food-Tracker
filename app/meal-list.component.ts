import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';


@Component({
  selector: 'meal-list',
  inputs: '[mealList]',
  outputs: '[onMealSelect]',

  directives: []
  template: `

  `
})
export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
}
