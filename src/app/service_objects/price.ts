import { Available } from './available';
import { PriceIND } from './price_ind';

export class Price {
  productId: number;
  isSosVendorDirect: false;
  availability: Available[];
  type: string;
}
