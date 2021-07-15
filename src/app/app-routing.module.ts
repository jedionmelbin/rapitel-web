import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CustomerComponent} from "./customer/customer.component";
import {ProductsComponent} from "./products/products.component";
import {OrdersComponent} from "./orders/orders.component";
import {UsersComponent} from "./users/users.component";

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
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'orders',
    component: OrdersComponent
  },
  {
    path: 'users',
    component: UsersComponent
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
