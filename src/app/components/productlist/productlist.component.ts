import { Component, OnInit, Input } from '@angular/core';

import { Payload } from '../../service_objects/index';
import { Product } from '../../service_objects/product';
import { LowesProductService } from '../../lowes-product.service';

import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  payload: Payload;
  showstopper: Product;

  constructor(
    private lowesProductService: LowesProductService
  ){}

  ngOnInit(): void {
    this.getPayload();

  }

  getPayload(): void {
    this.lowesProductService.get_lowes_payload()
      .subscribe(payload => {
        this.payload = payload
        this.viewMore(this.payload.productList[0]);
      });
  }

  viewMore(p: Product): void{
    this.showstopper = p;
  }

}
