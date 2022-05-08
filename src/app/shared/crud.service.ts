import { Injectable } from '@angular/core';
import { Recipe } from '../shared/recipe';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root',
})
export class CrudService {
  recipesRef: AngularFireList<any>;
  recipeRef: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase, private afs: AngularFirestore) {}
  // Create recipe

  AddRecipe(recipe: Recipe) {
    return this.afs
      .collection<Recipe>('recipes')
      .add(recipe)
      .then(function (docRef) {
        docRef.update({'$key': docRef.id})
      });
  }
  // Fetch Single recipe Object
  GetRecipe(id: string) {
    return this.afs.collection<Recipe>('recipes').doc(id).valueChanges();
  }
  // Fetch recipes List
  GetRecipesList() {
    return this.afs.collection<Recipe>('recipes').valueChanges();
  }
  // Update recipe Object
  UpdateRecipe(recipe: Recipe) {
    return this.afs.collection<Recipe>('recipes').doc(recipe.$key).set(recipe);
  }
  // Delete recipe Object
  DeleteRecipe(recipe: Recipe) {
    this.afs.collection<Recipe>('recipes').doc(recipe.$key).delete();
  }
}
