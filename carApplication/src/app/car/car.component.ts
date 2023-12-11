import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from '../Car';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  id: string = '';
  car: Car | undefined;

  constructor(private route: ActivatedRoute, private carService: CarService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id') || '';
      this.car = this.carService.getCarById(this.id);
    });
  }
}
