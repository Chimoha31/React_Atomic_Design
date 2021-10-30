import Header from '../atoms/layout/Header';

const HeaderOnly = (props) => {
  const { children } = props;

  return (
    <div>
      <Header></Header>
      {children}
    </div>
  );
};

export default HeaderOnly;
