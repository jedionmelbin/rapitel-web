import {Component, OnInit} from '@angular/core';
import {OrdersService} from "../services/orders.service";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: any;
  ordersForm:FormGroup;

  constructor(private orderService: OrdersService) {
  }

  ngOnInit(): void {
    this.listAll();
  }

  listAll() {
    this.orderService.listAll().subscribe((response) => {
      this.orders = response;
    });
  }
}
