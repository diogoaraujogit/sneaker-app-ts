import React from 'react';
import { ToastContainer } from 'react-toastify';
import { CartProvider } from './context/CartContext';
import Routes from './routes';
import GlobalStyle from './styles/global';
import useWindowSize from './styles/responsiveHook';

const App: React.FC = () => {
  const rate = useWindowSize();

  return (
    <>
      <CartProvider>
        <Routes />
      </CartProvider>
      <GlobalStyle rate={rate} />
      <ToastContainer autoClose={4000} />
    </>
  );
};

export default App;
