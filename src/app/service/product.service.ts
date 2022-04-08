import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiurl='http://localhost:9191/ProductController/products';
  constructor(private http:HttpClient) {

   }
  loadProduct() {
   console.log( this.http.get(this.apiurl));
   return(this.http.get(this.apiurl))
  }

 
}