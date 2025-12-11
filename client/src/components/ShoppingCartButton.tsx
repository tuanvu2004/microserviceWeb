"use client"

import { ShoppingCart } from "lucide-react";
import Link from "next/link"
import useCartStore from "../stores/cartStore";

const ShoppingCartButton = () => {
  const {cart, hasHydrated} = useCartStore()

  if(!hasHydrated) return null;
  return (
    <Link href="/cart" className='relative'>
      <ShoppingCart className="w-4 h-4 text-gray-600" />
      <span className="absolute -top-2 -right-2 bg-amber-400 text-gray-600 rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-semibold leading-none">
        {cart.reduce((acc,item)=> acc+item.quantity,0)}
      </span>

    </Link>
  );
};

export default ShoppingCartButton;
