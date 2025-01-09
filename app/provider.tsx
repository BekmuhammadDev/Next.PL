// app/providers.tsx
'use client'

import { ProductProvider } from "@/context/context"


export function Providers({ children }: { children: React.ReactNode }) {
  return <ProductProvider>{children}</ProductProvider>
}