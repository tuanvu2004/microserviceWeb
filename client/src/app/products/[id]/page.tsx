"use client"

import { ProductType, formatCurrency } from "@/src/types";
import Image from "next/image";
import React, { useState } from 'react';
import StarRating from "../../../components/StarRating";
import QuantitySelector from "../../../components/QuantitySelector";
import { Plus, ShoppingCart } from "lucide-react";
import useCartStore from "@/src/stores/cartStore";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const product: ProductType = {
    id: 1,
    name: 'Bếp từ đơn Sunhouse SHD6803',
    code: 'SHD6803',
    price: 850000,
    compareAtPrice: 990000,
    images: {
        main: '/products/Bếp từ đơn Sunhouse SHD6803.jpg',
        gallery: [
            '/products/a1.png',
            '/products/a2.png',
            '/products/a3.png',
            '/products/a4.png',
        ],
    },
    rating: 4.9,
    description: 'Bếp từ Sunhouse SHD6803 sử dụng công nghệ tiên tiến, thiết kế mỏng nhẹ, giúp nấu ăn nhanh chóng và an toàn. Đây là sản phẩm không thể thiếu trong căn bếp hiện đại.',
    features: {
        "Công suất": "2000W",
        "Chất liệu mặt": "Mặt kính chịu nhiệt cao cấp",
        "Điều khiển": "Cảm ứng",
        "Chức năng chính": "Hẹn giờ thông minh",
        "Kích thước": "30 x 30 x 5 cm"
    }
};

const ProductPage = ({ params }: { params: { id: string } }) => {
    const router = useRouter();

    const allImages = [product.images.main, ...(product.images.gallery || [])];
    const [mainImage, setMainImage] = useState(product.images.main);
    const [quantity, setQuantity] = useState(1);

    const { addToCart } = useCartStore()

    const handleAddToCard = () => {
        addToCart({
            ...product, quantity
        });
        toast.success(`Đã thêm ${quantity} sản phẩm ${product.name} vào giỏ hàng!`)
    }

    const handleBuyNow = () => {
        addToCart({
            ...product, quantity
        });
        toast.success(`Đã thêm ${quantity} sản phẩm ${product.name} vào giỏ hàng!`);
        router.push('/cart');
    }

    return (
        <div className='flex flex-col gap-8 lg:flex-row md:gap-16 m-8 container mx-auto p-4'>
            <div className="w-full lg:w-5/12 flex flex-col gap-4">
                {/* Main Image */}
                <div className="relative aspect-square w-full rounded-xl overflow-hidden border-2 border-gray-200 shadow-xl bg-white">
                    <Image
                        src={mainImage}
                        alt={product.name}
                        fill
                        className="object-contain p-6 transition-opacity duration-300"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        priority
                    />
                </div>
                {/* Thumbnails */}
                <div className="grid grid-cols-5 gap-3 pb-2">
                    {allImages.map((imgUrl, index) => (
                        <div
                            key={index}
                            onClick={() => setMainImage(imgUrl)}
                            className={`relative aspect-square rounded-lg overflow-hidden border-2 cursor-pointer transition-all 
                            ${mainImage === imgUrl ? 'border-red-600 shadow-lg p-1' : 'border-gray-300 hover:border-gray-500 p-1'}`}>
                            <Image
                                src={imgUrl}
                                alt={`Thumbnail ${index + 1}`}
                                fill
                                className="object-contain"
                                sizes="96px"
                            />
                        </div>
                    ))}
                </div>
                {/* THÔNG SỐ KỸ THUẬT */}
                <div className="mt-4 p-4 border border-gray-200 rounded-lg bg-white shadow-md">
                    <h3 className="text-xl font-bold mb-3 text-gray-800">Thông số kỹ thuật</h3>

                    <table className="w-full text-sm text-left border-collapse">
                        <tbody>
                            {Object.entries(product.features).map(([key, value], index) => (
                                <tr
                                    key={key}
                                    className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-b border-gray-100`}
                                >
                                    <td className="px-4 py-3 font-medium w-1/3 text-gray-600">
                                        {key}
                                    </td>
                                    <td className="px-4 py-3 w-2/3 text-gray-800">
                                        {value}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>

            {/* DETAILS  */}
            <div className="w-full lg:w-7/12 flex flex-col gap-4">
                <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
                <div className="flex items-center gap-6 text-sm">
                    <div className="flex items-center gap-1">
                        <StarRating rating={product.rating ?? 0} size={4} />
                        <span className="text-sm text-gray-600 ml-1">({product.rating ?? 0})</span>
                    </div>
                    <span className="text-gray-500 font-medium">| Mã SP: {product.code}</span>
                </div>

                <hr className="my-1" />

                {/* Price */}
                <div className="flex flex-row items-center gap-4">
                    {/* Giá mới */}
                    <p className="font-extrabold text-2xl text-red-600">
                        {formatCurrency(product.price)}
                    </p>
                    {/* Giá cũ */}
                    {product.compareAtPrice && product.compareAtPrice > product.price && (
                        <p className="text-sm text-gray-500 line-through pt-1">
                            {formatCurrency(product.compareAtPrice)}
                        </p>
                    )}
                </div>

                {/* Description */}
                <p className="text-base text-gray-700 leading-relaxed">{product.description}</p>
                {/* QUANTITY */}
                <div className="flex items-center space-x-4">
                    <QuantitySelector
                        quantity={quantity}
                        setQuantity={setQuantity} />
                </div>
                {/* BUTTON */}
                <div className="flex flex-row gap-4 mt-2">
                    <button onClick={handleAddToCard}
                        className="flex items-center gap-2 px-5 py-2.5 
                    bg-gray-900 text-white rounded-xl shadow 
                    hover:bg-gray-700 active:scale-[0.97] 
                    transition-all duration-200 cursor-pointer">
                        <Plus className="w-4 h-4" />
                        <span className="font-medium">Thêm vào giỏ</span>
                    </button>
                    <button
                        onClick={handleBuyNow}
                        className="flex items-center gap-2 px-5 py-2.5 
                    bg-red-600 text-white rounded-xl shadow 
                    hover:bg-red-700 active:scale-[0.97] 
                    transition-all duration-200 cursor-pointer"
                    >
                        <ShoppingCart className="w-4 h-4" />
                        <span className="font-medium">Mua ngay</span>
                    </button>

                </div>

            </div>
        </div>
    );
};

export default ProductPage;