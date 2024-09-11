import React from 'react'
import { Navigate, Outlet } from 'react-router'

const PrivateRouter = () => {
    const email = "ahmet"
    const password = "1234"
  return email ==="" && password=== "1234" ? (<Outlet/>) : (<Navigate to="/"/>)
}

export default PrivateRouter

  // kullanici doğru  isim girdiyse Outlet komponenti sayesinde istenilen sayfaya git,yanlışlık varsa Navigate ile bulunduğun yerde (Home) kal ya da başka path veriledebilir