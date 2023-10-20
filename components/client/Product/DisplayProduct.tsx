"use client";
import { ProductFunctionType, ProductPriceItems } from "@assets/item";
import { useData } from "@context/DataProviders";
import { Checkbox } from "antd";
import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import { useParams } from "next/navigation";

const DisplayProduct = () => {
  const [ProductFunction, setProductFunction] = React.useState<any>("");
  const [ProductPrice, setProductPrice] = React.useState<any>("");
  const [ProductSort, setProductSort] = React.useState<any>([]);
  const { Products } = useData();
  const params = useParams();

  useEffect(() => {
    if (params.slug === "tat-ca") {
      setProductSort(Products);
    } else {
      const sort = Products?.filter(
        (item: any) => item.parentUrl === params.slug
      );
      if (sort) {
        setProductSort(sort);
      }
    }
  }, [Products, params, ProductFunction, ProductPrice]);

  return (
    <div className="py-5 flex gap-5 d:flex-row p:flex-col">
      <div className="flex flex-col gap-10 font-LexendDeca">
        <div>
          <h2 className="text-[20px] font-normal uppercase">Chức năng</h2>
          <div className="flex flex-col mt-3 font-normal text-gray-400 gap-1">
            {ProductFunctionType.map((item: any, idx) => (
              <Checkbox
                key={idx}
                onChange={(e) => setProductFunction(e.target.value)}
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
                onChange={(e) => setProductPrice(e.target.value)}
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
          {params.slug === "tat-ca"
            ? "Tất cả sản phẩm"
            : ProductSort[0]?.parent}
        </h1>
        <div className="grid p:grid-cols-2 d:grid-cols-4 gap-2">
          {ProductSort.map((item: any, idx: number) => (
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
