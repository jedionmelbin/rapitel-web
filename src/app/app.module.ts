import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SitebarComponent } from './layout/sitebar/sitebar.component';
import { HomeComponent } from './home/home.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import { CustomerComponent } from './customer/customer.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { UsersComponent } from './users/users.component';
import { CreateCustomerComponent } from './customer/create-customer/create-customer.component';
import { CreateProductsComponent } from './products/create-products/create-products.component';
import { CreateOrdersComponent } from './orders/create-orders/create-orders.component';
import { EvidenceComponent } from './evidence/evidence.component';
import { PicturesComponent } from './evidence/pictures/pictures.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SitebarComponent,
    HomeComponent,
    CustomerComponent,
    ProductsComponent,
    OrdersComponent,
    UsersComponent,
    CreateCustomerComponent,
    CreateProductsComponent,
    CreateOrdersComponent,
    EvidenceComponent,
    PicturesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
