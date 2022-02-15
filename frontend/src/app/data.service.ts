import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  
  private _buildPizzaDataSource: BehaviorSubject<[]> = new BehaviorSubject([]);
  currentMessage$ = this._buildPizzaDataSource.asObservable();

  constructor() { }

  updateMessage(newMessage:any){
    this._buildPizzaDataSource.next(newMessage);
  }
}
