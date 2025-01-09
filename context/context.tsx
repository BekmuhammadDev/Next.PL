'use client'
import React, { createContext, useState, ReactNode } from "react";

interface Product {
  id: number;
  categoryName: string;
  productName: string;
  description: string;
  image: string;
}

interface ProductContextType {
  products: Product[];
  addProduct: (product: Product) => void;
  deleteProduct: (id: number) => void;
}

export const ProductContext = createContext<ProductContextType | null>(null);

export const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);


  const addProduct = (product: Product) => {
    setProducts((prev) => [...prev, product]);
  };


  const deleteProduct = (id: number) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, deleteProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
