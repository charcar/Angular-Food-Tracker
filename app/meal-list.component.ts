import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { NewMealComponent } from './new-meal.component';
import { MealComponent } from './meal.component';
import { EditMealDetailsComponent } from './edit-meal-details.component';


@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  directives: [MealComponent, EditMealDetailsComponent, NewMealComponent],
  template: `
  <meal-display *ngFor="#currentMeal of mealList"
     (click)="mealClicked(currentMeal)"
     [class.selected]="currentMeal === selectedMeal"
     [meal] = "currentMeal">
    </meal-display>
    <edit-meal-details *ngIf="selectedMeal" [meal]="selectedMeal">
    </edit-meal-details>
    <new-meal (onSubmitNewMeal)="createMeal($event)"></new-meal>
  `
})
export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
  createMeal(mealArray: Array<any>): void {
    this.mealList.push(
      new Meal(mealArray[0], mealArray[1], mealArray[2], this.mealList.length
    ));
  }
}
