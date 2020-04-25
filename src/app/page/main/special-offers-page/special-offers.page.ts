import { Component, OnInit, ViewChild } from '@angular/core';

import { ProductService } from '../../../service/product.service';
import { Product } from '../../../model/product';
import { LightBoxComponent } from '../../../component/light-box/light-box.component';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'special-offers-page',
  templateUrl: './special-offers.page.html',
  styleUrls: ['./special-offers.page.scss']
})
export class SpecialOffersPage implements OnInit {

  constructor(router: Router, route: ActivatedRoute, title: Title, private productService: ProductService) {
    router.events.subscribe((event) => {
      title.setTitle(route.snapshot.data['title']);
    });
  }
  
  specialOffers: Product[] = [];
  gallery: string[] = [];
  @ViewChild(LightBoxComponent) lightBoxCmp: LightBoxComponent;
  ngOnInit() {
    this.specialOffers = this.productService.getPromoProducts();
    for (let i = 0; i < this.specialOffers.length; i++)
      this.gallery[i] = this.specialOffers[i].images[0].thumbImage;
  }
  openModal(i) {
    this.lightBoxCmp.openModal();
    this.lightBoxCmp.currentSlide(i + 1);
  }
}
