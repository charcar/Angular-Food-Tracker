import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';
import { EditMealDetailsComponent } from './edit-meal-details.component';
import { CaloriePipe } from './calorie.pipe';
import { NewMealComponent } from './new-meal.component';


@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  pipes: [CaloriePipe],
  directives: [MealComponent, EditMealDetailsComponent, NewMealComponent],
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="all" selected="selected">Show All Meals</option>
    <option value="healthy">Healthy Meals</option>
    <option value="unhealthy">Unhealthy Meals</option>
    </select>
  <meal-display *ngFor="#currentMeal of mealList | calorie:filterCalories"
      (click)="mealClicked(currentMeal)"
      [class.selected]="currentMeal === selectedMeal"
      [meal]="currentMeal">
      </meal-display>
      <edit-meal-details *ngIf="selectedMeal" [meal]="selectedMeal">
      </edit-meal-details>
      <new-meal (onSubmitNewMeal)="createMeal($event)"></new-meal>
  `
})
export class MealListComponent {
  public mealList: Meal[];
  public selectedMeal: Meal;
  public onMealSelect: EventEmitter<Meal>;
  public filterCalories: string = "all";
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    this.selectedMeal = clickedMeal
    this.onMealSelect.emit(clickedMeal);
  }
  createMeal(mealArray: Array<any>): void {
    this.mealList.push(
      new Meal(mealArray[0], mealArray[1], mealArray[2], this.mealList.length)
    );
  }
  onChange(filterOption) {
    this.filterCalories = filterOption;
    console.log(this.filterCalories);
  }
}
