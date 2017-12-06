import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Payload } from './service_objects/index';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class LowesProdctService {

  private target_url = 'https://m.lowes.com/CatalogServices/product/nvalue/v1_0?nValue=4294857975&maxResults=20&showURL=1&rollUpVariants=1&showUrl=true&storeNumber=0595&priceFlag=rangeBalance&showMarketingBullets=1';

  constructor(
    private http: HttpClient
  ) { }

  get_lowes_payload(): Observable<Payload>{
    return this.http.get<Payload>(this.target_url);
  }

}
