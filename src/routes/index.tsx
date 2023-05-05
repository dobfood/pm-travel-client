import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '~/components/layout';
import AboutUs from '~/pages/about/ibndex';
import Contact from '~/pages/contact';
import Detail from '~/pages/detail';
import Home from '~/pages/home';
import Login from '~/pages/login';
import Register from '~/pages/register';
import Thank from '~/pages/thank';
import Tour from '~/pages/tour';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/home' />} />
      <Route path='/home' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/tour' element={<Tour />} />
      <Route path='/tour/:id' element={<Detail />} />
      <Route path='/home' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/thank' element={<Thank />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/about' element={<AboutUs />} />
    </Routes>
  );
};

export default Router;
