import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import Layout from '../../components/Layout';
import { addPanelListener } from '../../services/addPanelListener';
import { establishPayWithMyBank } from '../../services/establishPayWithMyBank';
import { Container } from './styles';

const Checkout: React.FC = () => {
  const amount = '70.00';
  const [approvedTransaction, setApprovedTransaction] = useState(false);

  const handleSuccess = (): void => {
    setApprovedTransaction(true);
    toast.success('success!');
  };

  const handleError = (): void => {
    toast.success('error!');
  };

  useEffect(() => {
    // establishPayWithMyBank(amount);
    // addPanelListener(handleSuccess, handleError);
  }, []);

  return (
    <Layout title="CHECKOUT" backTo="/store" hasBackButton>
      <Container>Checkout</Container>
    </Layout>
  );
};

export default Checkout;
