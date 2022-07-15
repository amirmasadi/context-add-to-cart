import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/InCartContext";
import BackIcon from "./BackIcon";
import ProductCard from "./ProductCard";

export default function Cart() {
  const InCart = useContext(CartContext);
  return (
    <div className="p-3 grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-5 mt-10 relative">
      <Link to="/" className="absolute bottom-full">
        <BackIcon />
      </Link>
      {InCart.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          img={product.img}
          title={product.title}
          price={product.price}
          desc={product.desc}
          rate={product.rate}
          showAddBtn={false}
        />
      ))}
    </div>
  );
}
