import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

  @Component({
      selector: 'meal-display',
      inputs: ['meal'],
    template:`
    <h3 (click)="mealClicked()" >{{ meal.name }}</h3>
    <div class="descripCalorieInfo" *ngIf="mealSelected">
      <h4>Description: {{ meal.description }}</h4>
      <h5>Calories: {{ meal.calories }}</h5>
    </div>
    `
  })
  export class MealComponent {
    public meal: Meal;
    public mealSelected: boolean = false;
    mealClicked(): void {
      this.mealSelected = !this.mealSelected;
    }
  }
