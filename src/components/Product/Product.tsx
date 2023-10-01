/** @format */

export default function Product() {
  return (
    <div className="overflow-hidden rounded-sm bg-white shadow hover:translate-y-[-0.05rem] hover:shadow-md cursor-pointer">
      <div className="relative w-full pt-[100%]">
        <img
          src="https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/455359/item/goods_75_455359.jpg?width=750"
          alt="product"
          className="absolute top-0 left-0 h-full w-full bg-white object-cover"
        />
      </div>
      <div className="p-2">
        <div className="text-sm line-clamp-2 mb-5">
          Áo nam màu nâu cá tính Áo nam màu nâu cá tính Áo nam màu nâu cá tính
        </div>
        <div className="justify-between px-1 flex">
          <div className="text-orange">
            <span className="text-xs">₫</span>
            <span className="text-base">20.000</span>
          </div>
          <div className="text-gray-400">
            <span className="text-sm">đã bán 1k</span>
          </div>
        </div>
      </div>
    </div>
  );
}
