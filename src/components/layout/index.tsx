import Footer from '../footer';
import Router from '~/routes';
import Navbar from '../navbar';
import Scroll from '../scroll';

type Props = {};

const Layout = (props: Props) => {
  return (
    <>
      <Navbar />
      <Router />
      <Footer />
      <Scroll/>
    </>
  );
};

export default Layout;
