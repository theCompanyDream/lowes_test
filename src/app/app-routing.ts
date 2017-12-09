import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductlistComponent } from './components/productlist/productlist.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: 'detail/:id', component: ProductDetailComponent},
  {path: '', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{

}
