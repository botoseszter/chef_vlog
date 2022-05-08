import { Component, OnInit, EventEmitter,OnChanges, Input, Output  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';
import { Recipe } from 'src/app/shared/recipe';
import { CrudService } from 'src/app/shared/crud.service';
import { FormControl } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-list-recipes',
  templateUrl: './list-recipes.component.html',
  styleUrls: ['./list-recipes.component.scss']
})
export class ListRecipesComponent implements OnInit, OnChanges {

  recipes?: Recipe[];
  @Output() recipeObjectEmitter: EventEmitter<any> = new EventEmitter();
  chosenRecipe: Recipe;
  recipeControl = new FormControl('');


  constructor(
    private http: HttpClient,
    private afs: AngularFirestore,
    private crudService: CrudService,
     ) {}


  ngOnInit(): void {
    this.crudService.GetRecipesList().forEach((recipe)=>this.recipes=recipe);
  }

  ngOnChanges() {
    this.chosenRecipe = this.recipeControl?.value;
  }

  delete(){
    this.crudService.DeleteRecipe(this.chosenRecipe);
    this.chosenRecipe = null;
  }

}

