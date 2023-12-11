import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { AppRoutingModule } from './app-routing';
import { CarService } from './car.service';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
