import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { MdLens } from 'react-icons/md';
import Layout from '../../components/Layout';
import { addPanelListener } from '../../services/addPanelListener';
import { establishPayWithMyBank } from '../../services/establishPayWithMyBank';
import {
  CardDetails,
  CheckoutBody,
  Container,
  Content,
  ItemFullDisplay,
  PaymentDetails,
  PaymentMethod,
  StepsIndicator,
} from './styles';

import { CartContext } from '../../context/CartContext';

const Checkout: React.FC = () => {
  const [approvedTransaction, setApprovedTransaction] = useState(false);

  const { cartItem } = useContext(CartContext);

  // const cartItem = {
  //   color: 'Green',
  //   currency: 'USD',
  //   description: 'SS Sneaker',
  //   id: '2839u512401',
  //   maxresURL:
  //     'https://voliveira.s3-sa-east-1.amazonaws.com/sneakers/ss-sneaker-maxres.png',
  //   price: '100.00',
  //   thumbnailURL:
  //     'https://voliveira.s3-sa-east-1.amazonaws.com/sneakers/ss-sneaker-thumb.png',
  // };

  const handleSuccess = (): void => {
    setApprovedTransaction(true);
    toast.success('success!');
  };

  const handleError = (): void => {
    toast.success('error!');
  };

  useEffect(() => {
    // establishPayWithMyBank(cartItem.price);
    // addPanelListener(handleSuccess, handleError);
  }, []);

  return (
    <Layout title="Checkout" backTo="/store" hasBackButton>
      <Container>
        <Content>
          <StepsIndicator>
            <div>
              <MdLens color="#61CB46" />
              <p>Text</p>
            </div>
            <MdLens color="#61CB46" />
            <MdLens color={approvedTransaction ? '#61CB46' : '#E8E8E8'} />
          </StepsIndicator>
          <CheckoutBody>
            <ItemFullDisplay>
              <img src={cartItem?.maxresURL} alt={cartItem?.description} />
            </ItemFullDisplay>
            <PaymentDetails>
              <CardDetails>
                <div>
                  <h3>Cart total</h3>
                  <div>
                    <h4>{cartItem?.description}</h4>
                  </div>
                </div>
              </CardDetails>
              <PaymentMethod>Select your payment method</PaymentMethod>
            </PaymentDetails>
          </CheckoutBody>
        </Content>
      </Container>
    </Layout>
  );
};

export default Checkout;
