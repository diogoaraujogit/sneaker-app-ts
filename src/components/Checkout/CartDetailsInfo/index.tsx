import React from 'react';

import { Container } from './styles';

interface CartItemProps {
  cartItem?: {
    description?: string;
    quantity?: string;
    color?: string;
    size?: string;
    id?: string;
  };
}

const CartDetailsInfo: React.FC<CartItemProps> = ({ cartItem }) => {
  return (
    <Container>
      <h4>{cartItem?.description}</h4>
      <p>{`x ${cartItem?.quantity} ${cartItem?.color} Size ${cartItem?.size}`}</p>
      <p>{`Item #${cartItem?.id}`}</p>
    </Container>
  );
};

export default CartDetailsInfo;
