import {Component, OnInit} from '@angular/core';
import {OrdersService} from "../services/orders.service";

@Component({
  selector: 'app-evidence',
  templateUrl: './evidence.component.html',
  styleUrls: ['./evidence.component.css']
})
export class EvidenceComponent implements OnInit {

  evidences: any;
  orders: any;

  constructor(private ordersService: OrdersService) {
  }

  ngOnInit(): void {
    this.listAll();
  }

  listAll() {
    this.ordersService.listAll().subscribe((response) => {
      this.orders = response;
    });
  }
}
