"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import Link from "next/link";
import { useData } from "@context/DataProviders";

const Slide = () => {
  const { Slides } = useData();
  const slide1Items = [
    {
      image:
        "https://file.hstatic.net/200000235187/file/z2126928028791_fd19211008030465b019d6b0806e90e2_5bb911b246fe4633927a63219db1eb73.jpg",
    },
    {
      image:
        "https://file.hstatic.net/200000235187/file/z2129753517162_256e8e80a333c67e4883b940a2fcb53f_75d80e2b73ab4de6b4fce5c4afd43b2b.jpg",
    },
    {
      image:
        "https://file.hstatic.net/200000235187/file/z2129753517162_256e8e80a333c67e4883b940a2fcb53f_75d80e2b73ab4de6b4fce5c4afd43b2b.jpg",
    },
  ];

  const slide2Items = [
    {
      image:
        "https://file.hstatic.net/200000235187/file/hinh1_6ff50d70f26d44b1af9b0279dabc79b1.jpg",
    },
    {
      image:
        "https://file.hstatic.net/200000235187/file/hinh2_aba267c255af42ed8993878b22cbbbb6.jpg",
    },
    {
      image:
        "https://file.hstatic.net/200000235187/file/hinh3_eac19098ba7e474b953f03a3fda70237.jpg",
    },
    {
      image:
        "https://file.hstatic.net/200000235187/file/hinh4_3fb47bf8459c4835a6037d423828ed3b.jpg",
    },
    {
      image:
        "https://file.hstatic.net/200000235187/file/hinh5_9c8ffb198d304978b03e870b607f7b65.jpg",
    },
    {
      image:
        "https://file.hstatic.net/200000235187/file/hinh1_6ff50d70f26d44b1af9b0279dabc79b1.jpg",
    },
  ];
  return (
    <div>
      <Swiper
        loop={true}
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={1}
        slidesPerGroup={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {Slides.map((item: any, idx: number) => (
          <Link href={`/san-pham/tat-ca`} key={idx}>
            <SwiperSlide>
              <div className="w-full flex justify-center">
                <img
                  src={item.image}
                  alt="slide"
                  className="p:h-auto d:h-[70vh] object-contain"
                />
              </div>
            </SwiperSlide>
          </Link>
        ))}
      </Swiper>
      <Swiper
        loop={true}
        centeredSlides={true}
        slidesPerView={3}
        slidesPerGroup={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {slide2Items.map((item: any, idx: number) => (
          <Link href={`/san-pham/tat-ca`} key={idx}>
            <SwiperSlide>
              <img src={item.image} alt="slide" />
            </SwiperSlide>
          </Link>
        ))}
      </Swiper>
    </div>
  );
};

export default Slide;
