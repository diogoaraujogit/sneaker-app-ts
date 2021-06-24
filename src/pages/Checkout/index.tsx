import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { MdLens } from 'react-icons/md';
import { AiFillBank } from 'react-icons/ai';
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
  PaymentMethod,
  PaymentOption,
  StepsIndicator,
} from './styles';

import { CartContext } from '../../context/CartContext';

import bankingFlags from '../../assets/bankingFlags.svg';
import creditFlags from '../../assets/creditFlags.svg';
import applePayFlag from '../../assets/applePayFlag.svg';

const Checkout: React.FC = () => {
  const [approvedTransaction, setApprovedTransaction] = useState(true);

  const { cartItem } = useContext(CartContext);
  const history = useHistory();
  const mobile = useMediaPredicate('(max-width: 480px)');

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

  useEffect(() => {
    if (!cartItem?.description) {
      history.push('/store');
    }
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
                        <div className="details">
                          <h4>{cartItem?.description}</h4>
                          <p>{`x ${cartItem?.quantity} ${cartItem?.color} Size ${cartItem?.size}`}</p>
                          <p>{`Item #${cartItem?.id}`}</p>
                        </div>
                      </div>
                      <div>
                        <h3>Delivery details</h3>
                        <div className="details">
                          <p>Diogo Araújo</p>
                          <p>Phone no: 5592999999999</p>
                          <p>Address: Redwood City, 2000.</p>
                        </div>
                        <div className="total-cost">
                          <div>
                            <h4>Total cost</h4>
                            <p>Delivery included</p>
                          </div>
                          <div>{`$${cartItem?.price}`}</div>
                        </div>
                      </div>
                    </CartDetails>
                    <PaymentMethod>
                      <h2>Select your payment method</h2>
                      <div>
                        <div>
                          <div className="banner">SAVE $10</div>
                          <PaymentOption selected>
                            <p>Online Banking</p>
                            <img src={bankingFlags} alt="Banking Flags" />
                          </PaymentOption>
                        </div>

                        <PaymentOption>
                          <p>Card Payment</p>
                          <img src={creditFlags} alt="Credit Flags" />
                        </PaymentOption>
                        <PaymentOption>
                          <p>Apple Pay</p>
                          <img src={applePayFlag} alt="Apple Pay Flag" />
                        </PaymentOption>
                      </div>
                    </PaymentMethod>
                    <PaymentButton onClick={() => handleButton()}>
                      Continue
                    </PaymentButton>
                  </>
                ) : (
                  <>
                    <CartDetails>
                      <div>
                        <h3>Order summary</h3>
                        <div className="details">
                          <h4>{cartItem?.description}</h4>
                          <p>{`x ${cartItem?.quantity} ${cartItem?.color} Size ${cartItem?.size}`}</p>
                          <p>{`Item #${cartItem?.id}`}</p>
                        </div>
                      </div>
                      <div>
                        <h3>Payment Method</h3>
                        <div className="online-banking">
                          <AiFillBank />
                          <h4>Online Banking</h4>
                        </div>
                      </div>
                    </CartDetails>
                    <OrderDetails>
                      <div className="total-cost">
                        <div>
                          <h4>Total cost</h4>
                          <p>Delivery included</p>
                        </div>
                        <div>{`$${cartItem?.price}`}</div>
                      </div>
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
                        <div className="details">
                          <h4>{cartItem?.description}</h4>
                          <p>{`x ${cartItem?.quantity} ${cartItem?.color} Size ${cartItem?.size}`}</p>
                          <p>{`Item #${cartItem?.id}`}</p>
                        </div>
                        <div>
                          <h3>Delivery details</h3>
                          <div className="details">
                            <p>Diogo Araújo</p>
                            <p>Phone no: 5592999999999</p>
                            <p>Address: Redwood City, 2000.</p>
                          </div>
                        </div>
                      </CartDetails>
                    </div>
                    <div className="total-cost">
                      <div>
                        <h4>Total cost</h4>
                        <p>Delivery included</p>
                      </div>
                      <div>{`$${cartItem?.price}`}</div>
                    </div>
                  </PaymentDetails>
                  <PaymentMethod>
                    <h2>Payment method</h2>
                    <div>
                      <div>
                        <div className="banner">SAVE $10</div>
                        <PaymentOption selected>
                          <p>Online Banking</p>
                          <img src={bankingFlags} alt="Banking Flags" />
                        </PaymentOption>
                      </div>

                      <PaymentOption>
                        <p>Card Payment</p>
                        <img src={creditFlags} alt="Credit Flags" />
                      </PaymentOption>
                      <PaymentOption>
                        <p>Apple Pay</p>
                        <img src={applePayFlag} alt="Apple Pay Flag" />
                      </PaymentOption>
                    </div>
                  </PaymentMethod>
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
                        <div className="details">
                          <h4>{cartItem?.description}</h4>
                          <p>{`x ${cartItem?.quantity} ${cartItem?.color} Size ${cartItem?.size}`}</p>
                          <p>{`Item #${cartItem?.id}`}</p>
                        </div>
                      </CartDetails>
                    </div>
                  </OrderSummary>
                  <PaymentConfirmed>
                    <div>
                      <h3>Payment Method</h3>
                      <div className="online-banking">
                        <AiFillBank />
                        <h4>Online Banking</h4>
                      </div>
                    </div>
                    <div className="total-cost">
                      <div>
                        <h4>Total cost</h4>
                        <p>Delivery included</p>
                      </div>
                      <div>{`$${cartItem?.price}`}</div>
                    </div>
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
