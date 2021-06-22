import { darken, lighten } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderBar = styled.div`
  background-color: #f1f1f1;
  height: 8.7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 11rem;

  .back-button {
    width: 11.6rem;
  }

  h1 {
    font-weight: normal;
    font-size: 2.6rem;
  }
  .avatar {
    width: 11.6rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    img {
      width: 3.5rem;
    }
  }
`;

export const BackButton = styled.button`
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 3.5rem;
  gap: 1rem;
  background-color: #0000000d;
  border: none;
  border-radius: 1.8rem;
  font-weight: 400;
  font-size: 2.2rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${lighten(0.8, '#000000')};
  }

  svg {
    font-size: 2.5rem;
  }
`;

export const PageBody = styled.div`
  display: flex;
`;
