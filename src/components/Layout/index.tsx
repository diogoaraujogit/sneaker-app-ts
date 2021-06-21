import React from 'react';
import avatar from '../../assets/avatar.svg';
import { Container, HeaderBar, PageBody } from './styles';

interface LayoutProps {
  title: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <Container>
      <HeaderBar>
        <div />
        <h1>{title}</h1>
        <div className="avatar">
          <img src={avatar} alt="avatar" />
        </div>
      </HeaderBar>
      <PageBody>{children}</PageBody>
    </Container>
  );
};

export default Layout;
