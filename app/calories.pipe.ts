import {Pipe, PipeTransform} from 'angular2/core';
import {Meal} from './meal.model';

@Pipe({
  name: 'calories',
  pure: true
})
export class CaloriesPipe implements PipeTransform {
  transform(input: Meal[], args) {
    var desiredCalorieQuantity = args[0];
    if(desiredCalorieQuantity === "Healthy Meals") {
      return input.filter((meal) => {
        return meal.calories <= 300;
      });
    } else if(desiredCalorieQuantity === "Unhealthy Meals") {
      return input.filter((meal) => {
        return meal.calories > 300;
      });
    } else {
      return input;
    }
  }
}
