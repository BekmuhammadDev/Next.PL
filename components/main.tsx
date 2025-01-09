"use client"
import { ProductProvider } from '@/context/context';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';

const index = ({children}:{children:React.JSX.Element | any}) => {
    return (
        <ProductProvider>
        <main className='min-h-screen w-full'>
            {children}
        </main>
        </ProductProvider>
    );
};

export default index;