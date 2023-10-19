import React from "react";

const NewsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="w-[1300px] mx-auto grid grid-cols-7 font-LexendDeca font-extralight gap-10">
        {children}
      </div>
    </>
  );
};

export default NewsLayout;
