import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LowesProductService } from './lowes-product.service';
import { AlertService  } from './alert.service';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

import { AppRoutingModule } from './app-routing';
import { AlertDirective } from './directives/alert.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    ProductDetailComponent,
    AlertDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [LowesProductService, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
