import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { MaterialModule } from '../material.module';
import { ComponentModule } from '../component';
import { PageRoute } from './page.route';
import {
    Main,
    HomePage,
    ProductsPage,
    ProductDetailPage,
    WishlistPage,
    ContactPage,
    ShoppingCartPage,
    NotFoundPage,
    WrongPromoCodeComponent,
    CorrectPromoCodeComponent,
    AddToWishlistComponent,
    AddToCartComponent,
    CompleteOrderPage,
    AboutPage,
    CompletePurchasePage,
    ProductGuard,
    RepresentationPage,
    ClothBuyingGuidePage,
    HowToGetSizePage,
    SubmitComponent,
    SpecialOffersPage,
    RelatedContentPage,
    MoreInformationPage,
    BlogPage,
    PostDetailPage
   
} from './';









@NgModule({
    declarations: [
        Main,
        HomePage,
        ProductsPage,
        ProductDetailPage,
        WishlistPage,
        ContactPage,
        ShoppingCartPage,
        NotFoundPage,
        WrongPromoCodeComponent,
        CorrectPromoCodeComponent,
        AddToWishlistComponent,
        AddToCartComponent,
        CompleteOrderPage,
        AboutPage,
        CompletePurchasePage,
        RepresentationPage,
        RepresentationPage,
        ClothBuyingGuidePage,
        HowToGetSizePage,
        SubmitComponent,
        SpecialOffersPage,
        RelatedContentPage,
        MoreInformationPage,
        BlogPage,
        PostDetailPage
    ],
    exports: [
        Main,
        HomePage,
        ProductsPage,
        ProductDetailPage,
        WishlistPage,
        ContactPage,
        ShoppingCartPage,
        NotFoundPage,
        WrongPromoCodeComponent,
        CorrectPromoCodeComponent,
        AddToWishlistComponent,
        AddToCartComponent,
        CompleteOrderPage,
        AboutPage,
        CompletePurchasePage,
        RepresentationPage,
        ClothBuyingGuidePage,
        HowToGetSizePage,
        SubmitComponent,
        SpecialOffersPage,
        RelatedContentPage,
        MoreInformationPage,
        BlogPage,
        PostDetailPage
    ],
    imports: [
        CommonModule,
        BrowserModule,
        ComponentModule,
        RouterModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(PageRoute,{useHash:true}),
        NgxImageZoomModule,
    ],
    entryComponents: [
        ShoppingCartPage,
        ProductDetailPage,
        WrongPromoCodeComponent,
        CorrectPromoCodeComponent,
        AddToWishlistComponent,
        AddToCartComponent,
        SubmitComponent,
        RepresentationPage
    ],
    providers: [ProductGuard],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class PageModule { }