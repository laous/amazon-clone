import Head from "next/head";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../../app/slices/basketSlice";
import CheckoutProduct from "../../components/CheckoutProduct";
import Header from "../../components/Header";
import Currency from "react-currency-formatter";
import { useSession } from "next-auth/react";
import { loadStripe } from "@stripe/stripe-js";

const Checkout = () => {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const { data: session } = useSession();

  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  );

  const createCheckoutSession = () => {};

  return (
    <div className="bg-gray-100 ">
      <Head>
        <title>Checkout</title>
      </Head>
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto ">
        {/* Left Section*/}
        <div className="flex-grow m-5 shadow-sm">
          {/* Banner */}
          <Image
            src={"https://links.papareact.com/ikj"}
            width={"1020"}
            height="250"
            objectFit="container"
          />
          <div className="flex flex-col p-5 space-y-10 bg-white ">
            <h1 className="text-3xl border-b pb-4">
              Your Shopping Basket{items.length === 0 && " Is Empty"}
            </h1>
            {items.map(
              ({ title, id, image, price, description, category }, index) => (
                <CheckoutProduct
                  key={id}
                  title={title}
                  image={image}
                  category={category}
                  price={price}
                  description={description}
                />
              )
            )}
          </div>
        </div>

        {/* RIght Section*/}
        <div className="flex flex-col bg-white p-10 shadow-md ">
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal ({items.length} items):{" "}
                <span className="font-bold">
                  <Currency quantity={total} currency="MAD" />
                </span>
              </h2>
              <button
                disabled={!session}
                className={`button mt-2 ${
                  !session &&
                  "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"
                }`}
              >
                {!session ? "Sign in to checkout" : "Proceed to checkout"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
};
export default Checkout;
