import { Component, Input } from '@angular/core';
import { Cat } from '../Cat';
import { ActivatedRoute } from '@angular/router';
import { CATS } from '../mock-cats';
import * as _ from 'lodash';

@Component({
  selector: 'app-edit-cat',
  templateUrl: './edit-cat.component.html',
  styleUrls: ['./edit-cat.component.css']
})
export class EditCatComponent {
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
