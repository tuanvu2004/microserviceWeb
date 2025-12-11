"use client"

import Link from "next/link";
import { ProductType, formatCurrency } from "../types";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import useCartStore from "../stores/cartStore";
import { toast } from 'react-toastify';
import StarRating from "./StarRating";
import React from "react";

const ProductCard: React.FC<{ product: ProductType }> = ({ product }) => {
  const { addToCart } = useCartStore()

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity: 1,
    })
    toast.success(`Đã thêm sản phẩm ${product.name} vào giỏ hàng!`)
  }

  return (
    <div className='block shadow-lg rounded-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 bg-white border border-gray-100'>
      <Link href={`/products/${product.id}`} className="block">
        {/* IMAGE */}
        <div className="relative aspect-square p-2 w-full">
          <Image
            src={product.images.main}
            alt={product.name}
            fill
            className="object-contain transform scale-90 transition-transform duration-300 group-hover:scale-95"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </div>

        {/* PRODUCT NAME */}
        <div className="px-4 pt-4 ">
          <h1
            className="font-semibold text-sm h-12 overflow-hidden text-black group-hover:text-red-600 transition-colors">
            {product.name}
          </h1>
        </div>
      </Link>

      <div className="flex flex-col gap-2 px-4 py-4 pt-1">
        <div className="flex flex-col gap-1">
          {/* MÃ HÀNG */}
          <p className="text-xs text-gray-500">
            Mã: <span className="font-medium text-gray-700">{product.code}</span>
          </p>

          {/* ĐÁNH GIÁ SAO */}
          <div className="flex items-center gap-1">
            <StarRating rating={product.rating ?? 0} size={4} />
            <span className="text-sm text-gray-600 ml-1">({product.rating ?? 0})</span>
          </div>
        </div>

        {/* PRICE AND ADD TO CARD BUTTON */}
        <div className="flex items-center justify-between">
          <div className="flex flex-row items-center gap-4">
            {/* Giá mới */}
            <p className="font-extrabold text-l text-red-600">
              {formatCurrency(product.price)}
            </p>
            {/* Giá cũ */}
            {product.compareAtPrice && product.compareAtPrice > product.price && (
              <p className="text-sm text-gray-500 line-through pt-1">
                {formatCurrency(product.compareAtPrice)}
              </p>
            )}
          </div>

          {/* BUTTON ADD */}
          <button
            onClick={handleAddToCart}
            className="bg-black text-white p-2 rounded-full shadow-md hover:bg-red-700 transition-colors cursor-pointer transform hover:scale-110"
            title="Thêm vào giỏ hàng">
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProductCard);