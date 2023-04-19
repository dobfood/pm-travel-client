import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '~/components/layout';
import Detail from '~/pages/detail';
import Home from '~/pages/home';
import Login from '~/pages/login';
import Tour from '~/pages/tour';
type Props = {};

const Router = (props: Props) => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/home' />} />
      <Route path='/home' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/tour' element={<Tour />} />
      <Route path='/tour/:id' element={<Detail />} />
      <Route path='/home' element={<Home />} />
    </Routes>
  );
};

export default Router;
