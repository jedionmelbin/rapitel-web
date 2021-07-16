import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductsService} from "../../services/products.service";
import {Router} from "@angular/router";
import {OrdersService} from "../../services/orders.service";
import {CustomerService} from "../../services/customer.service";

@Component({
  selector: 'app-create-orders',
  templateUrl: './create-orders.component.html',
  styleUrls: ['./create-orders.component.css']
})
export class CreateOrdersComponent implements OnInit {

  ordersForm: FormGroup;
  productsItemId: any;
  products: any;
  customers: any;
  productsItem: any = [];

  constructor(private formBuilder: FormBuilder,
              private ordersService: OrdersService,
              private customerService: CustomerService,
              private productsService: ProductsService,
              private router: Router) {
  }


  ngOnInit(): void {
    this.ordersForm = this.formBuilder.group({
      orderId: [''],
      mumOrder: ['', Validators.required],
      customerId: ['', Validators.required],
      createDate: ['', Validators.required],
      deliveryDate: ['', Validators.required],
      subTotal: ['', Validators.required],
      igv: ['', Validators.required],
      total: ['', Validators.required],
    });

    this.listCustomers();
    this.listProducts();
  }

  onFnSaveOrders() {
    if (this.ordersForm.valid) {
      debugger;
      const orders = {
        orderId: 0,
        mumOrder: this.ordersForm.get("mumOrder")?.value,
        createDate: this.ordersForm.get("createDate")?.value,
        deliveryDate: this.ordersForm.get("deliveryDate")?.value,
        deliveyTime: '2021-06-06',
        state: null,
        subTotal: this.ordersForm.get("subTotal")?.value,
        igv: this.ordersForm.get("igv")?.value,
        total: this.ordersForm.get("total")?.value,
        customers: {
          customerId: this.ordersForm.get("customerId")?.value,
        },
        orderDetails: this.productsItem
      };
      this.ordersService.create(orders)
        .subscribe(
          (response) => {
            this.router.navigate(['/orders'])
          },
          (error) => {
            this.router.navigate(['/orders'])
          }
        );
    }
  }

  listCustomers() {
    this.customerService.listAll().subscribe((response) => {
      this.customers = response;
    });
  }

  listProducts() {
    this.productsService.listAll().subscribe((response) => {
      this.products = response;
    });
  }

  fnAddItem() {
  }

  selectOption(id: any) {
    this.productsService.getById(id.value).subscribe((response) => {

      const products = {
        orderDetailsId: 0,
        price: response.price,
        count: 1,
        products: response
      };
      this.productsItem.push(products)
    });
  }

}
