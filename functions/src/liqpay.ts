/* eslint-disable @typescript-eslint/no-var-requires */
const LiqPay = require('./liqpay-lib');

const public_key = 'sandbox_i84979746960';
const private_key = 'sandbox_SU2BabGczBGWGc8W0zj9d9SQgyEXKgLMVgJ5zRMT';

const liqpay = new LiqPay(public_key, private_key);

export const getRedirectLink = () =>
  liqpay.cnb_form({
    action: 'pay',
    amount: '100',
    currency: 'UAH',
    description: 'photo-service pay',
    order_id: 'new-order-id',
    version: '3',
    language: 'uk',
  });
