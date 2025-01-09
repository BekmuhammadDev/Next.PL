"use client";

import { ProductProvider } from '@/context/context';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Index: React.FC<Props> = ({ children }) => {
  return (
    <ProductProvider>
      <main className="min-h-screen w-full">
        {children}
      </main>
    </ProductProvider>
  );
};

export default Index;
