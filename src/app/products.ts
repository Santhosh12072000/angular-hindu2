export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Magnum',
    price: 199,
    description: 'Magnum is a Belgium brand of icecream.'
  },
  {
    id: 2,
    name: 'Kwality walls',
    price: 299,
    description: 'Walls icecream has a moreish ,suprising history!'
  },
  {
    id: 3,
    name: 'Horlicks',
    price: 299,
    description: ''
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/