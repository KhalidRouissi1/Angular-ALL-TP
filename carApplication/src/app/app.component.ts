import { Component, OnInit, NgZone, ChangeDetectorRef } from '@angular/core';
import { Car } from './Car';
import { CarService } from './car.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  cars: Car[] = [];

  constructor(private carService: CarService, private zone: NgZone, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.zone.run(() => {
      this.cars = this.carService.getCars();
      this.cdr.detectChanges();
    });
  }
}
