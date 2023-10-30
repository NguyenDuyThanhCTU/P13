"use client";
import { ProductFunctionType, ProductPriceItems } from "@assets/item";
import { useData } from "@context/DataProviders";
import { Checkbox, Radio } from "antd";
import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import ShopCart from "@components/items/client-items/ShopCart";
import { useStateProvider } from "@context/StateProvider";

const DisplayProduct = () => {
  const [ProductFunction, setProductFunction] = React.useState<any>("");
  const [ProductPrice, setProductPrice] = React.useState<any>("");
  const params = useParams();

  const router = useRouter();
  const { OpenCart } = useStateProvider();

  const HandleSort = (value: any, topic: string) => {
    if (topic === "function") {
      setProductFunction(value);
      router.push(`/san-pham/${params.slug}?func=${ProductFunction}`);
    } else {
      setProductPrice(value);
      router.push(`/san-pham/${params.slug}?price=${ProductPrice}`);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-10 font-LexendDeca">
        <div>
          <h2 className="text-[20px] font-normal uppercase">Chức năng</h2>

          <Radio.Group
            onChange={(e) => HandleSort(e.target.value, "function")}
            value={ProductFunction}
            className="flex flex-col mt-3 font-normal text-gray-400 gap-1"
          >
            {ProductFunctionType.map((item: any, idx) => (
              <Radio key={idx} value={item.value}>
                {item.label}
              </Radio>
            ))}
          </Radio.Group>
        </div>

        <div>
          <h2 className="text-[20px] font-normal">GIÁ SẢN PHẨM</h2>

          <Radio.Group
            onChange={(e) => HandleSort(e.target.value, "price")}
            value={ProductPrice}
            className="flex flex-col mt-3 font-normal text-gray-400 gap-1"
          >
            {ProductPriceItems.map((item: any, idx) => (
              <Radio key={idx} value={item.value}>
                {item.label}
              </Radio>
            ))}
          </Radio.Group>
        </div>
      </div>

      <div
        className={`fixed bottom-36 right-[-300px] ${
          OpenCart ? " z-50" : "z-0"
        }`}
      >
        <ShopCart />
      </div>
    </>
  );
};

export default DisplayProduct;
