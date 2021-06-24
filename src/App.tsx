import React from 'react';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
import { CartProvider } from './context/CartContext';
import Routes from './routes';
import GlobalStyle from './styles/global';
import useWindowSize from './styles/responsiveHook';

const App: React.FC = () => {
  const rate = useWindowSize();
  const theme = {
    color: '#ffff',
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <CartProvider>
          <Routes />
        </CartProvider>
        <GlobalStyle rate={rate} />
        <ToastContainer autoClose={4000} />
      </ThemeProvider>
    </>
  );
};

export default App;
