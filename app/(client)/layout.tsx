import Copyright from "@components/layout/client-layout/Copyright";
import Footer from "@components/layout/client-layout/Footer";
import Header from "@components/layout/client-layout/Header";
import Hotline from "@components/layout/client-layout/Hotline";
import MobileFooter from "@components/layout/client-layout/MobileFooter";
import TopFooter from "@components/layout/client-layout/TopFooter";
import { Metadata } from "next";
import React from "react";

type ClientLayoutProps = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "Khóa cửa tự động",
  description: "Khóa cửa tự động",
};

const layout: React.FC<ClientLayoutProps> = ({ children }) => {
  return (
    <div className="relative">
      <Header />
      <div className="p:py-0 d:py-10">{children}</div>
      <TopFooter />
      <Footer />

      <div className="relative z-50">
        {/* <OnTop /> */}
        <Hotline />
      </div>
      <Copyright />
      <div className="w-full d:hidden p:fixed bottom-0">
        <MobileFooter />
      </div>
    </div>
  );
};

export default layout;
