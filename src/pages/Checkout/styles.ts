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
`;

export const CardDetails = styled.div`
  display: flex;
`;

export const PaymentMethod = styled.div`
  display: flex;
`;

export const PaymentOption = styled.div`
  display: flex;
`;
