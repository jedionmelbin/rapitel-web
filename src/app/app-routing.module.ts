import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CustomerComponent} from "./customer/customer.component";
import {ProductsComponent} from "./products/products.component";
import {OrdersComponent} from "./orders/orders.component";
import {UsersComponent} from "./users/users.component";
import {CreateCustomerComponent} from "./customer/create-customer/create-customer.component";
import {CreateProductsComponent} from "./products/create-products/create-products.component";
import {CreateOrdersComponent} from "./orders/create-orders/create-orders.component";
import {EvidenceComponent} from "./evidence/evidence.component";
import {PicturesComponent} from "./evidence/pictures/pictures.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  /* {
     path: '',
     component: LoginComponent,
   },*/
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'customer',
    component: CustomerComponent
  },
  {
    path: 'create-customer',
    component: CreateCustomerComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'create-products',
    component: CreateProductsComponent
  },
  {
    path: 'orders',
    component: OrdersComponent
  },
  {
    path: 'create-orders',
    component: CreateOrdersComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'evidences',
    component: EvidenceComponent
  },
  {
    path: 'pictures/:id',
    component: PicturesComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
})
export class AppRoutingModule {
}
