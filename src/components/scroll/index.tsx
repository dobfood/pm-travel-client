import React from 'react';
import { BiVerticalTop } from 'react-icons/bi'; 
import './index.css'
type Props = {};

const Scroll = (props: Props) => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
  return (
    <button onClick={scrollToTop} className='scroll-to-top-button'>
      <BiVerticalTop size={30}/>
    </button>
  );
};

export default Scroll;
