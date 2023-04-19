import Footer from '../footer';
import Router from '~/routes';
import Navbar from '../navbar';

type Props = {};

const Layout = (props: Props) => {
  return (
    <>
      <Navbar />
      <Router />
      <Footer />
    </>
  );
};

export default Layout;
