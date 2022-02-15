import { Component, OnInit,AfterViewInit } from '@angular/core';
import { DataService } from '../data.service';
import { FetchdataService } from '../fetchdata.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  checkedIngredients:any;
  orderData:any;
  quan:any=1;
  totalCost:any=0;
  itemCost:number[]= [0,0,0,0,0];
  dataMessage;
  constructor(private fd : FetchdataService,private data: DataService) {}

  ngOnInit(): void {

    this.data.currentMessage$.subscribe((message)=>{this.dataMessage=message});    
    this.orderData = this.fd.cartData;
  }
  
  decQuan(index:number):void{
    if(this.orderData[index].quantity==1){
      return;
    }
    this.orderData[index].quantity--;
    this.itemCost[index] = this.orderData[index].price*this.orderData[index].quantity;
  }
  incQuan(index:number):void{
    
    this.orderData[index].quantity++;
    this.itemCost[index] = this.orderData[index].price*this.orderData[index].quantity;
    
  }
  clearCartData(){
    this.fd.cartData = [];
    this.orderData=[]
    this.dataMessage = [];
    this.data.updateMessage([]);
  }
  placeOrder():void{
    for (let index = 0; index < this.itemCost.length; index++) {
      this.totalCost += this.itemCost[index];
      
    }
    if(this.dataMessage.cost){

      this.totalCost+=this.dataMessage.cost;
    }
    
    alert("You have successfully placed your order!\n Total Price: Rs."+this.totalCost)
  }

}
