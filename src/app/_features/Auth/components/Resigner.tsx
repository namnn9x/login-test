import { useContext } from "react";
import { Context, ProviderProps } from "../context";
import { MODE_AUTH } from "../types";

export const Resigner = () => {
 const { setMode } = useContext(Context) as ProviderProps;

 return (
  <div className='flex justify-center'>
   <p className='text-xs mr-3 text-[#9fa5ad]'>Chưa có tài khoản ?</p>
   <p className="text-xs text-[#fa9387] font-semibold cursor-pointer" onClick={() => setMode(MODE_AUTH.SIGN_UP)}>Đăng ký</p>
  </div>
 )
}

