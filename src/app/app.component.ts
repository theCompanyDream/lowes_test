import { Component, OnInit } from '@angular/core';

import { LowesProductService } from './lowes-product.service';
import { Payload } from './service_objects/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  payload: Payload;

  constructor(
    private lowesProductService: LowesProductService
  ){}

  ngOnInit(): void {
    this.getPayload();
  }

  getPayload(): void {
    this.lowesProductService.get_lowes_payload()
      .subscribe(payload => this.payload = payload);
  }

}
