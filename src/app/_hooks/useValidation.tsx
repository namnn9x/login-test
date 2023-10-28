import { useMemo } from 'react';
import * as Yup from 'yup';
import { MODE_AUTH } from '../_features/Auth/types';

const useValidation = (mode: string) => {
  const schema = useMemo(() => {
    return Yup.object().shape({
      name: Yup.string().when([], {
        is: () => mode === MODE_AUTH.SIGN_UP ? true : false,
        then: Yup.string().required('Vui lòng nhập họ và tên của bạn'),
      }),
      email: Yup.string()
        .email('Không đúng định dạng email')
        .required('Vui lòng nhập địa chỉ email của bạn'),
      password: Yup.string().when([], {
        is: () => mode !== MODE_AUTH.FORGOT_PASSWORD ? true : false,
        then: Yup.string()
          .required('Vui lòng nhập mật khẩu của bạn.')
          .min(8, 'Mật khẩu quá ngắn - tối thiểu phải có 8 ký tự.')
          .matches(/[a-zA-Z]/, 'Mật khẩu chỉ có thể chứa các chữ cái Latinh.'),
      }),
      address: Yup.string().when([], {
        is: () => mode === MODE_AUTH.SIGN_UP ? true : false,
        then: Yup.string().required('Vui lòng nhập địa chỉ của bạn'),
      }),
    });
  }, [mode]);

  return schema;
};

export { useValidation }
