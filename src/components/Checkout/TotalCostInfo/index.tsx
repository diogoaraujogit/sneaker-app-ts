import React from 'react';

import { Container } from './styles';

interface TotalCostProps {
  price?: string;
}

const TotalCostInfo: React.FC<TotalCostProps> = ({ price }) => {
  return (
    <Container>
      <div>
        <h4>Total cost</h4>
        <p>Delivery included</p>
      </div>
      <div>{`$${price}`}</div>
    </Container>
  );
};

export default TotalCostInfo;
