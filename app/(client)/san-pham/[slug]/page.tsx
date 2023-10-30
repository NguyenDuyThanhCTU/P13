import DisplayProduct from "@components/client/Product/DisplayProduct";
import ProductCard from "@components/client/Product/ProductCard";
import { getDataByPaginationProps, getDataByTypeProps } from "@lib/get-data";
import React from "react";

const ProductPage = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  let Data: any = [];

  if (params.slug === "tat-ca") {
    Data = await getDataByPaginationProps("products");
  }
  if (
    searchParams?.func !== undefined ||
    searchParams?.price !== undefined ||
    searchParams?.type !== undefined
  ) {
    if (searchParams?.func) {
      Data = await getDataByTypeProps(
        "products",
        "functionUrl",
        searchParams?.func
      );
    }
    if (searchParams?.price) {
      Data = await getDataByTypeProps(
        "products",
        "priceSegmentUrl",
        searchParams?.price
      );
    }
    if (searchParams?.type) {
      Data = await getDataByTypeProps(
        "products",
        "typeUrl",
        searchParams?.type
      );
    }
    console.log(params.slug, searchParams);
  } else {
    Data = await getDataByTypeProps("products", "parentUrl", params.slug);
  }

  return (
    <>
      <div className="w-full h-[35vh] ">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/dora-a85b2.appspot.com/o/UI%2FANH%20BIA.png?alt=media&token=5317cd02-8c2a-41c3-89d1-93f18040a65d"
          alt="banner"
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="p:w-auto p:mx-2 d:w-[1460px] d:mx-auto">
        <div className="py-5 flex gap-5 d:flex-row p:flex-col">
          <DisplayProduct />
          <div>
            <h1 className="text-[28px] font-semibold font-LexendDeca pb-5">
              {Data.length > 0 ? (
                <>
                  {searchParams === undefined && {}
                    ? `sản phẩm ${Data[0]?.type}`
                    : `sản phẩm ${Data[0]?.parent}`}
                </>
              ) : (
                <>
                  {}
                  {`Không tìm thấy sản phẩm yêu cầu`}
                </>
              )}
            </h1>
            <div className="grid p:grid-cols-2 d:grid-cols-4 gap-2">
              {Data.length > 0 && (
                <>
                  {" "}
                  {Data.map((item: any, idx: number) => (
                    <div key={idx}>
                      <ProductCard Data={item} />
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
