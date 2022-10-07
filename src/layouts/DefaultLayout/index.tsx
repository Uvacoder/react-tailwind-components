import Sidebar from "@/components/Sidebar";
import React from "react";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <div id="detail">
      {/* <Sidebar /> */}
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
