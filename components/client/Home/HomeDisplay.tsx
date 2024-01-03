"use client";
import { useData } from "@context/DataProviders";
import React from "react";
import ProductCard from "../Product/ProductCard";

const HomeDisplay = ({ topic }: any) => {
  const { Products } = useData();

  return (
    <>
      <div className=" flex flex-col items-center p:w-auto p:mx-2 d:w-[1460px] d:mx-auto py-5   ">
        <h2 className="text-[32px] font-LexendDeca font-normal py-3">
          {topic}
        </h2>
        <div className="grid p:grid-cols-2 d:grid-cols-5 gap-2">
          {Products.filter((item: any) => item.parent === topic).map(
            (item: any, idx: number) => (
              <div key={idx}>
                <ProductCard Data={item} />
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default HomeDisplay;
