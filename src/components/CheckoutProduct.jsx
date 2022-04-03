import Image from "next/image";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { removeFromBasket } from "../app/slices/basketSlice";

const CheckoutProduct = ({
  title,
  id,
  image,
  price,
  description,
  category,
}) => {
  const dispatch = useDispatch();

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };

  return (
    <div className="grid grid-cols-5 ">
      <Image src={image} height={200} width={200} objectFit={"contain"} />
      <div className="col-span-3 mx-5">
        <h3 className="my-3 ">{title}</h3>
        <p className="text-xs my-2 line-clamp-3 ">{description}</p>
        <div className="mb-3">
          <Currency quantity={price * 10} currency="MAD" />
        </div>
      </div>
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button className="button ">Add more</button>
        <button className="button " onClick={removeItemFromBasket}>
          Remove from basket
        </button>
      </div>
    </div>
  );
};
export default CheckoutProduct;
