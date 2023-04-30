import React from 'react';
import { HashLoader } from 'react-spinners';
import './index.css';
type Props = {};
const Loading = (props: Props) => {
  return (
    <div className='loader-container'>
      <HashLoader color='#75e1f9' />
    </div>
  );
};
export default Loading;
