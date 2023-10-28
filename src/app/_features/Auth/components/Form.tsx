'use client'
import { useContext } from "react"
import Input from "@/app/_components/Input"
import { Formik, Form } from "formik"
import { ToastContainer } from 'react-toastify';
import { SecurityOptions } from "./SecurityOptions"
import Submit from "@/app/_components/Button/index"
import { Context, ProviderProps } from "../context"
import { MODE_AUTH } from "../types"
import ErrorField from "@/app/_components/Error";
import { useValidation } from "@/app/_hooks/useValidation";
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from "@/app/_hooks/useAuth";

export const FormAuth = () => {
 const { mode } = useContext(Context) as ProviderProps;
 const validationSchema = useValidation(mode);
 const { signIn, signUp, resetPassword } = useAuth()

 return (
  <>
   <Formik
    initialValues={{
     name: '',
     email: '',
     password: '',
     address: '',
    }}
    validationSchema={validationSchema}
    onSubmit={(values, { resetForm }) => {
     if (mode === MODE_AUTH.SIGN_UP) {
      signUp(values)
     } else if (mode === MODE_AUTH.FORGOT_PASSWORD) {
      resetPassword(values.email)
     } else {
      signIn(values)
     }

     resetForm();
    }}
   >
    {({ errors, touched, handleChange, values }) => (
     <Form>
      {mode === MODE_AUTH.SIGN_UP ?
       <>
        <Input
         id='name'
         value={values.name}
         name="name"
         placeHolder='Họ và tên của bạn'
         title="Họ và tên"
         onChange={handleChange}
        />
        <ErrorField touched={touched.name} error={errors.name} />
       </>
       : null}
      <>
       <Input
        id='email'
        value={values.email}
        name='email'
        title="Email"
        placeHolder='Nhập email của bạn'
        onChange={handleChange}
       />
       <ErrorField touched={touched.email} error={errors.email} />
      </>
      <>
       {mode !== MODE_AUTH.FORGOT_PASSWORD ? <div className='mt-2'>
        <Input
         id='password'
         value={values.password}
         name='password'
         title="Mật khẩu"
         placeHolder="Nhập mật khẩu của bạn"
         onChange={handleChange}
         isPassword={true}
        />
        <ErrorField touched={touched.password} error={errors.password} />
       </div> : null}
      </>
      <>
       {mode === MODE_AUTH.SIGN_UP ? <div className='mt-2'>
        <Input
         id='address'
         value={values.address}
         name='address'
         title="Địa chỉ"
         placeHolder="Nhập địa chỉ của bạn ở đây"
         onChange={handleChange}
        />
        <ErrorField touched={touched.address} error={errors.address} />
       </div> : null}
      </>
      <div className="sm:mb-[20px] mt-2 mb-8">
       <SecurityOptions />
      </div>
      <Submit
       type="submit"
       label={mode === MODE_AUTH.FORGOT_PASSWORD ? 'Tìm tài khoản của bạn' : mode === MODE_AUTH.SIGN_UP ? 'Đăng ký' : 'Đăng nhập'}
      />
     </Form>
    )}
   </Formik>
   <ToastContainer />
  </>
 )
}