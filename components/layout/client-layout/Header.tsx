"use client";
import { HeaderItems, TypeProductItems } from "@assets/item";
import { useData } from "@context/DataProviders";
import { Drawer } from "antd";
import Link from "next/link";
import React from "react";
import {
  AiFillCaretRight,
  AiOutlineDown,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { FaListUl } from "react-icons/fa";

const Header = () => {
  const { productTypes } = useData();
  const [open, setOpen] = React.useState(false);
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
      <div className="bg-blue-400 py-1 h-[30px] w-full text-white text-[14px] flex justify-center items-center">
        Miễn phí vận chuyển với đơn hàng trên 1.000.000
      </div>
      <div className="w-[1300px] mx-auto d:block p:hidden">
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
            <div className="relative group/main " key={idx}>
              <Link
                className="hover:text-blue-400 duration-300 flex items-center gap-2 font-light"
                href={`/${item.link}`}
              >
                <p> {item.name}</p>
                {(item.name === "Hỗ trợ" ||
                  item.name === "Danh mục sản phẩm") && (
                  <AiOutlineDown className="text-[10px] group-hover/main:rotate-180 duration-300" />
                )}
              </Link>
              <div className="h-[2px] bg-gray-400 w-0 group-hover/main:w-full duration-300 mt-3 "></div>
              {item.name === "Hỗ trợ" && (
                <div className="flex flex-col top-5 absolute">
                  <div className="bg-none w-full h-4"></div>
                  <div className=" top-9 hidden group-hover/main:block duration-300">
                    <div className=" flex flex-col bg-white shadow-md border-t-2 border-gray-500 ">
                      {SupportItems.map((items: any, idx: number) => (
                        <Link
                          key={idx}
                          href={`/bai-viet/${items.value}`}
                          className="w-max  border-b"
                        >
                          <p className="py-2 px-2 hover:text-blue-400 duration-300 ">
                            {" "}
                            {items.label}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {item.name === "Danh mục sản phẩm" && (
                <div className="flex flex-col top-5 absolute z-50">
                  <div className="bg-none w-full h-4"></div>
                  <div className=" top-9 hidden group-hover/main:block duration-300">
                    <div className=" flex flex-col bg-white shadow-md border-t-2 border-gray-500 ">
                      {TypeProductItems.map((items: any, idx: number) => {
                        const sort = productTypes.filter(
                          (item: any) => item.parentUrl === items.value
                        );

                        return (
                          <div
                            key={idx}
                            className=" group/lv1 relative  border-b"
                          >
                            <Link
                              href={`/san-pham/${items.value}`}
                              className="  border-b"
                            >
                              <div className="py-2 px-4 hover:text-blue-400 duration-300  font-light flex items-center justify-between w-full">
                                {" "}
                                <p className="w-max"> {items.label}</p>
                                {sort.length > 0 && (
                                  <AiFillCaretRight
                                    className={` rotate-90 group-hover/lv1:rotate-0 duration-500 `}
                                  />
                                )}
                              </div>
                            </Link>

                            {sort.length > 0 && (
                              <div className="hidden group-hover/lv1:block absolute top-0 left-full mt-0 w-max bg-mainred  shadow-lg">
                                <div className="">
                                  {sort.map((items: any, idx: number) => (
                                    <div key={idx}>
                                      <div className=" group/lv2    relative font-light     border-b">
                                        <Link
                                          href={`${`/san-pham/${items.typeUrl}`}`}
                                        >
                                          <div className="py-2 px-4 hover:text-blue-400 duration-300  bg-white font-light flex items-center justify-between w-full">
                                            <p>{items.type}</p>
                                          </div>
                                        </Link>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="d:hidden p:block w-full   ">
        <div className="flex justify-between px-2 items-center">
          <div className="">
            <img
              src="https://file.hstatic.net/200000235187/file/logohome_b583c2c7d30b40f68d0d0450c6d7243d.jpg"
              alt="logo"
            />
          </div>
          <div className="flex">
            <div className="border p-1 border-black">
              <FaListUl
                className="text-[22px] text-black"
                onClick={() => setOpen(true)}
              />
            </div>
          </div>
        </div>
      </div>
      <>
        <Drawer
          placement="left"
          onClose={() => setOpen(false)}
          closable={false}
          open={open}
          bodyStyle={{ backgroundColor: "#2e3192" }}
        >
          <div className="bg-[#2e3192] text-white uppercase font-bold">
            <div className="flex flex-col gap-3" onClick={() => setOpen(false)}>
              {HeaderItems.map((items: any, idx: any) => (
                <Link
                  className=" hover:text-mainorange"
                  href={`/${items.link}`}
                  key={idx}
                >
                  {items.name}
                </Link>
              ))}
            </div>
            {/* <div
              className="flex flex-col gap-3 text-[14px] mt-10"
              onClick={() => setOpen(false)}
            >
              {mainHeaderItems.map((items: any, idx: any) => (
                <Link
                  className=" hover:text-mainorange"
                  href={`/${items.link}`}
                  key={idx}
                >
                  {items.name}
                </Link>
              ))}
            </div> */}
            <div
              className="flex justify-center mt-5"
              onClick={() => setOpen(false)}
            >
              <Link href={`/lien-he`}>
                <div className="px-10 py-1 rounded-full border">Liên hệ</div>
              </Link>
            </div>
          </div>
        </Drawer>
      </>
    </div>
  );
};

export default Header;
