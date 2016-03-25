import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

  @Component({
      selector: 'meal-display',
      inputs: ['meal'],
    template:`
    <div class="mealItem">
    <h3>{{meal.name}}</h3>

    <div class="mealDetails">
    </div>
    </div>
    `
  })
  export class MealComponent {
    public meal: Meal;
  }
