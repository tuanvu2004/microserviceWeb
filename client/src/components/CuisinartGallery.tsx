"use client";

import React, { useRef, useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const galleryItems = [
    { id: 4, src: '/familyImg/image6.png', alt: '', overlayText: 'Đam mê' },
    { id: 5, src: '/familyImg/image5.png', alt: '', overlayText: 'Vui vẻ' },
    { id: 1, src: '/familyImg/image1.png', alt: '', overlayText: 'Gia đình' },
    { id: 2, src: '/familyImg/image2.png', alt: '', overlayText: 'Ngọn lửa' },
    { id: 3, src: '/familyImg/image3.png', alt: '', overlayText: 'Sói cô độc' },
];

const CuisinartGallery: React.FC = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const scroll = useCallback((direction: 'left' | 'right') => {
        const container = scrollContainerRef.current;
        if (container) {
            const itemWidth = container.clientWidth / 3;
            const scrollAmount = direction === 'left' ? -itemWidth : itemWidth;
            
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    }, []);
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl md:text-5xl font-serif text-[#375736] mb-2">
                    Một tác phẩm của An Nguyen Home
                </h2>
                <p className=" text-lg mb-12 text-[#375736]">
                    Gắn thẻ <span className="font-serif bg-gray-100 px-1 py-0.5 rounded text-sm ">
                        #workofAnNguyen</span> để có cơ hội được giới thiệu.
                </p>

                <div className="flex items-center justify-center space-x-2 md:space-x-4 lg:space-x-6">

                    {/* Nút Trái (Ẩn trên màn hình nhỏ) */}
                    <button
                        aria-label="Previous Slide"
                        onClick={() => scroll('left')}
                        className="p-3 rounded-full text-[#375736] hover:bg-gray-100 transition-colors hidden sm:block">
                        <ChevronLeft size={36} />
                    </button>

                    {/* Danh sách ảnh */}
                    <div
                        ref={scrollContainerRef}
                        className="flex space-x-4 md:space-x-6 overflow-x-auto lg:overflow-x-hidden scrollbar-hide snap-x snap-mandatory">

                        {galleryItems.map((item) => (
                            <div
                                key={item.id}
                                className="w-full min-w-[280px] snap-center sm:w-[calc(50%-12px)] lg:w-[calc(33.3333%-16px)] lg:shrink-0">

                                <div className="relative aspect-9/16 overflow-hidden rounded-xl shadow-2xl group cursor-pointer">
                                    <Image 
                                        src={item.src} 
                                        alt={item.alt} 
                                        fill 
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-500 group-hover:scale-105" 
                                        loading="eager" />
                                    {item.overlayText && (
                                        <div className="absolute top-12 left-0 right-0 z-20 p-2 text-center">
                                            <p className="font-serif text-3xl font-bold text-white tracking-wider drop-shadow-md">
                                                {item.overlayText}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Nút Phải (Ẩn trên màn hình nhỏ) */}
                    <button 
                        aria-label="Next Slide"
                        onClick={() => scroll('right')}
                        className="p-3 rounded-full text-[#375736] hover:bg-gray-100 transition-colors hidden sm:block">
                        <ChevronRight size={36} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CuisinartGallery;