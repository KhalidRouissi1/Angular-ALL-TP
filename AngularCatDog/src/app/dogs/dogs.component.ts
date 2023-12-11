import { Component } from '@angular/core';
import {DOGS} from "../mock-dog";
import { Dog } from '../Dog';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent {
  showDetails: boolean = false;

  dogs = DOGS;
  selectedDog?: Dog;

}


