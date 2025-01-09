'use client'
import React, { useContext } from "react";
import { ProductContext } from "@/context/context";
import Image from "next/image";


const Home: React.FC = () => {
  const context = useContext(ProductContext);

  if (!context) {
    return <div>Error: ProductContext not found</div>;
  }

  const { products } = context;

  return (
    <div className="m-6">
      <h1 className="text-center">Корзина ({products.length})</h1>
      <div className="flex gap-5 flex-wrap">
        {products.map((product) => (
          <div key={product.id} className="border w-[200px] h-auto ">
           <div className="p-4">
           <Image
              src={product.image}
              alt={product.productName}
              className="w-full h-[120px] object-cover mb-4"
            />
            <h2 className="text-lg font-bold">{product.productName}</h2>
            <p className="text-sm text-gray-500 mb-4">{product.categoryName}</p>
            </div> 
           <div className="text-center border">
           <button className=" text-black py-1 px-4">
              В корзину
            </button>
           </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
