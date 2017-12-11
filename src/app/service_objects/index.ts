/**
  This is ODM for the json, I wanted to map all the objects
  in the json because I just like typing ^_^.

  I also don't like to use capitols for file names because unix doesn't use capitols
  in ext3 and because it makes it so much easier to reference file names.
**/

import { ContentMapping } from './content_mapping';
import { Layout } from './layout';
import { RequestParams } from './request_params';
import { Breadcrumb } from './breadcrumb';
import { Refinement } from './refinement';
import { Product } from './product';
import { MarketingZone } from './marketing_zone';
import { Link } from './link';


export class Payload  {
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
