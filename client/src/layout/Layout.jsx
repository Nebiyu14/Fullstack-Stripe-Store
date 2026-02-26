import React, { createContext } from "react";
import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
const cxt = createContext();

function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout;
