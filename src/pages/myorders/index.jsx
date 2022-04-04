import moment from "moment";
import { getSession, useSession } from "next-auth/react";
import Head from "next/head";
import db from "../../../firebase";
import Header from "../../components/Header";
import { OrderCard } from "../../components/OrderCard";
const MyOrders = ({ orders }) => {
  const { data: session } = useSession();

  console.log(orders);

  return (
    <div>
      <Head>
        <title>My Orders</title>
      </Head>
      <Header />
      <main className="max-w-screen-lg mx-auto p-10 ">
        <h2 className="text-3xl border-b mb-2 pb-1 border-yellow-400">
          Your Orders
        </h2>
        {session ? (
          <h3>{orders.length} Orders</h3>
        ) : (
          <h3>Please sign in to see your orders.</h3>
        )}
        {session && (
          <div className="mt-5 space-y-4">
            {orders?.map((order) => (
              <OrderCard order={order} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};
export default MyOrders;

export async function getServerSideProps(ctx) {
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

  const session = await getSession(ctx);

  if (!session) {
    return {
      props: {},
    };
  }

  // FIrebase orders
  const firebaseOrders = await db
    .collection("users")
    .doc(session.user.email)
    .collection("orders")
    .orderBy("timestamp", "desc")
    .get();

  // Stripe orders
  const orders = await Promise.all(
    firebaseOrders.docs.map(async (order) => ({
      id: order.id,
      amount: order.data().amount,
      images: order.data().images,
      timestamp: moment(order.data().timestamp.toDate()).unix(),
      items: (
        await stripe.checkout.sessions.listLineItems(order.id, {
          limit: 100,
        })
      ).data,
    }))
  );

  return {
    props: {
      orders,
    },
  };
}
