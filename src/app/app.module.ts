import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { AgmCoreModule } from '@agm/core';


import { AppComponent } from './app.component';
import { PageModule } from './page';
import { ProductService } from './service/product.service';
import { PostService } from './service/post.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'universal-demo-v5' }),
    BrowserAnimationsModule,
    PageModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxImageZoomModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCllj-TyivvQhqxhAI5Z1276aOfVrugn-w'
    })
  ],
  providers: [ProductService, PostService, Title],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }
