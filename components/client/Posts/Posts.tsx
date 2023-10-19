"use client";
import { useData } from "@context/DataProviders";
import { useParams, usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Posts = () => {
  const [Data, setData] = useState<any>();
  const { Posts } = useData();
  const params = useParams();

  useEffect(() => {
    const sort = Posts.filter((items: any) => items.url === params.slug);

    if (sort) {
      setData(sort[0]);
    }
  }, [Posts, params.slug]);

  return (
    <div className="font-LexendDeca font-extralight ">
      <h1 className="text-[28px] font-semibold">{Data?.title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: Data?.content }}
        className="mt-5"
      ></div>
    </div>
  );
};

export default Posts;
