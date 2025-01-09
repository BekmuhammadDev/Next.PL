"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const Index: React.FC = () => {

  const pathname = usePathname();
  return (
    <aside className='bg-white text-black border w-[179px] p-5'>

        <nav>

          <ul>
            <li>
              <Link className={`link ${pathname === "/" ? "active" : ""}`} href="/" >Главная  </Link>
            </li>
            <li>
              <Link className={`link ${pathname === "/category" ? "active" : ""}`} href="/category" >Котегории  </Link>
            </li>
            <li>
              <Link className={`link ${pathname === "/product" ? "active" : ""}`} href="/product" >Товар</Link>
            </li>
            <li>
              <Link className={`link ${pathname === "/cart" ? "active" : ""}`} href="/cart" >Корзина</Link>
            </li>
            <li>
              <Link className={`link ${pathname === "/feature" ? "active" : ""}`} href="/feature" >Избранное</Link>
            </li>
          </ul>
        </nav>

    </aside>
  );
};

export default Index;