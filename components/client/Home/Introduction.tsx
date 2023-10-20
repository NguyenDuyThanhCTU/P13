import Link from "next/link";
import React from "react";

const Introduction = () => {
  return (
    <div className="grid grid-cols-3 gap-1">
      <Link href={`/san-pham/tat-ca`} className="overflow-hidden">
        <img
          src="https://file.hstatic.net/200000235187/file/22_daeb5cca957f4e20a122d91b22f3d514.jpg"
          alt="intro1"
          className="hover:scale-125 duration-1000"
        />
      </Link>
      <Link href={`/san-pham/tat-ca`} className="overflow-hidden">
        <img
          src="https://file.hstatic.net/200000235187/file/11_198c731a6c8a4452b60dbbf49258498e.jpg"
          alt="intro2"
          className="hover:scale-125 duration-1000"
        />
      </Link>
      <Link href={`/san-pham/tat-ca`} className="overflow-hidden">
        <img
          src="https://file.hstatic.net/200000235187/file/33_81b96f4741834062a4641fc952169a7b.jpg"
          alt="intro3"
          className="hover:scale-125 duration-1000"
        />
      </Link>
    </div>
  );
};

export default Introduction;
