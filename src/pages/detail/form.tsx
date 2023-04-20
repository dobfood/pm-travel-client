import React, { useState } from 'react';
import { BsStar } from 'react-icons/bs';
import './forrm.css';
import { GrClose } from 'react-icons/gr';
type Props = {};

const Form = (props: Props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [person, setPerson] = useState(1);
  const [totalMoney, setTotalMoney] = useState(100);

  const handlePersonChange = (event: any) => {
    const value = event.target.value;
    setPerson(value);
    setTotalMoney(100 * value);
  };
  return (
    <div className='booking'>
      <div className='booking__top d-flex align-items-center justify-content-between'>
        <h3>
          100.000VND <span>/người</span>
        </h3>
        <span className='tour__ratting d-flex align-items-center'></span>
      </div>

      <div className='booking__form'>
        <h5>Thông tin </h5>
        <form className='booking__info-form'>
          <div>
            <input type='text' placeholder='fullname' id='name' />
          </div>
          <div>
            <input type='text' placeholder='email' id='name' />
          </div>
          <div>
            <input type='text' placeholder='phone' id='name' />
          </div>
          <div className='d-flex align-items-center gap-3'>
            <input type='date' placeholder='bookat' id='name' />
            <input type='number' placeholder='person' id='name' />
          </div>
        </form>
        <div className='booking__bottom'>
          <div>
            <li className='border-0 px-0'>
              <h5 className='d-flex align-items-center gap-1'>
                100.000 <GrClose style={{ display: 'inline' }} /> 1 người
              </h5>
              <span> 100.000</span>
            </li>
            <li className='border-0 px-0 '>
              <h5>Dịch vụ phụ</h5>
              <span>5.000</span>
            </li>
            <li className='border-0 px-0 total'>
              <h5>Tổng tiền</h5>
              <span>105.000</span>
            </li>
            <button className='btn bg-slate-400 py-4 rounded w-full'>
              Đặt ngay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
