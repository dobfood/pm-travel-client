import React, { useState } from 'react';
import './forrm.css';
import { GrClose } from 'react-icons/gr';
import { Formik, useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import http from '~/fetcher/http';
import Swal from 'sweetalert2';
import StorageUtils from '~/utils/storage';
import jwt_decode from 'jwt-decode';
import { useAuth } from '~/hooks/useAuth';

type Props = { tours: any };
const phoneRegExp = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;

const orderSchema = yup.object().shape({
  email: yup
    .string()
    .email('Vui lòng nhập đúng định dạng ex : abc@gmail.com')
    .required('Vui lòng nhập trường này'),
  phone: yup
    .string()
    .required('Vui lòng nhập trường này')
    .matches(phoneRegExp, 'Số điện thoại không hợp lệ'),
  fullName: yup
    .string()
    .required('Vui lòng nhập trường này')
    .min(5, 'Họ và tên ít nhất 5 ký tự')
    .max(20, 'Họ và tên tối đa 20 kí tự'),
  totalPerson: yup.number(),
  // .required('Vui lòng nhập trường này')
  // .min(1, 'Vui lòng không nhập số âm'),
  totalMoney: yup.number()
});
type IFormData = yup.InferType<typeof orderSchema>;
const initialValuesOrder: IFormData = {
  email: '',
  phone: '',
  fullName: '',
  totalPerson: 0,
  totalMoney: 0
};
const Form = (props: Props) => {
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();
  const [person, setPerson] = useState(1);
  const [totalMoney, setTotalMoney] = useState(props.tours.price);
  const handlePersonChange = (event: any) => {
    const value = event.target.value;
    setPerson(value);
    setTotalMoney(value * props.tours.price);
    props.tours.totalMoney = value * props.tours.price + 5000;
  };
  const order = async (values: any, onSubmitProps: any) => {
    try {
      values.totalPerson = Number(person);
      values.totalMoney = totalMoney;
      values.idCustomer = auth._id;
      values.idTour = props.tours._id;
      await http.post('/order', values);
      onSubmitProps.resetForm();
      navigate('/thank');
      Swal.fire({
        icon: 'success',
        title: 'Đặt tour thành công!',
        text: 'Chúc vui vẻ'
      });
    } catch (error) {
      console.log(error);
    }
  };
  const formik = useFormik<IFormData>({
    initialValues: auth ? auth : initialValuesOrder,
    validationSchema: orderSchema,
    onSubmit: (values, onSubmitProps) => {
      if (auth) {
        const decodedToken: any = jwt_decode(auth.accessToken);
        const exp = decodedToken.exp;
        if (exp < new Date().getTime() / 1000) {
          Swal.fire({
            icon: 'warning',
            title: 'Có vẻ phiên đăng nhập hết hạn!',
            text: 'Vui lòng đăng nhập lại'
          });
          StorageUtils.clear();
          setAuth(null);
          navigate('/login');
        }
      }

      if (!auth) {
        Swal.fire({
          icon: 'warning',
          title: 'Có vẻ bạn chưa đăng nhập!',
          text: 'Vui lòng đăng nhập để được đặt tour'
        });
        navigate('/login');
      } else {
        order(values, onSubmitProps);
      }
    }
  });
  return (
    <div className='booking'>
      <div className='booking__top d-flex align-items-center justify-content-between'>
        <h3>
          {props.tours.price.toLocaleString('vi-VN', {
            currency: 'VND'
          })}
          VND <span>/người</span>
        </h3>
        <span className='tour__ratting d-flex align-items-center'></span>
      </div>

      <div className='booking__form'>
        <h5>Thông tin </h5>
        <form onSubmit={formik.handleSubmit}>
          <div className='booking__info-form'>
            <div className='relative'>
              <input
                type='text'
                value={formik.values.fullName}
                placeholder='Họ và tên'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name='fullName'
              />
              {formik.touched.fullName && formik.errors.fullName && (
                <div className='text-xs text-red-500 absolute'>
                  *{formik.errors.fullName}
                </div>
              )}
            </div>
            <div className='mt-4 relative'>
              <input
                type='text'
                value={formik.values.email}
                placeholder='Email'
                name='email'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email && (
                <div className='text-xs text-red-500 absolute'>
                  *{formik.errors.email}
                </div>
              )}
            </div>
            <div className='relative mt-4'>
              <input
                type='text'
                value={formik.values.phone}
                placeholder='Số điện thoại'
                name='phone'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.phone && formik.errors.phone && (
                <div className='text-xs text-red-500 absolute'>
                  *{formik.errors.phone}
                </div>
              )}
            </div>
            <div className='relative mt-4'>
              <input
                onChange={handlePersonChange}
                type='number'
                value={person}
                placeholder='Số lượng người'
                id='totalPerson'
                onBlur={formik.handleBlur}
              />
              {/* {formik.touched.totalPerson && formik.errors.totalPerson && (
                <div className='text-xs text-red-500 absolute'>
                  *{formik.errors.totalPerson}
                </div>
              )} */}
            </div>
          </div>
          <div className='booking__bottom'>
            <div>
              <li className='border-0 px-0'>
                <h5 className='d-flex align-items-center gap-1'>
                  {props.tours.price.toLocaleString('vi-VN', {
                    currency: 'VND'
                  })}{' '}
                  <GrClose style={{ display: 'inline' }} /> {person} người
                </h5>
                <span>
                  {' '}
                  {totalMoney.toLocaleString('vi-VN', {
                    currency: 'VND'
                  })}
                </span>
              </li>
              <li className='border-0 px-0 '>
                <h5>Dịch vụ phụ</h5>
                <span>5.000 VNĐ</span>
              </li>
              <li className='border-0 px-0 total'>
                <h5>Tổng tiền</h5>
                <span>
                  {props.tours.totalMoney
                    ? props.tours.totalMoney.toLocaleString('vi-VN', {
                        currency: 'VND'
                      })
                    : (props.tours.price + 5000).toLocaleString('vi-VN', {
                        currency: 'VND'
                      })}
                  VNĐ
                </span>
              </li>
            </div>
          </div>
          <button
            type='submit'
            className={`btn bg-slate-400 py-3 rounded w-full mb-4 hover:bg-blue-600 text-white ${
              props.tours.maxNumber < person
                ? 'disabled hover:bg-slate-400'
                : ''
            }`}
            disabled={props.tours.maxNumber < person}
          >
            Đặt ngay
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
