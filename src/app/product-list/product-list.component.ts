import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  add() {
    window.alert('The product has been added to the cart successfully!');
  }
  remove() {
    window.alert('The product has been removed from the cart successfully!');
  }
  share() {
    window.alert('The product has been shared successfully!');
  }
  Payment() {
    window.alert('Your payment has made successfully!');
  }
  review() {
    window.alert('Thanks for Your Review!');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/