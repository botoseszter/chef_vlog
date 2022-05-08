import { Component } from '@angular/core';
import { RecipeService } from './services/recipe.service';
import { CrudService } from './shared/crud.service';
import { Recipe } from './shared/recipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chef-vlog';

  // recipe: Recipe =
  // {
  //   name: 'Toltott gomba',
  //   author: {name: 'Jani', professional: true},
  //   $key: '',
  //   description: 'finomizu',
  //   ingredients: [{'name': 'gomba', 'quantity': 3, 'type': 'db'}],
  //   video: {'link': 'hihihuhu.hu', 'name': 'elhitted'}
  // }
  constructor(crudService: CrudService) {
  }
}
