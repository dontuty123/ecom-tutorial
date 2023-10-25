/** @format */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { postData } from "src/mockdata/post";
import { addToCart } from "src/redux/cart.slice";
import { addPost } from "src/redux/post.slice";
import { RootState } from "src/redux/store";
import { CartType } from "src/types/cart.type";
import { ProductType } from "src/types/product.type";
import { formatCurrency } from "./../../utils/utils";
import InputNumber from "src/components/InputNumber";
import { PostType } from "src/types/post.type";
import classNames from "classnames";

export default function ProductDetail() {
  const [reviewTitle, setReviewTitle] = useState("");
  const [reviewContent, setReviewContent] = useState("");
  const [inputNumber, setInputNumber] = useState(1);
  const [disable, setDisable] = useState(false);

  const [product, setProduct] = useState<ProductType>({
    id: "",
    img: "",
    category: "",
    name: "",
    desc: "",
    sold: 0,
    price: 0,
    inStock: 0,
  });
  const products = useSelector(
    (state: RootState) => state.productReducer.products
  );
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const curProduct = products.find((item) => item.id === id);
    setProduct(curProduct as ProductType);
  }, []);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    var inStock = Number(event.target.value);
    if (inStock < 0) {
      inStock = 0;
    }
    if (inStock > (product?.inStock as number)) {
      inStock = product?.inStock as number;
    }
    setInputNumber(inStock);
  };

  const handleAddToCart = () => {
    toast.dismiss();

    if (inputNumber == 0) {
      toast.warn("Vui lòng nhập số lượng sản phẩm cần mua");
    } else {
      const addProduct: CartType = {
        id: product?.id,
        quantity: inputNumber,
        product: {
          img: product?.img,
          name: product?.name,
          price: product?.price,
          category: product?.category,
          desc: product?.desc,
          id: product?.id,
          inStock: product?.inStock,
          sold: product?.sold,
        },
      };
      toast.success("Đã thêm sản phẩm vào giỏ hàng thành công");
      dispatch(addToCart(addProduct));
      setDisable(true);
      setTimeout(() => {
        setDisable(false);
      }, 1500);
    }
    toast.clearWaitingQueue();
  };

  const handleBuyNow = () => {
    toast.dismiss();
    if (inputNumber == 0) {
      toast.warn("Vui lòng nhập số lượng sản phẩm cần mua");
    } else {
      const addProduct: CartType = {
        id: product?.id,
        quantity: inputNumber,
        product: {
          img: product?.img,
          name: product?.name,
          price: product?.price,
          category: product?.category,
          desc: product?.desc,
          id: product?.id,
          inStock: product?.inStock,
          sold: product?.sold,
        },
      };
      toast.success("Đã thêm sản phẩm vào giỏ hàng thành công");
      dispatch(addToCart(addProduct));
      navigate("/cart");
    }
    toast.clearWaitingQueue();
  };

  //handle Review
  const handleReviewTitleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setReviewTitle(event.target.value);
  };

  const handleReviewContentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setReviewContent(event.target.value);
  };

  const handleSubmitReview = () => {
    const newId = postData?.length + 1;
    const publishPost = {
      id: newId.toString(),
      productId: product?.id,
      category: product?.category,
      name: reviewTitle,
      review: reviewContent,
      img: product?.img,
    };
    if (reviewTitle == "" && reviewContent == "") {
      toast.dark("Vui lòng điền đầy đủ thông tin");
      setDisable(true);
      setTimeout(() => {
        setDisable(false);
      }, 1500);
      toast.clearWaitingQueue();
    } else {
      dispatch(addPost(publishPost as PostType));
      toast.success("Đã thêm review thành công");
      toast.clearWaitingQueue();
      setReviewTitle("");
      setReviewContent("");
    }
  };

  return (
    <div className="bg-gray-100 py-6">
      <div className="bg-white p-4">
        <div className="container">
          <div className="grid grid-cols-12 gap-4 mb-7">
            <div className="col-span-5">
              <div className="relative pt-[100%] w-full shadow">
                <img
                  className="absolute top-0 left-0 w-full h-full bg-white object-cover"
                  src={product?.img}
                  alt={product?.name}
                />
              </div>
            </div>
            <div className="col-span-7 pl-4">
              <div className="text-black text-[24px] mt-2">{product?.name}</div>
              <div className="flex mt-2 justify-between px-5">
                <span className="text-gray-500 text-base">
                  {product?.sold}k đã bán
                </span>
                <span className="text-gray-400 text-sm">Tố cáo</span>
              </div>
              <div className="px-5 py-4 text-orange">
                <span className="text-[24px]">₫</span>
                <span className="text-[32px]">
                  {formatCurrency(product?.price as number)}
                </span>
              </div>
              <div className="pt-4 grid grid-cols-8 px-5 text-gray-600">
                <span className="col-span-2 text-base">Số lượng</span>
                <div className="col-span-6 flex">
                  <InputNumber
                    handleInput={handleInput}
                    inputNumber={inputNumber}
                    limit={product?.inStock as number}
                    setInputNumber={setInputNumber}
                  />
                  <div className="col-span-1 text-sm">
                    {product.inStock} sản phẩm có sẵn
                  </div>
                </div>
              </div>
              <div className="px-5 py-4 flex mt-8">
                <button
                  disabled={disable}
                  role="addToCart"
                  className={classNames(
                    "border border-[#d0011b] bg-[rgba(208,1,27,.08)] flex p-3 rounded-sm cursor-pointer",
                    {
                      "!cursor-not-allowed": disable,
                    }
                  )}
                  onClick={handleAddToCart}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.4"
                    stroke="currentColor"
                    className="w-6 h-6 text-[#d0011b] mr-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>

                  <span className="text-[#d0011b]">Thêm vào giỏ hàng</span>
                </button>
                <button
                  className="bg-[#D0011B] text-white px-10 py-3 ml-5 cursor-pointer"
                  onClick={handleBuyNow}
                >
                  Mua ngay
                </button>
                <Link to={`/post/product/${product?.id}`}>
                  <button className="bg-[#D0011B] text-white px-10 py-3 ml-5 cursor-pointer">
                    Xem Review
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <span className="text-[24px] mb-7">Thông tin chi tiết</span>
          <div className="mt-10 bg-white text-sm w-[80%]">{product?.desc}</div>
          <div className="mt-7">
            <span className="text-xl mb-3 block">Đánh giá sản phẩm</span>
            <input
              type="text"
              role="danhgia"
              placeholder="Tiêu đề bài đánh giá"
              onChange={handleReviewTitleChange}
              value={reviewTitle}
              className="w-full border p-2 rounded-md mb-3"
            />
            <textarea
              rows={4}
              placeholder="Nội dung bài đánh giá"
              value={reviewContent}
              onChange={handleReviewContentChange}
              className="w-full border p-2 rounded-md"
            />
            <button
              disabled={disable}
              role="submitReview"
              className={classNames(
                "bg-[#D0011B] text-white px-10 py-3 mt-3 cursor-pointer",
                {
                  "!cursor-not-allowed": disable,
                }
              )}
              onClick={handleSubmitReview}
            >
              Đăng đánh giá
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
