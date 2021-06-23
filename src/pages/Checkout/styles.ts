import { darken } from 'polished';
import styled from 'styled-components';
import stepsTL from '../../assets/stepsTL.svg';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 130rem;
  padding: 6rem 1rem;
`;

export const StepsIndicator = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: url(${stepsTL}) no-repeat;
  background-position-y: center;
  background-size: 100% auto;
  width: 86rem;
  height: 2rem;
  margin-bottom: 4.8rem;

  svg {
    height: 2rem;
  }

  div {
    align-self: self-end;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const CheckoutBody = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 64rem;
  gap: 4rem;
`;

export const ItemFullDisplay = styled.div`
  height: 100%;
  flex: 1;
  overflow-x: hidden;
  overflow-y: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;

  img {
    height: 100%;
  }
`;

export const PaymentDetails = styled.div`
  height: 100%;
  width: 73.2rem;
  background-color: #f7f7f7;
  border-radius: 1rem;
  padding: 3rem 3.8rem;
  display: flex;
  flex-direction: column;
`;

export const CardDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 2rem;

  h3 {
    margin-bottom: 2rem;
    font-size: 2.2rem;
    font-weight: 400;
  }

  h4 {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.5rem;
  }

  p {
    color: #a5a5a5;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.5rem;
  }

  .details {
    margin-bottom: 2rem;
  }

  .total-cost {
    display: flex;
    align-items: center;
    font-size: 4.4rem;
    justify-content: space-between;
  }
`;

export const CartTotal = styled.div`
  display: flex;
`;

export const DeliveryDetails = styled.div`
  display: flex;
`;

export const PaymentMethod = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.4rem;

  h2 {
    margin-bottom: 2rem;
    font-size: 2.2rem;
    font-weight: 400;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
`;

interface PaymentProps {
  readonly selected?: boolean;
}

export const PaymentOption = styled.div<PaymentProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 7.5rem;
  width: 100%;
  background-color: #ffffff;
  font-weight: 400;
  font-size: 1.6rem;
  border-radius: 1rem;
  padding: 0rem 2.4rem 0rem 3rem;
  border: ${(props) => (props.selected ? '1px solid #5dac50' : 'none')};
  cursor: ${(props) => (props.selected ? 'pointer' : 'not-allowed')};
`;

export const PaymentButton = styled.button`
  width: 30rem;
  height: 4.1rem;
  background-color: #6b8067;
  color: #ffffff;
  align-self: flex-end;
  font-size: 1.4rem;
  font-weight: 700;
  border-radius: 0.5rem;
  transition: background 0.2s;

  &:hover {
    background-color: ${darken(0.2, '#6b8067')};
  }
`;
