import { Component, OnInit, ViewChild, ElementRef, HostListener, Input } from '@angular/core';

import { Product } from '../../model/product';

@Component({
  selector: 'item-product',
  templateUrl: './item-product.component.html',
  styleUrls: ['./item-product.component.scss']
})
export class ItemProductComponent implements OnInit {
  constructor() { }
  ngOnInit() {
    this.overlay.nativeElement.style.transform = 'scale(0)';
    this.overlay.nativeElement.style.transition = 'all .15s';
  }

  @Input() product: Product;
  @ViewChild('overlay', {static:true}) overlay: ElementRef;

  @HostListener('mouseenter') onMouseenter() {
    this.overlay.nativeElement.style.transform = 'scale(1)';
  }
  
  @HostListener('mouseleave') onMouseleave() {
    this.overlay.nativeElement.style.transform = 'scale(0)';
  }
}
