"use client"

import Link from 'next/link';
import ProductCard from './ProductCard';
import { products } from './ProductList';

const FeaturedProducts = () => {
    const top4Products = [...products]
        .sort((a, b) => {
            return (b.rating ?? 0) - (a.rating ?? 0);
        })
        .slice(0, 4);

    return (
        <section className="py-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold uppercase
                mb-8 border-b-2 border-yellow-500 font-serif text-[#375736] w-fit mx-auto">
                Sản phẩm nổi bật
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {top4Products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <Link href="/products"
                className="flex justify-end mt-4 hover:underline text-l text-gray-500 ">
                ✨ Xem thêm sản phẩm ✨</Link>
        </section>
    );
};

export default FeaturedProducts;    