import {Pipe, PipeTransform} from 'angular2/core';
import {Meal} from './meal.model';

@Pipe({
  name: 'calorie',
  pure: false
})
export class CaloriePipe implements PipeTransform {
  transform(input: Meal[], args) {
    var desiredCalorieQuantity = args[0];
    if(desiredCalorieQuantity === "healthy") {
      return input.filter((meal) => {
        return meal.calories <= 300;
      });
    } else if(desiredCalorieQuantity === "unhealthy") {
      return input.filter((meal) => {
        return meal.calories > 300;
      });
    } else {
      return input;
    }
  }
}
