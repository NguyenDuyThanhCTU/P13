"use client";
import { useData } from "@context/DataProviders";
import React from "react";

const Contact = () => {
  const { ContactData } = useData();
  return (
    <div>
      <div className="w-[1600px] mx-auto grid grid-cols-2 font-LexendDeca font-extralight">
        <div className="h-screen">
          <iframe src={ContactData.location}></iframe>
        </div>
        <div className="">
          <div className="flex flex-col gap-5">
            <h1 className="text-[26px] font-bold">Liên hệ</h1>
            <div className="w-10 h-1 bg-black"></div>
          </div>

          <div className="mt-5 flex flex-col gap-5">
            <div>
              <h2>Địa chỉ chúng tôi</h2>
              <p className="font-semibold">{ContactData.address}</p>
            </div>
            <div>
              <h2>Email chúng tôi</h2>
              <p className="font-semibold">{ContactData.gmail}</p>
            </div>
            <div>
              <h2>Điện thoại</h2>
              <p className="font-semibold">{ContactData.phone}</p>
            </div>
            <div>
              <h2>Thời gian làm việc</h2>
              <p className="font-semibold">{ContactData.worktime}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
