import { useState } from "react";
import usefetch from "../hooks/usefetch";
import ProductCard from "./ProductCard";

import { hookOutput } from "../hooks/usefetch";
import ItemSkeleton from "./ItemSkeleton";

export default function Products() {
  const [url, setUrl] = useState("https://fakestoreapi.com/products?limit=6");
  const { data, error, loading }: hookOutput = usefetch(url);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="p-3 grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-5 mt-10 w-full">
        {!loading
          ? data?.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                img={product.image}
                title={product.title}
                price={product.price}
                desc={product.description}
                rate={product.rating.rate}
                showAddBtn={true}
              />
            ))
          : Array(6)
              .fill("")
              .map((itm, idx) => <ItemSkeleton key={idx} />)}
      </div>
      {!loading && (
        <button
          className="border border-slate-700 w-fit px-5 py-2 rounded-lg hover:bg-slate-700 hover:text-slate-100 my-5 "
          onClick={() => setUrl("https://fakestoreapi.com/products?limit=12")}
        >
          Load more...
        </button>
      )}
    </div>
  );
}
