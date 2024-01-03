import About from "@components/client/Home/About";
import HomeDisplay from "@components/client/Home/HomeDisplay";
import Introduction from "@components/client/Home/Introduction";
import Slide from "@components/client/Home/Slide";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Slide />
      <HomeDisplay topic={"Khóa cửa vân tay"} />
      {/* <Introduction /> */}
      <HomeDisplay topic={"Motor cổng tự động"} />
      {/* <About /> */}
    </div>
  );
};

export default HomePage;
