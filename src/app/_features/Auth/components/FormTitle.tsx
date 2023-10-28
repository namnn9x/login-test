'use client'

import { useContext } from "react";
import { Context, ProviderProps } from "../context";
import { MODE_AUTH } from "../types";

const FormTitle = () => {
 const { mode } = useContext(Context) as ProviderProps;
 const title = () => {
  switch (mode) {
   case MODE_AUTH.FORGOT_PASSWORD:
    return 'Tìm tài khoản'
   case MODE_AUTH.SIGN_UP:
    return 'Đăng ký'
   default:
    return 'Đăng nhập';
  }
 }
 return (
  <div className='sm:pb-0 pb-[19px]'>
   <div className="md:text-center sm:text-center text-3xl font-semibold mb-1 text-[#353558]" >{title()}</div>
   <div className="md:text-center sm:text-center text-[#9ca1aa] text-[14px] font-medium" >Cùng xây dựng một hồ sơ nổi bật và nhận được các cơ hội sự nghiệp lý tưởng</div>
  </div>
 )
}

export default FormTitle