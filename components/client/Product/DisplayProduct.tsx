"use client";
import { ProductFunctionType, ProductPriceItems } from "@assets/item";
import { useData } from "@context/DataProviders";
import { Checkbox } from "antd";
import React from "react";
import ProductCard from "./ProductCard";

const DisplayProduct = () => {
  const { Products } = useData();
  console.log(Products);
  return (
    <div className="py-5 flex gap-5">
      <div className="flex flex-col gap-10 font-LexendDeca">
        <div>
          <h2 className="text-[20px] font-normal uppercase">Chức năng</h2>
          <div className="flex flex-col mt-3 font-normal text-gray-400 gap-1">
            {ProductFunctionType.map((item: any, idx) => (
              <Checkbox
                key={idx}
                onChange={(e) => console.log(e.target.value)}
                value={item.label}
              >
                {item.label}
              </Checkbox>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-[20px] font-normal">GIÁ SẢN PHẨM</h2>
          <div className="flex flex-col mt-3 font-normal text-gray-400 gap-1">
            {ProductPriceItems.map((item: any, idx) => (
              <Checkbox
                key={idx}
                onChange={(e) => console.log(e.target.value)}
                value={item.label}
              >
                {item.label}
              </Checkbox>
            ))}
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-[28px] font-semibold font-LexendDeca pb-5">
          Tất cả sản phẩm
        </h1>
        <div className="grid grid-cols-4 gap-2">
          {Products.map((item: any, idx: number) => (
            <div key={idx}>
              <ProductCard Data={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DisplayProduct;
