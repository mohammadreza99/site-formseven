
import {filter} from 'rxjs/operators';
import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList, OnDestroy, DoCheck, HostListener } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router, NavigationEnd } from '@angular/router';
import { MatExpansionPanel } from '@angular/material/expansion';
import { Subscription } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';

import { ProductService } from '../../service/product.service';
import { BreadcrumbComponent } from '../../component';

@Component({
  selector: 'main',
  templateUrl: './main.html',
  styleUrls: ['./main.scss'],
  providers: [MediaMatcher]
})
export class Main implements OnInit, OnDestroy, DoCheck {
  matExpansions: MatExpansionPanel[] = [];
  matSidenavs: MatSidenav[] = [];
  favoriteCount: number = 0;
  shopCartCount: number = 0;
  mainMenuStatus: boolean = false;
  otherMenuStatus: boolean = false;
  panelOpenState1: boolean = false;
  panelOpenState2: boolean = false;
  showBreadcrumb: boolean = false;
  mainIsOpened: boolean = true;
  otherIsOpened: boolean = true;
  isSmallSize: boolean = false;
  wishListSubscription: Subscription;
  orderListSubscription: Subscription;
  src: string[] = [];
  groups: string[] = [
    'مانتو فرم اداری',
    'کت و شلوار فرم اداری',
    'تیشرت',
    'فرم بیمارستانی و پرستاری',
    'کفش',
    'فرم مدارس'
  ];
  @ViewChild('favoriteBadge', {static:true}) favoriteBadge: ElementRef;
  @ViewChild('shopCartBadge', {static:true}) shopCartBadge: ElementRef;
  @ViewChildren(MatSidenav) matSidenav: QueryList<MatSidenav>;
  @ViewChildren(MatExpansionPanel) matExpansion: QueryList<MatExpansionPanel>;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth <= 575) {
      this.isSmallSize = true;
    }
    else {
      this.isSmallSize = false;
    }
  }

  @HostListener('click', ['$event'])
  onClick(event) {
    if (this.matSidenavs[0].opened)
      this.matSidenavs[0].close();

    if (this.matSidenavs[1].opened)
      this.matSidenavs[1].close();
  }

  constructor(
    private productService: ProductService,
    private router: Router) { }

  onMouseenter(index) {
    this.src[index] = this.groups[index] + '-2';
  }

  onMouseleave(index) {
    this.src[index] = this.groups[index] + '-1';
  }

  ngDoCheck() {
    if (this.router.url == '/' || this.router.url == '/home' || this.router.url == '/not-found') {
      this.showBreadcrumb = false;
    } else {
      this.showBreadcrumb = true;
    }
  }

  ngOnInit() {
    this.shopCartBadge.nativeElement.style.display = 'none';

    if (this.favoriteCount == 0)
      this.favoriteBadge.nativeElement.style.display = 'none';
    else
      this.favoriteBadge.nativeElement.style.display = 'inline-block';

    this.wishListSubscription = this.productService.wishListChange.subscribe((wishlist: Array<string>) => {
      this.favoriteCount = wishlist.length;
      if (this.favoriteCount == 0)
        this.favoriteBadge.nativeElement.style.display = 'none';
      else
        this.favoriteBadge.nativeElement.style.display = 'inline-block';
    })

    this.orderListSubscription = this.productService.orderListChange.subscribe((orderlist: Array<string>) => {
      console.log('shopclick');
      
      this.shopCartCount = orderlist.length;
      if (this.shopCartCount == 0)
        this.shopCartBadge.nativeElement.style.display = 'none';
      else
        this.shopCartBadge.nativeElement.style.display = 'inline-block';
    });

    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(event => {
      const contentContainer = document.querySelector('.mat-sidenav-content') || window;
      contentContainer.scrollTo(0, 0);
    });
    for (let i = 0; i < this.groups.length; i++)
      this.src[i] = this.groups[i] + '-1';
  }

  ngAfterViewInit() {
    if (this.productService.getWishList() == null || this.productService.getWishList() == undefined || this.productService.getWishList().length == 0) {
      this.favoriteCount = 0;
    }
    else {
      this.favoriteCount = this.productService.getWishList().length
    }
    this.productService.wishListChange.subscribe((wishlist) => {
      console.log(wishlist);
    });
    if (this.favoriteCount == 0)
      this.favoriteBadge.nativeElement.style.display = 'none';
    else
      this.favoriteBadge.nativeElement.style.display = 'inline-block';

    this.matExpansions = this.matExpansion.toArray();
    this.matSidenavs = this.matSidenav.toArray();
  }

  ngOnDestroy() {
    this.wishListSubscription.unsubscribe();
    this.orderListSubscription.unsubscribe();
  }

  onMainClosedStart() {
    for (let i = 0; i < this.matExpansions.length; i++)
      this.matExpansions[i].expanded = false
    this.mainMenuStatus = false;
  }

  onOtherClosedStart() {
    for (let i = 0; i < this.matExpansions.length; i++)
      this.matExpansions[i].expanded = false
    this.otherMenuStatus = false;
  }

  onMainOpenedStart() {
    this.mainMenuStatus = true;
    this.mainIsOpened = true;
    this.otherMenuStatus = false;
  }

  onOtherOpenedStart() {
    this.otherMenuStatus = true;
    this.otherIsOpened = true;
    this.mainMenuStatus = false;
  }
}