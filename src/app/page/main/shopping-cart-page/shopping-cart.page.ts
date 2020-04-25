import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Product } from '../../../model/product';
import { ProductService } from '../../../service/product.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'shopping-cart-page',
  templateUrl: './shopping-cart.page.html',
  styleUrls: ['./shopping-cart.page.scss'],
})

export class ShoppingCartPage implements OnInit {
  totalPrice: number = 0;
  finalPrice: number = 0;
  promo: number = 0;
  promoCode: boolean = true;
  disabled: boolean = false;
  promoValue: string;
  products: Product[] = [];

  constructor(private router: Router, route: ActivatedRoute, title: Title, public snackBar: MatSnackBar, private productService: ProductService) {
    router.events.subscribe((event) => {
      title.setTitle(route.snapshot.data['title']);
    });
  }

  ngOnInit() {
    var orderListIds = this.productService.getOrderList();
    for (let i = 0; i < orderListIds.length; i++) {
      this.products.push(this.productService.getProduct(orderListIds[i]))
    }

    if (this.products) {
      for (let i = 0; i < this.products.length; i++) {
        this.totalPrice += (this.products[i].price * this.products[i].count);
      }
      this.finalPrice = this.totalPrice - this.promo;
    }

    if (this.products.length == 0) {
      this.disabled = true;
    }
  }

  removeProduct(event, i) {
    this.totalPrice -= event;
    this.finalPrice = this.totalPrice - this.promo;
    this.productService.removeFromOrderList(i);
    this.productService.getProduct(this.products[i].id).count = 0;
    
    this.products.splice(i, 1);
    if (this.products.length == 0) {
      this.disabled = true;
    }
  }

  changeCount(event, a) {
    if (this.products) {
      this.totalPrice = 0;
      this.finalPrice = 0;
      for (let i = 0; i < this.products.length; i++) {
        this.totalPrice += (this.products[i].price * this.products[i].count);
      }
      this.finalPrice = this.totalPrice - this.promo;
    }
  }

  openSnackBar() {
    if (this.promoValue == null || this.promoValue == undefined || this.promoValue == "") {
      this.snackBar.openFromComponent(WrongPromoCodeComponent, {
        duration: 600,
      });
    }
    else {
      if (this.promoCode == false) {
        this.snackBar.openFromComponent(WrongPromoCodeComponent, {
          duration: 600,
        });
      }
      else {
        this.snackBar.openFromComponent(CorrectPromoCodeComponent, {
          duration: 600,
        });
      }
    }
  }

  onClick() {
    if (!this.disabled) {
      this.router.navigate(['/shopping-cart/complete-purchase/']);
      this.productService.finalOrderList.next(this.products);
    }
  }
}

@Component({
  selector: 'wrong-promo-code',
  templateUrl: '../../../snack-bars/wrong-promo-code.html'
})
export class WrongPromoCodeComponent { }

@Component({
  selector: 'correct-promo-code',
  templateUrl: '../../../snack-bars/correct-promo-code.html'
})
export class CorrectPromoCodeComponent { }