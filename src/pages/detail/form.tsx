import React, { useState } from 'react';
import { BsStar } from 'react-icons/bs';
import './forrm.css';
import { GrClose } from 'react-icons/gr';
type Props = { tours: any };

const Form = (props: Props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [person, setPerson] = useState(1);
  const [totalMoney, setTotalMoney] = useState(props.tours.price);

  const handlePersonChange = (event: any) => {
    const value = event.target.value;
    setPerson(value);
    setTotalMoney(value * props.tours.price);
    props.tours.totalMoney = value * props.tours.price + 5000;
  };

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
        <form className='booking__info-form'>
          <div>
            <input type='text' placeholder='Họ và tên' id='fullname' />
          </div>
          <div>
            <input type='text' placeholder='Email' id='email' />
          </div>
          <div>
            <input type='text' placeholder='Số điện thoại' id='phone' />
          </div>
          <div>
            <input
              onChange={handlePersonChange}
              type='number'
              value={person}
              placeholder='Số lượng người'
              id='totalPerson'
            />
          </div>
        </form>
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
            <button className='btn bg-slate-400 py-3 rounded w-full mb-4 hover:bg-blue-600 text-white'>
              Đặt ngay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
