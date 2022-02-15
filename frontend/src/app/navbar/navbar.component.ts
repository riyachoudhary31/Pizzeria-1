import { Component, OnInit, ViewEncapsulation, AfterViewInit, Output, EventEmitter, HostListener } from '@angular/core';
import { Router } from '@angular/router';
// import { faShoppingCart }  from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit{
  
  isCollapsed: boolean = true;
  // faShoppingCart = faShoppingCart;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  

 

}
