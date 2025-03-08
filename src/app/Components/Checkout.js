import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

// Your Stripe publishable key
const stripePromise = loadStripe('your-publishable-key-here');

const Checkout = () => {
  const [amount, setAmount] = useState(5000); // Set your amount here
  const stripe = useStripe();
  const elements = useElements();

  const handlePayment = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const { data } = await axios.post('http://localhost:3000/create-payment-intent', { amount });

    const clientSecret = data.clientSecret;

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (result.error) {
      console.error('Payment failed', result.error.message);
    } else {
      if (result.paymentIntent.status === 'succeeded') {
        alert('Payment succeeded!');
      }
    }
  };

  return (
    <form onSubmit={handlePayment}>
      <h1>Checkout</h1>
      <CardElement />
      <button type="submit" disabled={!stripe}>Pay ${amount / 100}</button>
    </form>
  );
};

const StripeWrapper = () => (
  <Elements stripe={stripePromise}>
    <Checkout />
  </Elements>
);

export default StripeWrapper;