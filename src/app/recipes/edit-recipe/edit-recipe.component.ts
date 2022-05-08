import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Recipe } from 'src/app/shared/recipe';
import { CrudService } from 'src/app/shared/crud.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.scss'],
})
export class EditRecipeComponent implements OnInit {
  editRecipe = new FormGroup({
    name: new FormControl(''),
    link: new FormControl(''),
    ingredients: new FormControl(''),
    description: new FormControl(''),
  });

  recipe: Recipe;

  edited = false;

  constructor(
    private http: HttpClient,
    private afs: AngularFirestore,
    private crudService: CrudService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id);

    this.crudService.GetRecipe(id).subscribe((data) => {
      this.recipe = data;
      let ingredients = '';
      this.recipe.ingredients.forEach(element => {
        ingredients += `${element.quantity};${element.type};${element.name}`
      });
      this.editRecipe.patchValue({
        name: this.recipe.name,
        link: this.recipe.video.link,
        ingredients: ingredients,
        description: this.recipe.description,
      });
    });


  }

  onSubmit() {
    console.log(this.editRecipe.value?.name);

    let ingredientsValue = this.editRecipe.get('ingredients').value;
    let ingredients = [];
    let cica = ingredientsValue.split('\n');
    cica.forEach((x) => {
      let e = x.split(';');
      let ingredient = { quantity: e[0], type: e[1], name: e[2] };
      ingredients.push(ingredient);
    });
    console.log(this.recipe);

    this.recipe.name = this.editRecipe.value?.name;
    this.recipe.video.link = this.editRecipe.value?.link;
    this.recipe.description = this.editRecipe.value?.description;
    this.recipe.ingredients = ingredients;

    //if (!this.addRecipe.hasError){
    this.crudService.UpdateRecipe(this.recipe);
    this.edited = true;
    //}
  }
}
