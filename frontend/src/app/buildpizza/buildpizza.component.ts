import { Component, OnInit } from '@angular/core';
import { FetchdataService } from '../fetchdata.service';
import {buildPizza} from './buildpizza';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-buildpizza',
  templateUrl: './buildpizza.component.html',
  styleUrls: ['./buildpizza.component.css'] 
})
export class BuildpizzaComponent implements OnInit {

  
  buildPizzaData;
  costArray;
  cost=0;
  checkedIngredients=[];
  notFetched:boolean=true;
  dataMessage;
  public customPizzaData: buildPizza[];
  
  
  constructor(private fd:FetchdataService,private router:Router,private data:DataService) {
    this.fd.fetchBuildPizza().subscribe((response)=>{
      this.buildPizzaData = response;
      this.customPizzaData =this.buildPizzaData;
      this.customPizzaData.map((data:any)=>data.checked=false);
      this.notFetched=false;  
      this.data.currentMessage$.subscribe((message)=>{this.dataMessage=message});
    },
    (error)=>{
      console.log("Error in fetching buildpizza data",error);      
    });
   }

  ngOnInit(): void {   

  }
  computeCost(input:any,e:any):void{  
    
    if(e.target.checked){

      this.checkedIngredients.push(input);
      this.cost += input.price;

    }
    else{
      this.checkedIngredients=this.checkedIngredients.filter((item)=>item.id!=input.id);
      this.cost-=input.price;
    }
     this.data.updateMessage({data:this.checkedIngredients,cost:this.cost});
  }

  sendIngredients():void{
    
     this.router.navigate(['/cart']);
    
  }
  inCart(input:number):boolean{
    return (this.dataMessage?.data?.some((item)=>item.id==input));
  }
}
