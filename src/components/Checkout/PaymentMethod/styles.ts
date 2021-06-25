import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.4rem;

  p {
    color: #535353;
  }

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
      border-radius: 0.5rem;
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
