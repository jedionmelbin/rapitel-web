import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../services/customer.service";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers: any;

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.listAll();
  }

  listAll() {
    this.customerService.listAll().subscribe((response) => {
      this.customers = response;
    });
  }
}
