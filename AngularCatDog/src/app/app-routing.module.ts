import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CatsComponent} from "./cats/cats.component";
import {DogsComponent} from "./dogs/dogs.component";
import { CatDetailsComponent } from './cat-details/cat-details.component';
import { EditCatComponent } from './edit-cat/edit-cat.component';
import { EditDogComponent } from './edit-dog/edit-dog.component';
const routes: Routes = [
  {path: 'cats', component: CatsComponent},
  {path: 'dogs', component: DogsComponent},
  { path: 'dogs/details/:id', component: DogsComponent },
  { path: 'details/:id', component: CatDetailsComponent },
  { path: 'dogs/edit/:id', component: EditDogComponent },
  { path: 'edit/:id', component: EditCatComponent },

  { path: '', redirectTo: '/cats', pathMatch: 'full' },

  ];
@NgModule({
  exports:[RouterModule],
  imports: [RouterModule.forRoot(routes)]

})
export class AppRoutingModule { }
