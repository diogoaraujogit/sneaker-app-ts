export const establishPayWithMyBank = (amount: string | undefined): void => {
  (window as any).PayWithMyBank.establish({
    accessId: 'D61EC9BAF0BB369B9438',
    merchantId: '1004314986',
    metadata: { demo: 'enabled' },
    currency: 'USD',
    paymentType: 'Deferred',
    amount,
    description: process.env.REACT_APP_DESCRIPTION,
    merchantReference: process.env.REACT_APP_MERCHANT_REFERENCE,
    returnUrl: '#success',
    cancelUrl: '#cancel',
  });
};
