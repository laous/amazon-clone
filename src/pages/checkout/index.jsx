import Head from "next/head";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectItems } from "../../app/slices/basketSlice";
import CheckoutProduct from "../../components/CheckoutProduct";
import Header from "../../components/Header";

const Checkout = () => {
  const items = useSelector(selectItems);
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
      </main>
    </div>
  );
};
export default Checkout;
