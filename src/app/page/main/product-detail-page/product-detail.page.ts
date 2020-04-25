import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Product } from '../../../model/product';
import { ProductService } from '../../../service/product.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'product-detail-page',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss']
})
export class ProductDetailPage implements OnInit, AfterViewInit {
  product: Product;
  productCounter: number = 0;
  bannerImage: string;
  highBannerImage: string;
  @ViewChild('counter') counter: ElementRef;

  constructor(private router: Router, private title: Title, private route: ActivatedRoute, private productService: ProductService, public snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.product = this.productService.getProduct(params['id']);
      this.title.setTitle(this.route.snapshot.data['title'] + ' ' + this.product.group + ' ' + this.product.category);
    });
    this.bannerImage = this.product.images[0].thumbImage;
    this.highBannerImage = this.product.images[0].fullImage;
  }

  ngAfterViewInit() {
    if (this.product) {
      if (this.product.count >= 1)
        this.counter.nativeElement.style.display = 'inline-block';
      else
        this.counter.nativeElement.style.display = 'none';
    }
  }

  changeImage(srcThumbImage, srcFullImage) {
    this.bannerImage = srcThumbImage;
    this.highBannerImage = srcFullImage;
  }

  addToCart() {
    this.counter.nativeElement.style.display = 'inline';
    this.snackBar.openFromComponent(AddToCartComponent, {
      duration: 600,
    });
    this.product.count++;
    this.productService.addToOrderList(this.product.id);
  }

  addToWishlist() {
    this.snackBar.openFromComponent(AddToWishlistComponent, {
      duration: 600,
    });
    this.productService.addToWishList(this.product.id);
  }
}

@Component({
  selector: 'add-to-wishlist',
  templateUrl: '../../../snack-bars/add-to-wishlist.html'
})
export class AddToWishlistComponent { }


@Component({
  selector: 'add-to-cart',
  templateUrl: '../../../snack-bars/add-to-cart.html'
})
export class AddToCartComponent { }
