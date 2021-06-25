import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 4.4rem;
  justify-content: space-between;
  padding-right: 2rem;

  @media (max-width: 480px) {
    font-size: 3.6rem;
    justify-content: space-between;
  }
`;
