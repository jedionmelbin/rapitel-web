import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../services/products.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any;

  constructor(private productService: ProductsService) {
  }

  ngOnInit(): void {
    this.listAll();
  }

  listAll() {
    this.productService.listAll().subscribe((response) => {
      this.products = response;
    });
  }
}
