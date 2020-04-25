import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, MaxLengthValidator } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { ProductService } from '../../../service/product.service';
import { Product } from '../../../model/product';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'complete-purchase',
  templateUrl: './complete-purchase.page.html',
  styleUrls: ['./complete-purchase.page.scss']
})
export class CompletePurchasePage implements OnInit {
  constructor(private router: Router, route: ActivatedRoute, title: Title, private productService: ProductService) {
    this.router.events.subscribe((event) => {
      title.setTitle(route.snapshot.data['title']);
    });
  }
  products: Product[] = [];
  name: string = '';
  phone: string = '';
  phoneFormControl = new FormControl();
  nameFormControl = new FormControl('', [Validators.required]);

  ngOnInit() {
    this.productService.finalOrderList.subscribe((orderList: Product[]) => {
      this.products = orderList;
    })
  }

  onSubmit() {
    // this._http.post("https://tamclub.me/manto7/sefaresh.php", { "name": this.name, "phone": this.phone }).map((response) => response.json()).subscribe((response) => {
    // if (response.message != "error")
    // });
    if (this.nameFormControl.hasError('required') == false &&
      this.phoneFormControl.hasError('pattern') == false &&
      this.phoneFormControl.hasError('minlength') == false &&
      this.phoneFormControl.hasError('required') == false) {
      this.productService.clearOrderList();
      this.router.navigate(['/shopping-cart/complete-purchase/complete-order']);
    }
  }
}
