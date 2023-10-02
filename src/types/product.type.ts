/** @format */

export interface ProductType {
  id: string;
  img: string[];
  category: string;
  name: string;
  desc: string;
  sold: number;
  review: {
    avatar: string;
    username: string;
    message: string;
  }[];
  price: number;
  inStock: number;
}
