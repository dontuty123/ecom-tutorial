/** @format */

export interface CartType {
  id: string;
  quantity: number;
  checked?:boolean
  product: {
      id: string;
      img: string;
      category: string;
      name: string;
      desc: string;
      sold: number;
      price: number;
      inStock: number;
  }
}
