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

  @media (max-width: 480px) {
    padding: 3rem 1rem;
  }
`;

export const StepsIndicator = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
  background: url(${stepsTL}) no-repeat;
  background-position-y: center;
  background-position-x: center;
  background-size: 98% auto;
  width: 86rem;
  margin-bottom: 4.8rem;
  height: 2rem;

  svg {
    height: 2rem;
    font-size: 2rem;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 2rem;
    height: 4rem;
    white-space: nowrap;

    p {
      font-size: 1.6rem;
    }
  }
`;

export const CheckoutBody = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 64rem;
  gap: 4rem;

  .online-banking {
    display: flex;
    align-items: center;
    gap: 1rem;

    svg {
      font-size: 4.2rem;
      color: #6b8067;
    }
  }

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

  .total-cost {
    display: flex;
    align-items: center;
    font-size: 4.4rem;
    justify-content: space-between;
    padding-right: 2rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
    gap: 2rem;

    .online-banking {
      h4 {
        font-size: 1.7rem;
        font-weight: 400;
      }
    }

    h2 {
      font-size: 2.4rem;
      font-weight: 400;
    }

    p {
      font-size: 1.4rem;
      line-height: 2rem;
    }

    h3 {
      margin-bottom: 0rem;
      line-height: 2rem;
      font-size: 1.4rem;
      font-weight: 400;
    }

    h4 {
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 2rem;
    }

    .total-cost {
      font-size: 3.6rem;
      justify-content: space-between;
    }
  }
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

  @media (max-width: 480px) {
    height: 10rem;
    max-width: 8rem;
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

  @media (max-width: 480px) {
    width: 100%;
    height: 24.4rem;
    padding: 1rem;

    > div {
      display: flex;
      gap: 1.5rem;
    }
  }
`;

export const CartDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 2rem;

  .details {
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 0rem;

    .details {
      margin-bottom: 1rem;
    }
  }
`;

export const OrderDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const OrderSummary = styled.div`
  display: flex;
  background-color: #f7f7f7;
  flex-direction: column;
  padding: 1.5rem;
  border-radius: 1rem;

  h2 {
    margin-bottom: 1rem;
    font-size: 1.8rem;
  }

  h4 {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2rem;
  }

  p {
    font-size: 1.4rem;
    color: #a5a5a5;
    line-height: 2rem;
  }

  > div {
    display: flex;
    gap: 2rem;
  }
`;

export const PaymentConfirmed = styled.div`
  display: flex;
  background-color: #f7f7f7;
  flex-direction: column;
  padding: 0rem 1.5rem;
  border-radius: 1rem;

  h3 {
    margin-bottom: 2rem;
    font-weight: 700;
    font-size: 1.8rem;
  }

  > div {
    padding: 2rem 0rem;

    &:first-child {
      border-bottom: 1px solid #d6d6d6;
    }
  }
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

    .banner {
      width: 8rem;
      height: 1.5rem;
      position: absolute;
      background-color: #ffcc00;
      margin: -0.75rem 0rem 0rem 3rem;
      font-size: 0.9rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  @media (max-width: 480px) {
    margin-bottom: 0rem;
    h2 {
      font-size: 1.7rem;
    }

    > div {
      background-color: #f7f7f7;
      height: 24.5rem;
      padding: 2rem 1rem;
      gap: 0rem;
      justify-content: space-between;

      .banner {
        margin: 4rem 0rem 0rem 3rem;
        border-radius: 0.5rem;
      }
    }
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
  border-radius: 1rem;
  padding: 0rem 2.4rem 0rem 3rem;
  border: ${(props) => (props.selected ? '1px solid #5dac50' : 'none')};
  cursor: ${(props) => (props.selected ? 'pointer' : 'not-allowed')};

  p {
    font-weight: 400;
    font-size: 1.6rem;
    color: #000000;
  }

  img {
    max-width: 18rem;
  }

  @media (max-width: 480px) {
    height: 6rem;
    padding: 0rem 2rem 0rem 2.4rem;

    p {
      font-size: 1.4rem;
    }

    img {
      max-width: 13rem;
    }
  }
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

  &:hover,
  &:disabled {
    background-color: ${darken(0.2, '#6b8067')};
  }

  &:disabled {
    cursor: not-allowed;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;
