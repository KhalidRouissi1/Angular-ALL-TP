import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';

const routes: Routes = [
  { path: '', component: AppComponent }, 
  { path: 'car/:id', component: CarComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
