import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import Layout from '../../components/Layout';
import { addPanelListener } from '../../services/addPanelListener';
import { establishPayWithMyBank } from '../../services/establishPayWithMyBank';
import { Container } from './styles';

const Checkout: React.FC = () => {
  const history = useHistory();
  const amount = '70.00';

  const handleSuccess = (): void => {
    history.push('/receipt');
    toast.success('success!');
  };

  const handleError = (): void => {
    toast.success('error!');
  };

  useEffect(() => {
    establishPayWithMyBank(amount);
    addPanelListener(handleSuccess, handleError);
  }, []);

  return (
    <Layout title="CHECKOUT">
      <Container>Checkout</Container>
    </Layout>
  );
};

export default Checkout;
