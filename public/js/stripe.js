/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alert';

export const bookTour = async (tourId) => {
  const stripe = Stripe(
    'pk_test_51NuzDvBWaoEoFrBymH0WjqV4XkIZ9bHla26sbpmCx9PXV0LPajDzcu3VSqjF4Nymlgn1FP8JTFOW7hPdFl81zJSr00szjurYNf',
  );
  try {
    // 1) Get checkout session from server
    const session = await axios(
      `http://localhost:8000/api/v1/bookings/checkout-session/${tourId}`,
    );
    console.log(session);
    // 2) Create a checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    showAlert('error', err);
  }
};
