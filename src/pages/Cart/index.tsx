/** @format */

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "src/redux/store";
import { deleteMany, removeFromCart, updateCart } from "src/redux/cart.slice";
import { CartType } from "src/types/cart.type";
import { useEffect, useMemo, useState } from "react";
import { formatCurrency } from "src/utils/utils";

export default function Cart() {
  const carts = useSelector((state: RootState) => state.cartReducer.cart);
  const [cartList, setCartList] = useState<CartType[]>([
    {
      id: "",
      product: {
        category: "",
        desc: "",
        id: "",
        img: "",
        inStock: 0,
        name: "",
        price: 0,
        sold: 0,
      },
      quantity: 0,
      checked: false,
    },
  ]);
  const dispatch = useDispatch();

  useEffect(() => {
    setCartList(carts);
  }, [carts]);

  const handleRemoveFromCart = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const countTotalPrice = () => {
    let totalPrice = 0;
    for (const item of carts) {
      totalPrice += item.quantity * item.product.price;
    }
    return totalPrice;
  };

  //loại bỏ kí tự khác số
  const restrictToNumbers = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.value = event.target.value.replace(/[^0-9]/g, "");
  };

  const handleInputPlus = (purchase: CartType) => {
    let quantity = purchase.quantity + 1;
    if (purchase.quantity > purchase.product.inStock) {
      quantity = purchase.product.inStock;
    }
    const newPurchase = {
      ...purchase,
      quantity: quantity,
    };
    dispatch(updateCart(newPurchase));
  };

  const handleInputMinus = (purchase: CartType) => {
    let quantity = purchase.quantity - 1;
    if (purchase.quantity < 0) {
      quantity = 0;
    }
    const newPurchase = {
      ...purchase,
      quantity: quantity,
    };
    dispatch(updateCart(newPurchase));
  };

  const handleInput =
    (id: string) =>
    ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      const curPurchaseIndex = cartList.findIndex(
        (item) => item.product.id == id
      );

      const newCartList = cartList.map((element, index) => {
        let newValue = Number(target.value);
        if (newValue > element.product.inStock) {
          newValue = element.product.inStock;
        }
        if (newValue < 0) {
          newValue = 0;
        }
        if (curPurchaseIndex === index) {
          dispatch(updateCart({ ...element, quantity: newValue }));
          return { ...element, quantity: newValue };
        } else {
          return element;
        }
      });
      setCartList(newCartList as CartType[]);
    };

  const handleChecked = (id: string) => {
    const curPurchaseIndex = cartList.findIndex((item) => item.id == id);
    const newCartList = cartList.map((element, index) => {
      if (curPurchaseIndex === index) {
        dispatch(updateCart({ ...element, checked: !element.checked }));
        return { ...element, quantity: !element.checked };
      } else {
        return element;
      }
    });
    setCartList(newCartList as CartType[]);
  };

  const isAllChecked = useMemo(
    () => cartList.every((item) => item.checked == true),
    [cartList]
  );

  const handleAllChecked = () => {
    setCartList((prev) =>
      prev.map((item) => ({
        ...item,
        checked: !isAllChecked,
      }))
    );
  };

  const handleDeleteMany = () => {
    const checkedPurchase = cartList.filter((item) => !item.checked == true);
    dispatch(deleteMany(checkedPurchase));
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="container">
        <div className="overflow-auto">
          <div className="min-w-[1000px]">
            <div className="grid grid-cols-12 rounded-sm bg-white py-5 px-9 text-sm capitalize text-gray-500 shadow">
              <div className="col-span-6">
                <div className="flex items-center">
                  <div className="flex flex-shrink-0 items-center justify-center pr-3">
                    <input
                      type="checkbox"
                      className="h-5 w-5 accent-orange"
                      checked={isAllChecked ? true : false}
                      onChange={handleAllChecked}
                    />
                  </div>
                  <div className="flex-grow text-black">Sản phẩm</div>
                </div>
              </div>
              <div className="col-span-6">
                <div className="grid grid-cols-5 text-center">
                  <div className="col-span-2">Đơn giá</div>
                  <div className="col-span-1">Số lượng</div>
                  <div className="col-span-1">Số tiền</div>
                  <div className="col-span-1">Thao tác</div>
                </div>
              </div>
            </div>
            <div className="my-3 rounded-sm bg-white p-5 shadow">
              {cartList?.map((purchase) => (
                <div
                  key={purchase.id}
                  className="mb-5 grid grid-cols-12 rounded-sm border border-gray-200 bg-white py-5 px-4 text-center text-sm text-gray-500 first:mt-0"
                >
                  <div className="col-span-6">
                    <div className="flex">
                      <div className="flex flex-shrink-0 items-center justify-center pr-3">
                        <input
                          type="checkbox"
                          className="h-5 w-5 accent-orange"
                          checked={purchase?.checked || false}
                          onChange={() => handleChecked(purchase.id)}
                        />
                      </div>
                      <div className="flex-grow">
                        <div className="flex">
                          <Link
                            className="h-20 w-20 flex-shrink-0 overflow-hidden"
                            to={`/product/${purchase.id}`}
                          >
                            <img
                              alt={purchase?.product?.name}
                              src={purchase?.product?.img}
                            />
                          </Link>
                          <div className="flex-grow px-2 pt-1 pb-2">
                            <Link
                              to={`/product/${purchase.id}`}
                              className="line-clamp-2"
                            >
                              {purchase?.product?.name}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-6">
                    <div className="grid grid-cols-5 items-center">
                      <div className="col-span-2">
                        <div className="flex items-center justify-center">
                          <span className="ml-3">
                            ₫{formatCurrency(purchase?.product?.price)}
                          </span>
                        </div>
                      </div>
                      <div className="col-span-1">
                        <div className="flex">
                          <button
                            className="bg-white border px-[6px] py-[1px]"
                            onClick={() => handleInputMinus(purchase)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-3 h-6 text-black"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 12h-15"
                              />
                            </svg>
                          </button>
                          <input
                            role="input_number"
                            type="text"
                            className="border border-l-0 border-r-0 text-center w-[40%] focus:border-transparent"
                            placeholder="1"
                            onInput={(event) =>
                              restrictToNumbers(
                                event as React.ChangeEvent<HTMLInputElement>
                              )
                            }
                            value={purchase.quantity}
                            onChange={handleInput(
                              purchase?.product?.id as string
                            )}
                          />
                          <button
                            className="bg-white border px-[6px] py-[1px]"
                            onClick={() => handleInputPlus(purchase)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-3 h-6 text-black"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 4.5v15m7.5-7.5h-15"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className="col-span-1">
                        <span className="text-orange">
                          ₫
                          {formatCurrency(
                            purchase?.product?.price * purchase.quantity
                          )}
                        </span>
                      </div>
                      <div className="col-span-1">
                        <button
                          role="del-item"
                          className="bg-none text-black transition-colors hover:text-orange"
                          onClick={() => handleRemoveFromCart(purchase.id)}
                        >
                          Xóa
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="sticky bottom-0 z-10 mt-8 flex flex-col rounded-sm border border-gray-100 bg-white p-5 shadow sm:flex-row sm:items-center">
          <div className="flex items-center">
            <div className="flex flex-shrink-0 items-center justify-center pr-3">
              <input
                type="checkbox"
                className="h-5 w-5 accent-orange"
                checked={isAllChecked ? true : false}
                onChange={handleAllChecked}
              />
            </div>
            <button className="mx-3 border-none bg-none">Chọn tất cả</button>
            <button
              className="mx-3 border-none bg-none"
              onClick={handleDeleteMany}
            >
              Xóa
            </button>
          </div>

          <div className="mt-5 flex flex-col sm:ml-auto sm:mt-0 sm:flex-row sm:items-center">
            <div>
              <div className="flex items-center sm:justify-end">
                <div>Tổng thanh toán ({carts.length} sản phẩm):</div>
                <div className="ml-2 text-2xl text-orange">
                  ₫{formatCurrency(countTotalPrice())}
                </div>
              </div>
              <div className="flex items-center text-sm sm:justify-end">
                <div className="text-gray-500">Tiết kiệm</div>
                <div className="ml-6 text-orange">₫</div>
              </div>
            </div>
            <button className="mt-5 flex h-10 w-52 items-center justify-center bg-red-500 text-sm uppercase text-white hover:bg-red-600 sm:ml-4 sm:mt-0">
              Mua hàng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
