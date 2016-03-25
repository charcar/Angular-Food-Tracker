import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { NewMealComponent } from './new-meal.component';
import { MealComponent } from './meal.component';
import { EditMealDetailsComponent } from './edit-meal-details.component';
import { CaloriePipe } from './calorie.pipe';


@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  directives: [MealComponent, EditMealDetailsComponent, NewMealComponent],
  template: `
  <select (change)="onChange($event.target.value)" class="form-control" id="dropdown">
    <option value="All Meals" selected="selected">All Meals</option>
    <option value="Healthy Meals">Healthy Meals</option>
    <option value="Unhealthy Meals">Unhealthy Meals</option>
</select>

  <div *ngFor="#currentMeal of mealList | calories:filterCalories">
  <h3 class="mealListItem"
     (click)="mealClicked(currentMeal)">&lowast;
     {{ currentMeal.name }}
   </h3>
   <meal-display *ngIf="currentMeal === selectedMeal" [meal] = "currentMeal"></meal-display>
   <edit-meal *ngIf="currentMeal === selectedMeal" [meal] = "currentMeal" (onUpdateCalories)="updateCalCount($event)"></edit-meal>
 </div>
  `


})
export class MealListComponent {
  public mealList: Meal[];
  public selectedMeal: Meal;
  // public onMealSelect: EventEmitter<Meal>;
  public filterCalories: string = "All Meals";
  constructor() {}
  mealClicked(clickedMeal: Meal): void {
    if(this.selectedMeal === clickedMeal) {
      this.selectedMeal = undefined;
    } else {
      this.selectedMeal = clickedMeal;
    }
  }
  createMeal(mealArray: Array<any>): void {
    this.mealList.push(
      new Meal(mealArray[0], mealArray[1], mealArray[2], this.mealList.length
    ));
  }
  onChange(filterOption) {
    this.filterCalories = filterOption;
  }
}
