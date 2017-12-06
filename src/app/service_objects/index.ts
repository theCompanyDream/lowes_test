/**
  This is where the sub service models come to roost ^_^
**/

import { ContentMapping } from './content_mapping';
import { Layout } from './layout';
import { RequestParams } from './request.params';
import { Breadcrumb } from './breadcrumb';
import { Refinement } from './refinement';
import { Product } from './product';
import { MarketingZone } from './refinement';
import { Link } from './link';
import { Layout } from './layout';


export class Payload{
  productCount: number;
  breadcrumbs: Breadcrumb[];
  categories: string[];
  selectedRefinements: Refinement[];
  productList: Product[];
  marketingZones: MarketingZone;
  links: Link[];
  layout: Layout;
  jvmName: string;
  requestParams: RequestParams;
}
