import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FetchdataService {

  constructor(private http: HttpClient) { }

  cartData:any;

  fetchOrderPizza(){
    let url = "http://localhost:3000/pizzas";
    return this.http.get(url);
  }

  fetchBuildPizza(){
    let url = "http://localhost:3000/DIYpizza";
    return this.http.get(url);
  }

}

