import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderpizzaComponent } from './orderpizza/orderpizza.component';
import { BuildpizzaComponent } from './buildpizza/buildpizza.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SumPipe } from './sum.pipe';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderpizzaComponent,
    BuildpizzaComponent,
    HomeComponent,
    NavbarComponent,
    SumPipe,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // FontAwesomeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
