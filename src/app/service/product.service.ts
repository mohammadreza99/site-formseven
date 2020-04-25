
import {tap} from 'rxjs/operators';


import { Subject ,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../model/product';
import { ProductInfo } from '../model/product-info';

@Injectable()
export class ProductService {
  constructor(private _http: HttpClient) { }
  wishListChange = new Subject();
  orderListChange = new Subject();
  count = new Subject();
  finalOrderList = new Subject<Product[]>();
  wishList = new Array<string>();
  orderList = new Array<string>();
  products = new Array<Product>();
  productInfo = new Array<ProductInfo>();
  categories = new Array<string>();
  colors = new Array<string>();
  sizes = new Array<number>();
  isLoaded: boolean = false;
  recentIds: string[] = ['2', '3', '4', '28', '18'];

  ////////////////////////////////////////////////////////////////////////////////////////
  //                                       PRODUCT                                      //
  ////////////////////////////////////////////////////////////////////////////////////////
  getProducts() {
    return this.products;
  }

  getProduct(id) {
    if (this.products.length == 0)
      this.loadProducts();

    return this.products.find((product) => product.id == id);
  }

  getPromoProducts() {
    let promoProducts: Product[] = [];
    let products = this.getProducts();
    for (let i = 0; i < products.length; i++)
      if (products[i].promo != 0)
        promoProducts.push(products[i]);
    return promoProducts;
  }

  loadProducts(): Observable<ProductInfo[]> {
    return this._http.get<ProductInfo[]>('/assets/products.json').pipe(
      tap((products) => {
        this.isLoaded = true;
        this.productInfo = products;
        for (let i = 0; i < products.length; i++) {
          this.products.push(Object.assign(new Product(), this.productInfo[i]));
        }
      }));
  }

  ////////////////////////////////////////////////////////////////////////////////////////
  //                                       FILTER                                       //
  ////////////////////////////////////////////////////////////////////////////////////////
  include(id, list: any[]) {
    for (let i = 0; i < list.length; i++) {
      if (list[i] === id) {
        return true;
      }
    }
    return false;
  }

  filterByGroupes(group) {
    let filterByGroupList: Product[] = [];
    if (group == '' || group == undefined) {
      return this.getProducts();
    } else {
      for (let i = 0; i < this.products.length; i++) {
        if (this.products[i].group == group)
          filterByGroupList.push(this.products[i])
      }
      return filterByGroupList
    }
  }

  filterByCategory(category) {
    let filterByCategoryList: Product[] = [];
    if (category == '' || category == undefined) {
      return this.getProducts();
    } else {
      for (let i = 0; i < this.products.length; i++) {
        if (this.products[i].category == category)
          filterByCategoryList.push(this.products[i])
      }
      return filterByCategoryList
    }
  }

  getCategories(group) {
    this.categories = [];
    let filterByGroupList = this.filterByGroupes(group);
    for (let i = 0; i < filterByGroupList.length; i++)
      if (!this.include(filterByGroupList[i].category, this.categories) && filterByGroupList[i].category != "")
        this.categories.push(filterByGroupList[i].category)
    return this.categories;
  }

  getRecentProducts(group) {
    let recentProducts: Product[] = [];
    if (group == "" || group == undefined) {
      for (let i = 0; i < this.recentIds.length; i++)
        recentProducts.push(this.getProduct(this.recentIds[i]));
    }
    else {
      for (let i = 0; i < this.recentIds.length; i++)
        if (this.getProduct(this.recentIds[i]).group == group)
          recentProducts.push(this.getProduct(this.recentIds[i]));
    }
    return recentProducts;
  }
  ////////////////////////////////////////////////////////////////////////////////////////
  //                                       ORDERLIST                                    //
  ////////////////////////////////////////////////////////////////////////////////////////
  addToOrderList(id) {
    if (this.include(id, this.orderList)) {
      return
    }
    else {
      this.orderList.push(id);
      this.orderListChange.next(this.orderList);
    }
  }

  getOrderList() {
    return this.orderList;
  }

  removeFromOrderList(id) {
    this.orderList.splice(id, 1);
    this.orderListChange.next(this.orderList);
  }

  clearOrderList() {
    for (let i = 0; i < this.orderList.length; i++) {
      this.orderList.splice(i, 1);
    }
    this.orderListChange.next(this.orderList);
  }

  ////////////////////////////////////////////////////////////////////////////////////////
  //                                       WISHLIST                                     //
  ////////////////////////////////////////////////////////////////////////////////////////
  addToWishList(id) {
    if (this.getWishList() != undefined || this.getWishList() != null)
      this.wishList = this.getWishList();

    if (this.include(id, this.wishList)) {
      return
    }
    else {
      this.wishList.push(id);
      localStorage.setItem('whislist', JSON.stringify(this.wishList));
      this.wishListChange.next(this.wishList);
    }
  }

  removeFromWishList(id) {
    this.wishList = this.getWishList()
    this.wishList.splice(id, 1);
    localStorage.setItem('whislist', JSON.stringify(this.wishList));
    this.wishListChange.next(this.wishList);
  }

  getWishList() {
    var wishlist = localStorage.getItem('whislist');
    return JSON.parse(wishlist);
  }
}
