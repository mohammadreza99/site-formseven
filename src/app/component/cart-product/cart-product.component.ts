import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../../model/product';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.scss']
})
export class CartProductComponent implements OnInit {
  @Input() product: Product;
  @Output() removeProduct = new EventEmitter<any>();
  @Output() changeCount = new EventEmitter<any>();
  productCount: number;

  constructor(private productService: ProductService) { }

  ngOnInit() {}

  onClick() {
    this.removeProduct.emit(this.product.price * this.product.count);
  }

  onChange(){
    this.productService.count.next(this.product.count);
    this.changeCount.emit(this.product.price * this.product.count);
  }
}