import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AddRecipeComponent } from './recipes/add-recipe/add-recipe.component';
import { EditRecipeComponent } from './recipes/edit-recipe/edit-recipe.component';
import { ListRecipesComponent } from './recipes/list-recipes/list-recipes.component';


const routes: Routes = [
  { path: 'recipes', component: ListRecipesComponent},
  { path: '', component: HomepageComponent},
  { path: 'recipe/create', component:AddRecipeComponent},
  { path: 'recipe/edit/:id', component: EditRecipeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
