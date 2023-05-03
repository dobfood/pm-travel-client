import React, { useState } from 'react';
import { BsEyeSlash, BsEye } from 'react-icons/bs';
import login from '~/assets/login.jpg';
import { Link, useNavigate } from 'react-router-dom';
import http from '~/fetcher/http';
import * as yup from 'yup';
import { useFormik } from 'formik';
import Swal from 'sweetalert2';
const phoneRegExp = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
const passwordRegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).*$/;
const registerSchema = yup.object().shape({
  email: yup
    .string()
    .email('Vui lòng nhập đúng định dạng ex : abc@gmail.com')
    .required('Vui lòng nhập trường này'),
  password: yup
    .string()
    .required('Vui lòng nhập trường này')
    .matches(
      passwordRegExp,
      'Mật khẩu phải chứa ít nhất 1 chữ thường, 1 chữ hoa, 1 số và 1 ký tự đặc biệt'
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), undefined], 'Mật khẩu xác nhận không khớp'),
  phone: yup
    .string()
    .required('Vui lòng nhập trường này')
    .matches(phoneRegExp, 'Số điện thoại không hợp lệ'),
  fullName: yup
    .string()
    .required('Vui lòng nhập trường này')
    .min(5, 'Họ và tên ít nhất 5 ký tự')
    .max(20, 'Họ và tên tối đa 20 kí tự')
});
type IFormData = yup.InferType<typeof registerSchema>;
const initialValuesRegister: IFormData = {
  email: '',
  password: '',
  phone: '',
  fullName: '',
  confirmPassword: ''
};
const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  const register = async (values: any, onSubmitProps: any) => {
    try {
      await http.post('/auth/signup', values);
      onSubmitProps.resetForm();
      navigate('/login');
      Swal.fire({
        icon: 'success',
        title: 'Đăng ký thành công!',
        text: 'Hãy đăng nhập để truy cập vào tài khoản của bạn.'
      });
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik<IFormData>({
    initialValues: initialValuesRegister,
    validationSchema: registerSchema,
    onSubmit: (values, onSubmitProps) => {
      register(values, onSubmitProps);
    }
  });

  return (
    <section
      className='bg-white min-h-screen flex items-center justify-center'
      style={{
        backgroundImage: `url(${login})`
      }}
    >
      <div className='bg-white flex rounded-2xl shadow-lg max-w-3xl p-5 '>
        <div className='w-1/2 p-5 rounded-xl'>
          <img className='sm:block hidden rounded-2xl' src={login} alt='ád' />
        </div>
        <div className='md:w-1/2 px-16'>
          <h2
            className='font-bold text-2xl text-[#002D74]
          '
          >
            Đăng ký
          </h2>
          <p className='text-sm mt-4 text-[#002D74'>
            Nếu bạn chưa có tài khoảng đăng ký ngay
          </p>

          <form onSubmit={formik.handleSubmit} className='flex flex-col gap-4'>
            <div className=''>
              <input
                className='p-2 mt-8 rounded-xl border w-full mb-2'
                type='text'
                name='fullName'
                placeholder='Họ và tên'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fullName}
              />
              {formik.touched.fullName && formik.errors.fullName && (
                <div className='text-xs text-red-500 absolute'>
                  *{formik.errors.fullName}
                </div>
              )}
            </div>
            <div>
              <input
                className='p-2 rounded-xl border w-full mb-2'
                type='text'
                name='email'
                placeholder='Email'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email && (
                <div className='text-xs text-red-500 absolute'>
                  *{formik.errors.email}
                </div>
              )}
            </div>
            <div className='relative'>
              <input
                className='p-2 rounded-xl border w-full mb-2'
                type={showPassword ? 'text' : 'password'}
                name='password'
                placeholder='Mật khẩu'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              <div onClick={togglePassword}>
                {showPassword ? (
                  <BsEye className='absolute top-1/2 right-3 -translate-y-1/2' />
                ) : (
                  <BsEyeSlash className='absolute top-1/2 right-3 -translate-y-1/2' />
                )}
              </div>
              {formik.touched.password && formik.errors.password && (
                <div className='text-xs text-red-500 absolute'>
                  *{formik.errors.password}
                </div>
              )}
            </div>
            <div className='relative'>
              <input
                className='p-2 rounded-xl border w-full mb-2  mt-4'
                type={showPassword ? 'text' : 'password'}
                name='confirmPassword'
                placeholder='Nhập lại mật khẩu'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
              />
              <div onClick={togglePassword}>
                {showPassword ? (
                  <BsEye className='absolute top-1/2 right-3 -translate-y-1/2' />
                ) : (
                  <BsEyeSlash className='absolute top-1/2 right-3 -translate-y-1/2' />
                )}
              </div>
              {formik.touched.confirmPassword &&
                formik.errors.confirmPassword && (
                  <div className='text-xs text-red-500 absolute'>
                    *{formik.errors.confirmPassword}
                  </div>
                )}
            </div>
            <div>
              <input
                className='p-2 mt-4 rounded-xl border w-full mb-2'
                type='text'
                name='phone'
                placeholder='Số điện thoại'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
              />
              {formik.touched.phone && formik.errors.phone && (
                <div className='text-xs text-red-500 absolute'>
                  *{formik.errors.phone}
                </div>
              )}
            </div>
            <button className=' mt-2 bg-[#002D74] rounded-xl text-white py-2 hover:scale-110 duration-300'>
              Đăng ký
            </button>
          </form>

          <div className='mt-10 grid grid-cols-3 items-center text-gray-100'>
            <hr className='border-gray-400' />
            <p className='text-center text-sm'>Hoặc</p>
            <hr className='border-gray-400' />
          </div>
          <div className='mt-3 text-xs flex justify-between items-center text-[#002D74]'>
            <p>Đã có tài khoảng ? </p>
            <button className='py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300'>
              <Link to='/login'>Đăng nhập</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
