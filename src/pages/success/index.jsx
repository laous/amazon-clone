import { CheckCircleIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import Header from "../../components/Header";

const Success = () => {
  const router = useRouter();
  return (
    <div className="bg-gray-100 h-screen ">
      <Header />
      <main className="max-w-screen-lg mx-auto">
        <div className="flex flex-col space-y-5 p-10 bg-white">
          <div className="flex items-center space-x-2 mb-5">
            <CheckCircleIcon className="text-green-500 h-10" />
            <h2 className="text-3xl">Your Order has been confirmed</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto saepe
            reprehenderit suscipit sit pariatur nulla mollitia odio similique
            eaque nobis?
          </p>
          <button className="button" onClick={() => router.push("/myorders")}>
            Go to my orders
          </button>
        </div>
      </main>
    </div>
  );
};
export default Success;
