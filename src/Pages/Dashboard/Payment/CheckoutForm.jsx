import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "./CheckoutForm.css";
import { useEffect, useState } from "react";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import UseAuth from "../../../hooks/UseAuth";
import Swal from "sweetalert2";

const CheckoutForm = ({ cart, price }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = UseAuth();
  const [axiosSecure] = UseAxiosSecure();
  const [cardError, setCardError] = useState("");
  const [processing, SetProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((data) => {
        console.log(data.data.clientSecret);
        setClientSecret(data.data.clientSecret);
      });
    }
  }, [price, axiosSecure]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // stripe and elements are not loaded yet!
      return;
    }
    // getting card elements from all type of payment elements
    const card = elements.getElement(CardElement);
    if (card === null) {
      // card is empty
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      setCardError("");
    }
    SetProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card,
          billing_details: {
            email: user?.email || "Unknown",
            name: user?.name || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log("confirmError", confirmError);
    }
    SetProcessing(false);
    console.log("payment intent", paymentIntent);
    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
        date: new Date(),
        quantity: cart.length,
        cartItems: cart.map((cart) => cart._id),
        menuItems: cart.map((cart) => cart.menuItemId),
        itemNames: cart.map((cart) => cart.name),
        status: "pending",
      };
      console.log(new Date());
      console.log(payment);
      axiosSecure.post("/payment", payment).then((data) => {
        console.log(data.data);
        data.data.insertResult.insertedId &&
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Payment Done!",
            showConfirmButton: false,
            timer: 900,
          });
      });
    }
  };

  return (
    <>
      <form className="w-2/3 m-8" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-primary btn-sm mt-4"
          type="submit"
          disabled={!stripe || processing}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
      {transactionId && (
        <p className="text-green-500">
          Transaction completed with transactionId: {transactionId}
        </p>
      )}
    </>
  );
};

export default CheckoutForm;
