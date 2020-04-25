import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import {
    Main,
    HomePage,
    ProductsPage,
    ProductDetailPage,
    WishlistPage,
    ContactPage,
    ShoppingCartPage,
    NotFoundPage,
    CompleteOrderPage,
    AboutPage,
    CompletePurchasePage,
    ProductGuard,
    RepresentationPage,
    HowToGetSizePage,
    ClothBuyingGuidePage,
    SpecialOffersPage,
    RelatedContentPage,
    MoreInformationPage,
    BlogPage,
    PostDetailPage
} from '.';

export const PageRoute: Routes = [
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: '',
        canActivate: [ProductGuard],
        children:
            [
                {
                    path: '',
                    redirectTo: 'home',
                    pathMatch: 'full'
                },
                {
                    path: 'home',
                    component: HomePage,
                    data: {
                        breadcrumb: '',
                        title: 'سون فرم انواع مانتو فرم اداری،لباس فرم،مانتو اداری،مانتو فرم هواپیمایی،مانتو فرم'
                    },
                },
                {
                    path: 'wishlist',
                    component: WishlistPage,
                    data: {
                        breadcrumb: 'علاقمندی ها',
                        title: 'علاقمندی ها'
                    }
                },
                {
                    path: 'more-information',
                    component: MoreInformationPage,
                    data: {
                        breadcrumb: 'بیشتر بدانید',
                        title: 'بیشتر بدانید'
                    }
                },
                {
                    path: 'contact',
                    component: ContactPage,
                    data: {
                        breadcrumb: 'تماس با ما',
                        title: 'تماس با ما'
                    }
                },
                {
                    path: 'about',
                    component: AboutPage,
                    data: {
                        breadcrumb: 'درباره ما',
                        title: 'درباره ما'
                    }
                },
                {
                    path: 'representation',
                    component: RepresentationPage,
                    data: {
                        breadcrumb: 'اخذ نمایندگی',
                        title: 'اخذ نمایندگی'
                    }
                },
                {
                    path: 'cloth-buying-guid',
                    component: ClothBuyingGuidePage,
                    data: {
                        breadcrumb: 'راهنمای خرید پارچه',
                        title: 'راهنمای خرید پارچه'
                    }
                },
                {
                    path: 'how-to-get-size',
                    component: HowToGetSizePage,
                    data: {
                        breadcrumb: 'نحوه بدست آوردن سایز',
                        title: 'نحوه بدست آوردن سایز'
                    }
                },
                {
                    path: 'related-content',
                    component: RelatedContentPage,
                    data: {
                        breadcrumb: 'مطالب مفید',
                        title: 'مطالب مفید'
                    }
                },
                {
                    path: 'blog',
                    data: {
                        breadcrumb: 'وبلاگ',
                        title: 'وبلاگ سون فرم'
                    },
                    children: [
                        {
                            path: '',
                            component: BlogPage,
                            data: {
                                breadcrumb: '',
                            },
                        },
                        {
                            path: 'details',
                            component: PostDetailPage,
                            data: {
                                breadcrumb: 'توضیحات مقاله',
                                title: 'توضیحات مقاله'
                            },
                        }
                    ]
                },
                {
                    path: 'products',
                    data: {
                        breadcrumb: 'محصولات',
                        title: 'محصولات'
                    },
                    children: [
                        {
                            path: '',
                            component: ProductsPage,
                            data: {
                                breadcrumb: '',
                                title: 'محصولات'
                            },
                        },
                        {
                            path: 'special-offers',
                            component: SpecialOffersPage,
                            data: {
                                breadcrumb: 'پیشنهادات ویژه',
                                title: 'پیشنهادات ویژه'
                            },
                        },
                        {
                            path: 'details',
                            component: ProductDetailPage,
                            data: {
                                breadcrumb: 'توضیحات',
                                title: 'توضیحات محصول'
                            }
                        },
                    ]
                },
                {
                    path: 'shopping-cart',
                    data: {
                        breadcrumb: 'سبد خرید',
                        title: 'سبد خرید'
                    },
                    children: [
                        {
                            path: '',
                            component: ShoppingCartPage,
                            data: {
                                breadcrumb: '',
                                title: 'سبد خرید'
                            },
                        },
                        {
                            path: 'complete-purchase',
                            data: {
                                breadcrumb: 'تکمیل سفارش',
                                title: 'تکمیل سفارش'
                            },
                            children: [
                                {
                                    path: '',
                                    component: CompletePurchasePage,
                                    data: {
                                        breadcrumb: '',
                                        title: 'تکمیل سفارش'
                                    },
                                },
                                {
                                    path: 'complete-order',
                                    component: CompleteOrderPage,
                                    data: {
                                        breadcrumb: 'تکمیل خرید',
                                        title: 'تکمیل خرید'
                                    }
                                },
                            ]
                        },
                    ]
                },
            ]
    },
    {
        path: 'not-found',
        component: NotFoundPage,
        data: {
            title: 'صفحه مورد نظر شما یافت نشد'
        }
    },
    {
        path: '**',
        redirectTo: 'not-found'
    },
]
export const routing: ModuleWithProviders = RouterModule.forRoot(PageRoute);