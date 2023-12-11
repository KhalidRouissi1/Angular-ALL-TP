import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DOGS } from '../mock-dog';
import { Dog } from '../Dog';
import * as _ from 'lodash';

@Component({
  selector: 'app-dogs-details',
  templateUrl: './dogs-details.component.html',
  styleUrls: ['./dogs-details.component.css']
})
export class DogsDetailsComponent {
  @Input()dog!: Dog;
  constructor(private route: ActivatedRoute) {}
  dogs = DOGS;
  getDogById(id : number|undefined) {
    let index =_.findIndex(this.dogs, (D: Dog) => {
    return D.id === id
    });
    this.dog = this.dogs[index];
    console.log(this.dog);
    }


    ngOnInit() {
      const idFromRoute = +this.route.snapshot.paramMap.get('id')!;
      this.getDogById(idFromRoute);
      }
}
