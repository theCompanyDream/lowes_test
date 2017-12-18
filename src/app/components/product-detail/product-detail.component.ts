import { Component, OnInit, Input } from '@angular/core';

import { Product } from '../../service_objects/product';
import { AlertService } from '../../alert.service';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() product: Product;

  constructor(private alerts: AlertService) { }

  ngOnInit() {
  }

  success() {
    this.alerts.info("$"+this.product.networkPrice);
  }

}
