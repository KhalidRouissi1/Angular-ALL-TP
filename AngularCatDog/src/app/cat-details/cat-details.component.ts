import {Component, Input, OnInit} from '@angular/core';
import { Cat } from '../Cat';
import * as _ from 'lodash';
import {CATS} from '../mock-cats';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cat-details',
  templateUrl: './cat-details.component.html',
  styleUrls: ['./cat-details.component.css']
})
export class CatDetailsComponent {
  @Input()cat!: Cat;
  constructor(private route: ActivatedRoute) {}
  cats = CATS;
  getCatById(id : number|undefined) {
    let index = _.findIndex(this.cats, (c: Cat) => {
    return c.id === id
    });
    this.cat = this.cats[index];
    console.log(this.cat);
    }


    ngOnInit() {
      const idFromRoute = +this.route.snapshot.paramMap.get('id')!;
      this.getCatById(idFromRoute);
      }
}


