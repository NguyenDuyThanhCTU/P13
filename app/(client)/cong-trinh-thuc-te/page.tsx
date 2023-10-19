import { getDataByTypeProps } from "@lib/get-data";
import moment from "moment";
import Link from "next/link";
import React from "react";

const NewsPage = async () => {
  const Data = await getDataByTypeProps("posts", "url", "cong-trinh-thuc-te");

  return (
    <>
      <div className="border h-max border-gray-400 col-span-2">
        <div className="p-3 ">
          <h2 className="text-[20px] uppercase text-center pb-2 border-b border-black">
            Bài viết mới nhất
          </h2>
          <div className="flex flex-col gap-2 text-[15px] mt-2">
            {Data.map((item: any, idx: number) => {
              const DetailPostDate = moment
                .unix(item?.createdAt.seconds)
                .format("MMMM DD, YYYY");
              return (
                <Link
                  href={`/du-an-thuc-te/${item.topicurl}`}
                  key={idx}
                  className="py-2 border-b"
                >
                  <div className="grid grid-cols-3 gap-5">
                    <div className="w-full overflow-hidden">
                      <img
                        src={item.image}
                        alt="news"
                        className="w-full h-full hover:scale-110 duration-300"
                      />
                    </div>
                    <div className="col-span-2">
                      <h2 className="font-light text-[15px] hover:underline">
                        {item.topic}
                      </h2>
                      <p className="text[14px] text-gray-400">
                        {DetailPostDate}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className="col-span-5">
        <div className="font-LexendDeca font-extralight ">
          <h1 className="text-[28px] font-semibold">Dự án thực tế</h1>
          <div className="flex flex-col gap-8">
            {Data.map((item: any, idx: number) => {
              const DetailPostDate = moment
                .unix(item?.createdAt.seconds)
                .format("MMMM DD, YYYY");
              return (
                <Link
                  href={`/du-an-thuc-te/${item.topicurl}`}
                  key={idx}
                  className="hover:bg-gray-100 duration-300"
                >
                  <div className="grid grid-cols-3 gap-5 p-2">
                    <div className="w-full overflow-hidden">
                      <img
                        src={item.image}
                        alt="news"
                        className="w-full h-full hover:scale-110 duration-300"
                      />
                    </div>
                    <div className="col-span-2">
                      <h2 className="font-normal">{item.topic}</h2>
                      <p className="text[15px] text-gray-400">
                        {DetailPostDate}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsPage;
