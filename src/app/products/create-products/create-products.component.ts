import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styleUrls: ['./create-products.component.css']
})
export class CreateProductsComponent implements OnInit {

  productsForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private productsService: ProductsService,
              private router: Router) {
  }


  ngOnInit(): void {
    this.productsForm = this.formBuilder.group({
      productId: [''],
      code: ['', Validators.required],
      description: [''],
      price: [''],
      unidadMedida: ['']
    });
  }

  onFnSaveProducts() {
    if (this.productsForm.valid) {
      this.productsService.create(this.productsForm.value)
        .subscribe(
          (response) => {
            this.router.navigate(['/products'])
          },
          (error) => {
            this.router.navigate(['/products'])
          }
        );
    }
  }

}
