import AddIcon from "./AddIcon";
import { CartContext, CartDispatchContext } from "../context/InCartContext";
import { useContext } from "react";

export type ProductInfo = {
  id: number;
  title: string;
  price: number;
  desc: string;
  img: string;
  rate: number;
  showAddBtn?: boolean;
};

export default function ProductCard({
  id,
  title,
  price,
  desc,
  img,
  rate,
  showAddBtn = true,
}: ProductInfo) {
  const InCart = useContext(CartContext);
  const setInCart = useContext(CartDispatchContext);

  function addToCart(info: ProductInfo) {
    let dublicateitem = InCart.find((itm) => itm.id === info.id);
    if (!dublicateitem) {
      setInCart([...InCart, info]);
    }
  }

  function removeFormCart(id: number) {
    let filterd = InCart.filter((itm) => itm.id !== id);
    setInCart(filterd);
  }

  return (
    <div className="border border-solid p-3 rounded-lg relative pb-16 overflow-hidden">
      <img src={img} alt={title} className="w-full h-72  object-contain " />
      <h4>{title}</h4>
      <span>${price}</span>
      <span>{rate}</span>
      <p className="">{desc.slice(0, 100)}...</p>
      {showAddBtn ? (
        <button
          className="flex w-full justify-center items-center absolute bottom-0 left-0 bg-slate-300 p-3 hover:bg-slate-600 hover:text-slate-200"
          onClick={() => addToCart({ id, title, price, desc, img, rate })}
        >
          <AddIcon />
          Add to cart
        </button>
      ) : (
        <button
          className="flex w-full justify-center items-center absolute bottom-0 left-0 bg-slate-300 p-3 hover:bg-slate-600 hover:text-slate-200"
          onClick={() => removeFormCart(id)}
        >
          <div className="rotate-45">
            <AddIcon />
          </div>
          Remove from cart
        </button>
      )}
    </div>
  );
}
