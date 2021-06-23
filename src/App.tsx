import React from 'react';
import { ToastContainer } from 'react-toastify';
import { CartProvider } from './context/CartContext';
import Routes from './routes';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <CartProvider>
        <Routes />
      </CartProvider>
      <GlobalStyle />
      <ToastContainer autoClose={4000} />
    </>
  );
};

export default App;
