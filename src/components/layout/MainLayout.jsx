import React from "react";
import Header from "../Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex">
      <div>
        <Header />
      </div>
      <div className="ml-75 bg-white z-10 rounded-l-4xl p-2 !h-[100%] w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
