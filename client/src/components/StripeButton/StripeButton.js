import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

const stripeCheckoutButton = ({ price }) => {
  const priceForStripe = price;
  const publishableKey = 'pk_test_51HP3SAAHgbVhvnWLRQeyHPSn0F9xzwKrAcEGutmMTu7YthA5EQq2sw8a86LYnW7gFhl7FYacVTV8pD1thWHpxZ3d009pgqHTKu';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then(response => {
        alert('Payment successful');
      })
      .catch(error => {
        alert('There is an issue with your payment. Please use the correct credentials');
      })
  }
  return (
    <StripeCheckout
      label='Pay Now'
      name='bookmandala pvt. ltd.'
      billingAddress
      shippingAddress
      description={`Your total is $${price / 100}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default stripeCheckoutButton;
