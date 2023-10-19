"use client";
import { HeaderItems } from "@assets/item";
import Link from "next/link";
import React from "react";
import {
  AiOutlineDown,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";

const Header = () => {
  const SupportItems = [
    {
      label: "Hướng dẫn sử dụng",
      value: "huong-dan-su-dung",
    },
    {
      label: "Catalogue sản phẩm",
      value: "catalogue-san-pham",
    },
  ];
  return (
    <div className="shadow-xl">
      <div className="bg-blue-400 py-1 h-[30px]w-full text-white text-[14px] flex justify-center items-center">
        Miễn phí vận chuyển với đơn hàng trên 1.000.000
      </div>
      <div className="w-[1300px] mx-auto">
        <div className=" w-full py-5   flex justify-between items-center ">
          <div></div>
          <div className="">
            <img
              src="https://file.hstatic.net/200000235187/file/logohome_b583c2c7d30b40f68d0d0450c6d7243d.jpg"
              alt="logo"
            />
          </div>
          <div className="text-[30px] flex gap-2">
            <AiOutlineSearch />
            <AiOutlineShoppingCart />
          </div>
        </div>
        <div className="flex  gap-8 w-full justify-center font-LexendDeca font-extralight">
          {HeaderItems.map((item: any, idx: number) => (
            <div className="relative group" key={idx}>
              <Link
                className="hover:text-blue-400 duration-300 flex items-center gap-2"
                href={`/${item.link}`}
              >
                <p> {item.name}</p>
                {item.name === "Hỗ trợ" && (
                  <AiOutlineDown className="text-[10px] group-hover:rotate-180 duration-300" />
                )}
              </Link>
              <div className="h-[2px] bg-gray-400 w-0 group-hover:w-full duration-300 mt-3 "></div>
              {item.name === "Hỗ trợ" && (
                <div className="flex flex-col top-5 absolute">
                  <div className="bg-none w-full h-4"></div>
                  <div className=" top-9 hidden group-hover:block duration-300">
                    <div className=" flex flex-col bg-white shadow-md border-t-2 border-gray-500 ">
                      {SupportItems.map((items: any, idx: number) => (
                        <Link
                          key={idx}
                          href={`/bai-viet/${items.value}`}
                          className="w-max  border-b"
                        >
                          <p className="py-2 px-2 hover:text-blue-400 duration-300">
                            {" "}
                            {items.label}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
