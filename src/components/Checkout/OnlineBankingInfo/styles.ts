import styled from 'styled-components';

export const Container = styled.div`
  > div {
    display: flex;
    align-items: center;
    gap: 1rem;

    svg {
      font-size: 4.2rem;
      color: #6b8067;
    }
  }

  @media (max-width: 480px) {
    h4 {
      font-size: 1.7rem;
      font-weight: 400;
    }
  }
`;
