import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../services/customer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  customerForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private customerService: CustomerService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.customerForm = this.formBuilder.group({
      customerId: [''],
      numerDocument: ['', Validators.required],
      firstName: [''],
      lastName: [''],
      email: [''],
      phone: [''],
      address: ['']
    });
  }

  onFnSaveCustomer() {
    if (this.customerForm.valid) {
      this.customerService.create(this.customerForm.value)
        .subscribe(
          (response) => {
            this.router.navigate(['/customer'])
          },
          (error) => {
            this.router.navigate(['/customer'])
          }
        );
    }
  }
}
