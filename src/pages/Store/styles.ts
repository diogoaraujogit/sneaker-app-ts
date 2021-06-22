import styled from 'styled-components';

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
  padding-top: 6rem;
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
  border-radius: 1.6rem;
`;

export const ItemInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
`;

export const ItemOptions = styled.div`
  display: flex;

  > div {
    display: flex;
  }
`;
