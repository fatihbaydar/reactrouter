import React from "react";
import { Navigate, Outlet } from "react-router";

const PrivateRouter = () => {
  return JSON.parse(localStorage.getItem("EMAIL")) === "ahmet" ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRouter;

// kullanici doğru  isim girdiyse Outlet komponenti sayesinde istenilen sayfaya git,yanlışlık varsa Navigate ile bulunduğun yerde (Home) kal ya da başka path veriledebilir
