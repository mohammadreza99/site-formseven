import { Component, OnInit, Input } from '@angular/core';

import { Product } from '../../model/product';

@Component({
  selector: 'recent-product',
  templateUrl: './recent-product.component.html',
  styleUrls: ['./recent-product.component.scss']
})
export class RecentProductComponent implements OnInit {
  constructor() { }
  ngOnInit() { }
  @Input() recentProduct: Product;
}
