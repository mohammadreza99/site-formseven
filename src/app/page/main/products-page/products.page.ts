import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from '../../../model/product';
import { ProductService } from '../../../service/product.service';
import { LightBoxComponent } from '../../../component/light-box/light-box.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'products-page',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss']
})
export class ProductsPage implements OnInit {
  categories: string[] = [];
  selectedCategory: string = '';
  selectedGroup: string = '';
  gallery: Array<string>;
  recentProducts: Product[] = [];
  products: Product[] = [];
  @ViewChild(LightBoxComponent) lightBoxCmp: LightBoxComponent;


  constructor(private router: Router, private title: Title, private route: ActivatedRoute, private productService: ProductService) {

  }
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.router.events.subscribe((event) => {
        this.title.setTitle(params['group']);
      });
      this.selectedGroup = params['group'];

      this.recentProducts = this.productService.getRecentProducts(this.selectedGroup);

      this.selectedCategory = params['category'];
      this.categories = this.productService.getCategories(this.selectedGroup);
      if (this.selectedGroup == undefined || this.selectedGroup == '')
        this.products = this.productService.filterByGroupes('');
      this.products = this.productService.filterByGroupes(this.selectedGroup);
    });
  }

  openModal(i) {
    this.lightBoxCmp.openModal();
    this.lightBoxCmp.currentSlide(i + 1);
  }

  allCategoriesClicked() {
    this.selectedCategory = '';
    this.filteredProducts();
  }

  onFilterCategory(e) {
    this.selectedCategory = e;
  }

  filteredProducts() {
    if (this.selectedCategory == '' || this.selectedCategory == undefined) {
      this.gallery = new Array(this.products.length);
      for (let i = 0; i < this.products.length; i++)
        this.gallery[i] = this.products[i].images[0].thumbImage;
      return this.products;
    }
    else {
      let filteredCategoryProduct: Product[] = [];
      for (let i = 0; i < this.products.length; i++)
        if (this.products[i].category == this.selectedCategory)
          filteredCategoryProduct.push(this.products[i]);
      this.gallery = new Array(filteredCategoryProduct.length);
      for (let i = 0; i < filteredCategoryProduct.length; i++)
        this.gallery[i] = filteredCategoryProduct[i].images[0].thumbImage;
      return filteredCategoryProduct;
    }
  }
}