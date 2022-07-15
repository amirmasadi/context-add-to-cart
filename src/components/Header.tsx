import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";

export default function Header() {
  return (
    <nav className="w-full flex justify-between p-5 border-b-2 ">
      <Link to="/">
        <h4 className="text-lg font-bold uppercase">Add-to-cart</h4>
      </Link>
      <Link to="/cart">
        <CartIcon />
      </Link>
    </nav>
  );
}
