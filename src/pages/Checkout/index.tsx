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
  PaymentButton,
  PaymentDetails,
  PaymentMethod,
  PaymentOption,
  StepsIndicator,
} from './styles';

import { CartContext } from '../../context/CartContext';

import bankingFlags from '../../assets/bankingFlags.svg';
import creditFlags from '../../assets/creditFlags.svg';
import applePayFlag from '../../assets/applePayFlag.svg';

const Checkout: React.FC = () => {
  const [approvedTransaction, setApprovedTransaction] = useState(false);

  const { cartItem } = useContext(CartContext);

  const handleSuccess = (): void => {
    setApprovedTransaction(true);
    toast.success('success!');
  };

  const handleError = (): void => {
    toast.error('error!');
  };

  const handleButton = (): void => {
    establishPayWithMyBank(cartItem?.price);
    addPanelListener(handleSuccess, handleError);
  };

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
                  <div className="details">
                    <h4>{cartItem?.description}</h4>
                    <p>{`x ${cartItem?.quantity} ${cartItem?.color} Size ${cartItem?.size}`}</p>
                    <p>{`Item #${cartItem?.id}`}</p>
                  </div>
                </div>
                <div>
                  <h3>Delivery details</h3>
                  <div className="details">
                    <p>Diogo Araújo</p>
                    <p>Phone no: 5592999999999</p>
                    <p>Address: Redwood City, 2000.</p>
                  </div>
                  <div className="total-cost">
                    <div>
                      <h4>Total cost</h4>
                      <p>Delivery included</p>
                    </div>
                    <div>{`$${cartItem?.price}`}</div>
                  </div>
                </div>
              </CardDetails>
              <PaymentMethod>
                <h2>Select your payment method</h2>
                <div>
                  <PaymentOption selected>
                    <p>Online Banking</p>
                    <img src={bankingFlags} alt="Banking Flags" />
                  </PaymentOption>
                  <PaymentOption>
                    <p>Card Payment</p>
                    <img src={creditFlags} alt="Credit Flags" />
                  </PaymentOption>
                  <PaymentOption>
                    <p>Apple Pay</p>
                    <img src={applePayFlag} alt="Apple Pay Flag" />
                  </PaymentOption>
                </div>
              </PaymentMethod>
              <PaymentButton onClick={() => handleButton()}>
                Continue
              </PaymentButton>
            </PaymentDetails>
          </CheckoutBody>
        </Content>
      </Container>
    </Layout>
  );
};

export default Checkout;
