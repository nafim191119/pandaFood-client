import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import UseCart from "./../../../hooks/UseCart";

const stripePromise = loadStripe(`${import.meta.env.VITE_Payment_Gateway_PK}`);

const Payment = () => {
  const [cart] = UseCart();
  const totalPrice = cart.reduce((total, cart) => total + cart.price, 0);
  const price = parseFloat(totalPrice.toFixed(2));
  console.log(price);

  return (
    <div className="w-full flex flex-col justify-center align-middle min-h-screen mx-auto">
      <h3 className="text-3xl mx-auto font-semibold">Payment</h3>
      <div className="w-3/4 mx-auto">
        <Elements stripe={stripePromise}>
          <CheckoutForm cart={cart} price={price}></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
