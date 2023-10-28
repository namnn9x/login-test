'use client'

import CheckBox from "@/app/_components/Checkbox"
import { useContext } from "react";
import { Context, ProviderProps } from "../context";
import { MODE_AUTH } from "../types";

export const SecurityOptions = () => {
 const { setMode } = useContext(Context) as ProviderProps;

 return (
  <div className='flex justify-between items-center'>
   <div>
    <CheckBox
     label="Duy trì đăng nhập"
    />
   </div>
   <p className='text-xs text-[#fa9387] font-semibold cursor-pointer' onClick={() => setMode(MODE_AUTH.FORGOT_PASSWORD)} >
    Quên mật khẩu?
   </p>
  </div>
 )
}