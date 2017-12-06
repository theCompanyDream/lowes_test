import { Link } from './link';
import { Price } from './price';
import { ImageUrls } from './image_urls';

export class Product{
  networkPrice: number;
  marketingBullets: string[];
  brand: string;
  productId: number;
  description: string;
  imageUrls: ImageUrls;
  type: string;
  mulQuantity: number;
  minQuantity: number;
  disclaimer: string;
  buyable: number;
  published: number;
  energyStar: boolean;
  lowesExclusive: boolean;
  freeshipping: boolean;
  links: Link[];
  url: string;
  hasVariants: boolean;
  additionalBadges: string[];
  leadCapture: boolean;
}
