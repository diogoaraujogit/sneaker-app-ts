import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { MdLens } from 'react-icons/md';
import { useMediaPredicate } from 'react-media-hook';
import Layout from '../../components/Layout';
import { addPanelListener } from '../../services/addPanelListener';
import { establishPayWithMyBank } from '../../services/establishPayWithMyBank';
import {
  CartDetails,
  CheckoutBody,
  Container,
  Content,
  ItemFullDisplay,
  OrderDetails,
  OrderSummary,
  PaymentButton,
  PaymentConfirmed,
  PaymentDetails,
  StepsIndicator,
} from './styles';

import { CartContext } from '../../context/CartContext';

import CartDetailsInfo from '../../components/Checkout/CartDetailsInfo';
import DeliveryDetailsInfo from '../../components/Checkout/DeliveryDetailsInfo';
import TotalCostInfo from '../../components/Checkout/TotalCostInfo';
import OnlineBankingInfo from '../../components/Checkout/OnlineBankingInfo';
import PaymentMethod from '../../components/Checkout/PaymentMethod';

const Checkout: React.FC = () => {
  // INNER STATES
  const [approvedTransaction, setApprovedTransaction] = useState(false);

  // UTILS CONSTS
  const { cartItem } = useContext(CartContext);
  const history = useHistory();
  const mobile = useMediaPredicate('(max-width: 480px)');

  // FUNCTIONS
  const handleSuccess = (): void => {
    setApprovedTransaction(true);
    toast.success('Payment confirmed');
  };

  const handleError = (): void => {
    toast.error('Payment failure');
  };

  const handleButton = (): void => {
    establishPayWithMyBank(cartItem?.price);
    addPanelListener(handleSuccess, handleError);
  };

  // PAGE SIDE EFFECTS
  useEffect(() => {
    if (!cartItem?.description) {
      history.push('/store');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout title="Checkout" backTo="/store" hasBackButton>
      <Container>
        <Content>
          {!mobile && (
            <StepsIndicator>
              <div>
                <MdLens color="#61CB46" />
                <p>Cart</p>
              </div>
              <div>
                <MdLens color="#61CB46" />
                <p>Payment options</p>
              </div>
              <div>
                <MdLens color={approvedTransaction ? '#61CB46' : '#E8E8E8'} />
                <p>Receipts</p>
              </div>
            </StepsIndicator>
          )}

          {!mobile ? (
            <CheckoutBody>
              <ItemFullDisplay>
                <img src={cartItem?.maxresURL} alt={cartItem?.description} />
              </ItemFullDisplay>
              <PaymentDetails>
                {!approvedTransaction ? (
                  <>
                    <CartDetails>
                      <div>
                        <h3>Cart total</h3>
                        <CartDetailsInfo cartItem={cartItem} />
                      </div>

                      <div>
                        <h3>Delivery details</h3>

                        <TotalCostInfo price={cartItem?.price} />
                      </div>
                    </CartDetails>
                    <PaymentMethod title="Select your payment method" />
                    <PaymentButton onClick={() => handleButton()}>
                      Continue
                    </PaymentButton>
                  </>
                ) : (
                  <>
                    <CartDetails>
                      <div>
                        <h3>Order summary</h3>
                        <CartDetailsInfo cartItem={cartItem} />
                      </div>
                      <OnlineBankingInfo />
                    </CartDetails>
                    <OrderDetails>
                      <TotalCostInfo price={cartItem?.price} />
                      <PaymentButton disabled>Place order</PaymentButton>
                    </OrderDetails>
                  </>
                )}
              </PaymentDetails>
            </CheckoutBody>
          ) : (
            <CheckoutBody>
              {!approvedTransaction ? (
                <>
                  <h2>Checkout</h2>
                  <PaymentDetails>
                    <div>
                      <ItemFullDisplay>
                        <img
                          src={cartItem?.maxresURL}
                          alt={cartItem?.description}
                        />
                      </ItemFullDisplay>
                      <CartDetails>
                        <CartDetailsInfo cartItem={cartItem} />

                        <div>
                          <h3>Delivery details</h3>
                          <DeliveryDetailsInfo />
                        </div>
                      </CartDetails>
                    </div>
                    <TotalCostInfo price={cartItem?.price} />
                  </PaymentDetails>
                  <PaymentMethod title="Payment method" />
                  <PaymentButton onClick={() => handleButton()}>
                    Continue
                  </PaymentButton>
                </>
              ) : (
                <>
                  <h2>Review and confirmation</h2>
                  <OrderSummary>
                    <h2>Order Summary</h2>
                    <div>
                      <ItemFullDisplay>
                        <img
                          src={cartItem?.maxresURL}
                          alt={cartItem?.description}
                        />
                      </ItemFullDisplay>
                      <CartDetails>
                        <CartDetailsInfo cartItem={cartItem} />
                      </CartDetails>
                    </div>
                  </OrderSummary>
                  <PaymentConfirmed>
                    <OnlineBankingInfo />
                    <TotalCostInfo price={cartItem?.price} />
                  </PaymentConfirmed>
                  <PaymentButton disabled>Place order</PaymentButton>
                </>
              )}
            </CheckoutBody>
          )}
        </Content>
      </Container>
    </Layout>
  );
};

export default Checkout;
