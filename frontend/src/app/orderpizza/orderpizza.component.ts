import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FetchdataService } from '../fetchdata.service';
import {orderPizza} from './orderPizza';


@Component({
  selector: 'app-orderpizza',
  templateUrl: './orderpizza.component.html',
  styleUrls: ['./orderpizza.component.css']
})

export class OrderpizzaComponent implements OnInit {

  dataMessage;

  orderPizzaData;
  notFetched=true;
  public orderPizzaInterface:orderPizza[];
  public cartData:any=[];

  constructor(private fd:FetchdataService) {
  
  }
  
  ngOnInit(): void {


    this.fd.fetchOrderPizza().subscribe((resp)=>{
      this.orderPizzaData = resp;
      this.orderPizzaInterface = this.orderPizzaData;   
      this.notFetched = false;
    },
    (error)=>{
      console.log("Error from fetching data service:",error);
      
    });
  }
  addToCart(item:any,input:number):void{
    this.orderPizzaInterface[input].quantity=1;  
    this.cartData.push(item);
    this.fd.cartData=this.cartData         
  }
  inCart(item:any):boolean{    
    return (this.fd.cartData?.some((pizza)=>pizza.id==item.id))
  }
  
  removeFromCart(pizza:any,index:any){
     if(this.inCart(pizza)){
     this.fd.cartData.splice(index,1);
    }
  }
}
