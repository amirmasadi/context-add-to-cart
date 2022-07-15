import { useState, createContext } from "react";
import { ProductInfo } from "../components/ProductCard";

type Props = {
  children: JSX.Element | JSX.Element[];
};

const CartContext = createContext<ProductInfo[]>([]);
const CartDispatchContext = createContext<any>(null);

export default function InCartContext({ children }: Props) {
  const [cart, setCart] = useState<ProductInfo[]>([]);

  return (
    <CartContext.Provider value={cart}>
      <CartDispatchContext.Provider value={setCart}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
}

export { CartContext, CartDispatchContext };
