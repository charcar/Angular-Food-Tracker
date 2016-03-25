import { Component } from 'angular2/core';
import { MealListComponent } from './meal-list.component';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
  <div class="container">
    <h1>SnackTrack</h1>
    <meal-list
     [mealList]="meals"
     (onMealSelect)="mealWasSelected($event)">
     </meal-list>
   </div>
  `
})

export class AppComponent {
  public meals: Meal[];
  constructor() {
    this.meals = [
      new Meal("Poutine", "canada's contribution to american obesity", 2300, 0),
      new Meal("Cheese Curds", "a disgusting tradition from a fascinating place, wisconsin", 1200, 1),
      new Meal("Celery", "watery, crunchy, cud-inspiring", 12, 2),
      new Meal("Radicchio", "the 'blood cabbage', I tried a leaf", 60, 3)
    ];
  }

}
