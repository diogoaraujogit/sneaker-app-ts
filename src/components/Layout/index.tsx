import React from 'react';
import { MdArrowBack } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import avatar from '../../assets/avatar.svg';
import { BackButton, Container, HeaderBar, PageBody } from './styles';

interface LayoutProps {
  title: string;
  hasBackButton?: boolean;
  backTo?: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  title,
  hasBackButton = false,
  backTo = '/',
}) => {
  const history = useHistory();

  return (
    <Container>
      <HeaderBar>
        <div className="back-button">
          {hasBackButton && (
            <BackButton onClick={() => history.push(backTo)}>
              <MdArrowBack /> Back
            </BackButton>
          )}
        </div>
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
