'use client'

import { toast } from 'react-toastify';
import { useContext } from "react";

import { useRouter } from 'next/navigation';
import { signInUser, signUpUser, sendResetPassword, verifyEmailUser } from "@/services/auth";
import { Context, ProviderProps } from '../_features/Auth/context';
import { MODE_AUTH } from '../_features/Auth/types';

interface IFieldForm {
 name: string,
 email: string,
 password: string,
 address: string,
}

const useAuth = () => {
  const { push } = useRouter()
  const { setMode } = useContext(Context) as ProviderProps;

  const signIn = (values: IFieldForm) => {
   const  { email, password } = values
   signInUser(email, password).then(() => {
    push('/home')
    toast.success('Đăng nhập thành công')
   }).catch((err) => {
    let mess = ''
    switch (err.code) {
      case "auth/wrong-password":
        mess = "Password sai";
        break;

      case "auth/user-not-found":
        mess = "Người dùng không tồn tại";
        break;

      case "auth/internal-error":
        mess = "Hệ thống xác thực lỗi"
        break;

      case "auth/invalid-email":
        mess = "Lỗi email"
        break;

      default:
        mess = "Hệ thống lỗi"
        break;
    }

    toast.error(mess)
   })
  }

  const signUp = async (values: IFieldForm) => {
    const  { email, password } = values

    try {
      await signUpUser(email, password)
      await verifyEmailUser()
      toast.success('Đăng ký thành công')

      push('/auth')
    } catch (error: any) {
      let mess = ''
      switch (error.code) {
        case "auth/invalid-email":
        case "auth/email-already-in-use":
          mess = "Email không tồn tại"
          break
        case "auth/internal-error":
          mess = "Hệ thống lỗi"
          break
        default:
          mess = "Đã xảy ra lỗi"
          break
      }

      toast.error(mess)
    }
  }

  const resetPassword = (email: string) => {
    sendResetPassword(email).then(() => {
      setMode(MODE_AUTH.SIGN_IN)
      toast.success('Bạn vui lòng vào mail để xác nhận !')
    }).catch((err) => {
      toast.error('Error')
    })
  }

  return {
   signIn,
   signUp,
   resetPassword
  }
}

export { useAuth }