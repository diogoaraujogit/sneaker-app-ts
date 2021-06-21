export const establishPayWithMyBank = (): void => {
  (window as any).PayWithMyBank.establish({
    accessId: 'D61EC9BAF0BB369B9438',
    merchantId: '1004314986',
    metadata: { demo: 'enabled' },
    currency: 'USD',
    paymentType: 'Deferred',
    amount: '100.00',
    description: 'daraujo.augusto@gmail.com',
    merchantReference: '510593',
    returnUrl: '#success',
    cancelUrl: '#cancel',
  });
};
