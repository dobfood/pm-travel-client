import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import http from '~/fetcher/http';
import Swal from 'sweetalert2';
const phoneRegExp = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
const contactSchema = yup.object().shape({
  phone: yup
    .string()
    .required('Vui lòng nhập trường này')
    .matches(phoneRegExp, 'Số điện thoại không hợp lệ'),
  fullName: yup
    .string()
    .required('Vui lòng nhập trường này')
    .min(5, 'Họ và tên ít nhất 5 ký tự')
    .max(20, 'Họ và tên tối đa 20 kí tự'),
  content: yup.string().required('Vui lòng nhập trường này')
});
type IFormData = yup.InferType<typeof contactSchema>;
const initialValuesContact: IFormData = {
  phone: '',
  fullName: '',
  content: ''
};
const Form = () => {
  const contact = async (values: any, onSubmitProps: any) => {
    try {
      await http.post('/contact', values);
      onSubmitProps.resetForm();
      Swal.fire({
        icon: 'success',
        title: 'Gửi thành công!',
        text: 'Cảm ơn bạn đã liên hệ với chúng tôi , chúng tôi sẽ phản hồi cho bạn sớm nhất có thể.'
      });
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik<IFormData>({
    initialValues: initialValuesContact,
    validationSchema: contactSchema,
    onSubmit: (values, onSubmitProps) => {
      contact(values, onSubmitProps);
    }
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className='w-full max-w-lg'>
        <h2 className='text-5xl font-bold mb-8 text-[#ffffff]'>
          Liên hệ với chúng tôi
        </h2>

        <div className='flex flex-wrap -mx-3 mb-6'>
          <div className='w-full px-3 mb-6 md:mb-0'>
            <span className='block uppercase tracking-wide text-xs font-bold mb-2'>
              Họ và tên
            </span>
            <input
              className='appearance-none block w-full bg-[#ffffff] text-[#1db8e7] border border-gray-200 rounded py-3 px-4 mb-3 leading-tight'
              type='text'
              name='fullName'
              placeholder='Nhập họ và tên của bạn'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.fullName}
            />
            {formik.touched.fullName && formik.errors.fullName && (
              <div className='text-md text-red-500 absolute'>
                *{formik.errors.fullName}
              </div>
            )}
          </div>
        </div>
        <div className='flex flex-wrap -mx-3 mb-6'>
          <div className='w-full px-3 mb-6 md:mb-0'>
            <span className='block uppercase tracking-wide text-xs font-bold mb-2'>
              Phone
            </span>
            <input
              className='appearance-none block w-full bg-[#ffffff] text-[#1db8e7] border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              type='text'
              name='phone'
              placeholder='Nhập số điện thoại của bạn'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
            />
            {formik.touched.phone && formik.errors.phone && (
              <div className='text-md text-red-500 absolute'>
                *{formik.errors.phone}
              </div>
            )}
          </div>
        </div>
        <div className='flex flex-wrap -mx-3 mb-6'>
          <div className='w-full px-3 mb-6 md:mb-0'>
            <span className='block uppercase tracking-wide text-xs font-bold mb-2'>
              Nội dung tin nhắn
            </span>
            <textarea
              className='appearance-none block w-full  bg-[#ffffff] text-[#1db8e7] border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none'
              name='content'
              placeholder='Nhập nội dung tin nhắn của bạn'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.content}
            ></textarea>
            {formik.touched.content && formik.errors.content && (
              <div className='text-md text-red-500 absolute'>
                *{formik.errors.content}
              </div>
            )}
          </div>
        </div>
        <div className='flex items-end justify-end'>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-md'
            type='submit'
          >
            Gửi ngay
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
