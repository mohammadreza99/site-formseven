
import {of as observableOf,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';


import { ProductService } from '../../service/product.service';
import { map } from 'rxjs/operators';

@Injectable()
export class ProductGuard implements CanActivate {
    constructor(private productService: ProductService) { }
    canActivate(): Observable<boolean> {
        if (!this.productService.isLoaded)
            return this.productService.loadProducts().pipe(map(() => true));
        else return observableOf(true);
    }
}