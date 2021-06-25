import React from 'react';
import { AiFillBank } from 'react-icons/ai';

import { Container } from './styles';

const OnlineBankingInfo: React.FC = () => {
  return (
    <Container>
      <h3>Payment Method</h3>
      <div className="online-banking">
        <AiFillBank />
        <h4>Online Banking</h4>
      </div>
    </Container>
  );
};

export default OnlineBankingInfo;
