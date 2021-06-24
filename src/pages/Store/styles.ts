import styled from 'styled-components';
import { darken } from 'polished';
import kbArrowDown from '../../assets/kbArrowDown.svg';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 110rem;
  padding: 6rem 0rem;
`;

export const SearchItem = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  margin-bottom: 5.7rem;

  input {
    width: 100%;
    height: 100%;
    padding: 1rem 7rem;
    border: none;
    border-bottom: 1px solid #bdbdbd;

    &::placeholder {
      color: #a8a8a8;
      text-align: center;
      font-size: 2.4rem;
      font-weight: 300;
    }
  }

  svg {
    position: absolute;
    font-size: 3rem;
    margin-left: 2rem;
    color: #787878;
  }
`;

export const StoreList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 6.6rem;
  width: 100%;
`;

export const StoreItem = styled.div`
  width: 30rem;
  justify-self: center;
  box-shadow: 0px 6px 16px 0px #0000000d;
  border-radius: 1rem;

  img {
    width: 100%;
  }
`;

export const ItemInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2rem 1rem 1rem 1rem;

  h3 {
    font-size: 2rem;
    color: #000000;
    font-weight: 400;
    margin-bottom: 2rem;
  }

  .price {
    font-weight: 600;
    font-size: 2.1rem;
    color: #000000;
    margin-bottom: 1.5rem;
  }

  button {
    width: 100%;
    height: 4.2rem;
    color: #ffffff;
    background-color: #6b8067;
    font-size: 1.4rem;
    font-weight: 700;
    border-radius: 0.45rem;
    transition: background 0.2s;

    &:hover {
      background-color: ${darken(0.2, '#6b8067')};
    }
  }
`;

export const ItemOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0rem 1rem;
  margin-bottom: 2rem;

  > div {
    display: flex;
    align-items: center;
    gap: 1rem;

    p,
    option,
    select {
      font-size: 1.2rem;
      color: #8d8d8d;
      font-weight: 400;
    }

    select {
      border-radius: 2.5rem;
      border: 0.9px solid #e8e8e8;
      width: 7rem;
      height: 2.8rem;
      padding: 0rem 1rem;
      cursor: pointer;

      background: url(${kbArrowDown}) no-repeat right;
      background-size: 1.5rem 1.5rem;
      -moz-appearance: none;
      -webkit-appearance: none;
      background-position: 85%;
    }
  }
`;
