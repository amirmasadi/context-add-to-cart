import AddIcon from "./AddIcon";

type Props = {
  img: string;
  title: string;
  price: number;
  desc: string;
};

export default function ProductCart({ img, title, price, desc }: Props) {
  return (
    <div className="border border-solid p-3 rounded-lg relative pb-16 overflow-hidden">
      <img src={img} alt={title} className="w-full h-72  object-contain " />
      <h4>{title}</h4>
      <span>${price}</span>
      <p className="">{desc.slice(0, 100)}...</p>
      <button className="flex w-full justify-center items-center absolute bottom-0 left-0 bg-slate-300 p-3 hover:bg-slate-600 hover:text-slate-200">
        <AddIcon />
        Add to cart
      </button>
    </div>
  );
}
