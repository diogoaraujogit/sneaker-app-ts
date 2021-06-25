import React from 'react';

import { Container, PaymentOption } from './styles';

import bankingFlags from '../../../assets/bankingFlags.svg';
import creditFlags from '../../../assets/creditFlags.svg';
import applePayFlag from '../../../assets/applePayFlag.svg';

interface PaymentMethodProps {
  title?: string;
}

const PaymentMethod: React.FC<PaymentMethodProps> = ({ title }) => {
  return (
    <Container>
      <h2>{title}</h2>
      <div>
        <div>
          <div className="banner">SAVE $10</div>
          <PaymentOption selected>
            <p>Online Banking</p>
            <img src={bankingFlags} alt="Banking Flags" />
          </PaymentOption>
        </div>

        <PaymentOption>
          <p>Card Payment</p>
          <img src={creditFlags} alt="Credit Flags" />
        </PaymentOption>
        <PaymentOption>
          <p>Apple Pay</p>
          <img src={applePayFlag} alt="Apple Pay Flag" />
        </PaymentOption>
      </div>
    </Container>
  );
};

export default PaymentMethod;
