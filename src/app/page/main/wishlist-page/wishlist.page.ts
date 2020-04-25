import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from '../../../model/product';
import { ProductService } from '../../../service/product.service';
import { LightBoxComponent } from '../../../component/light-box/light-box.component';
import { log } from 'util';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'wishlist-page',
  templateUrl: './wishlist.page.html',
  styleUrls: ['./wishlist.page.scss']
})

export class WishlistPage implements OnInit {
  wishList = new Array<Product>();
  gallery: Array<string> = new Array();

  @ViewChild(LightBoxComponent) lightBoxCmp: LightBoxComponent;
  constructor(router: Router, route: ActivatedRoute, title: Title, private productService: ProductService) {
    router.events.subscribe((event) => {
      title.setTitle(route.snapshot.data['title']);
    });
  }

  ngOnInit() {
    var wishListIds = this.productService.getWishList();
    for (let index = 0; index < wishListIds.length; index++) {
      const product = this.productService.getProduct(wishListIds[index]);
      this.wishList.push(product);
    }
    setTimeout(() => {
      for (let i = 0; i < this.wishList.length; i++)
        this.gallery[i] = this.wishList[i].images[0].thumbImage;
    }, 0)
  }

  openModal(i) {
    this.lightBoxCmp.openModal();
    this.lightBoxCmp.currentSlide(i + 1);
  }

  deleteItem(i) {
    this.wishList.splice(i, 1);
    this.productService.removeFromWishList(i);
  }
}