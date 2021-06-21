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

  h1 {
    font-weight: normal;
    font-size: 2.6rem;
  }
  .avatar {
    img {
      width: 3.5rem;
    }
  }
`;

export const PageBody = styled.div`
  display: flex;
`;
