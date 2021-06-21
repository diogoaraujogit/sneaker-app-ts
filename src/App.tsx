import React from 'react';
import { ToastContainer } from 'react-toastify';
import Routes from './routes';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <Routes />
      <GlobalStyle />
      <ToastContainer autoClose={4000} />
    </>
  );
};

export default App;
