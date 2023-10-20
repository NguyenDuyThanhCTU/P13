import DisplayProduct from "@components/client/Product/DisplayProduct";
import React from "react";

const ProductPage = () => {
  return (
    <>
      <div className="w-full h-[35vh] ">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/dora-a85b2.appspot.com/o/UI%2FANH%20BIA.png?alt=media&token=5317cd02-8c2a-41c3-89d1-93f18040a65d"
          alt="banner"
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="w-[1460px] mx-auto">
        <DisplayProduct />
      </div>
    </>
  );
};

export default ProductPage;
