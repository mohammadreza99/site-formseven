import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { MaterialModule } from '../material.module';
import { PageRoute } from '../page/page.route';


import {
    ItemProductComponent,
    StarRateComponent,
    FilterComponent,
    RecentProductComponent,
    PageHeaderComponent,
    CartProductsComponent,
    CartProductComponent,
    EmptyListComponent,
    LightBoxComponent,
    BreadcrumbComponent,
    AgmComponent,
    PostComponent,
    RecentPostComponent,
} from './';





@NgModule({
    declarations: [
        ItemProductComponent,
        StarRateComponent,
        FilterComponent,
        RecentProductComponent,
        PageHeaderComponent,
        PageHeaderComponent,
        CartProductsComponent,
        CartProductComponent,
        EmptyListComponent,
        LightBoxComponent,
        BreadcrumbComponent,
        AgmComponent,
        PostComponent,
        RecentPostComponent,
    ],
    exports: [
        ItemProductComponent,
        StarRateComponent,
        FilterComponent,
        RecentProductComponent,
        PageHeaderComponent,
        CartProductsComponent,
        CartProductComponent,
        EmptyListComponent,
        LightBoxComponent,
        BreadcrumbComponent,
        AgmComponent,
        PostComponent,
        RecentPostComponent,
        
    ],
    imports: [
        CommonModule,
        BrowserModule,
        MaterialModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule,
        RouterModule.forRoot(PageRoute),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyCllj-TyivvQhqxhAI5Z1276aOfVrugn-w'
        })
    ],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ComponentModule { }