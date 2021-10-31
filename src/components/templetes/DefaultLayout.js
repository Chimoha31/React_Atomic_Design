import Header from '../atoms/layout/Header';
import Footer from '../atoms/layout/Footer';

const DefaultLayout = (props) => {
  const { children } = props;

  return (
    <div>
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default DefaultLayout;