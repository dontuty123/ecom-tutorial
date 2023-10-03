/** @format */

import { Link } from "react-router-dom";
import { ProductType } from "../../types/product.type";

interface PropType {
  product: ProductType;
}

export default function Product({ product }: PropType) {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="overflow-hidden rounded-sm bg-white shadow hover:translate-y-[-0.05rem] hover:shadow-md cursor-pointer">
        <div className="relative w-full pt-[100%]">
          <img
            src={product.img}
            alt={product.name}
            className="absolute top-0 left-0 h-full w-full bg-white object-cover"
          />
        </div>
        <div className="p-2">
          <div className="text-sm line-clamp-2 mb-5">{product.name}</div>
          <div className="justify-between px-1 flex truncate">
            <div className="text-orange">
              <span className="text-xs">₫</span>
              <span className="text-base">{product.price}</span>
            </div>
            <div className="text-gray-400">
              <span className="text-sm">{product.sold}k</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
