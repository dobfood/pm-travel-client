import Footer from '../footer';
import Router from '~/routes';
import Navbar from '../navbar';
import Scroll from '../scroll';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Router />
      <Footer />
      <Scroll />
    </>
  );
};

export default Layout;
