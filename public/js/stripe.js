import axios from 'axios';
import { showAlert } from './alerts';
//const Stripe = require('stripe');
import {loadStripe} from '@stripe/stripe-js';



export const bookTour = async tourId => {
  const stripe = await loadStripe('pk_test_51MqAGwFZzcLmcWM4mXhn2d6w2LGVsIt6OBzQpIFLEblQ0myNjKR1fvo35DnT1W8NDyMipQ4Cvfbb1hWVPla9tZZZ00lbBtE9Xz');
  // get checkout session from API
  try {
    // 1. Get checkout session from the API
   
    const session = await axios(`/api/v1/booking/checkout-session/${tourId}`);

    console.log(session);
    

    // 2. Create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
