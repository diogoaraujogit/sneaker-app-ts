import React, { useEffect } from 'react';
import Layout from '../../components/Layout';
import { addPanelListener } from '../../services/addPanelListener';
import { establishPayWithMyBank } from '../../services/establishPayWithMyBank';
import { Container } from './styles';

const Checkout: React.FC = () => {
  useEffect(() => {
    establishPayWithMyBank();
    addPanelListener();
  }, []);

  return (
    <Layout title="CHECKOUT">
      <Container>Checkout</Container>
    </Layout>
  );
};

export default Checkout;
