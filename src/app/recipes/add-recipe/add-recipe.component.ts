import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { CrudService } from 'src/app/shared/crud.service';
import { Recipe } from 'src/app/shared/recipe';


@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {

  addRecipe = new FormGroup({
    name: new FormControl(''),
    link: new FormControl(''),
    ingredients: new FormControl(''),
    description: new FormControl(''),
  });

  submited = false;

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    let ingredientsValue = this.addRecipe.get('ingredients').value
    let ingredients = [];
    let cica = ingredientsValue.split('\n');
    cica.forEach((x)=>{
    let e = x.split(';');
    let ingredient = {quantity: e[0], type: e[1], name: e[2]};
    ingredients.push(ingredient);
    });
    console.log(ingredients);
    const recipe: Recipe = {
      $key: '',
      name: this.addRecipe.get('name').value,
      video: { link: this.addRecipe.get('link').value, name: this.addRecipe.get('name').value + 'videoja' },
      author: { name: 'Nap Pali', professional: true },
      ingredients: ingredients,
      description: this.addRecipe.get('description').value,
    }
    //if (!this.addRecipe.hasError){
      this.crudService.AddRecipe(recipe);
      this.submited = true;
    //}
  }
}


