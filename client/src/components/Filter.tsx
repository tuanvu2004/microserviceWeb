"use client"

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useCallback } from "react";

const Filter = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname(); 

    const currentSort = searchParams.get('sort') || 'newest'; 
    const handleSort = useCallback((sortValue: string) => {
        const params = new URLSearchParams(searchParams.toString());

        if (sortValue === 'newest') {
            params.delete('sort'); 
        } else {
            params.set('sort', sortValue); 
        }
        router.push(`${pathname}?${params.toString()}`);

    }, [searchParams, router, pathname]);

    return (
        <div className='flex items-center justify-end gap-2 text-sm text-gray-500 my-6'>
            <span>Sắp xếp theo:</span>
            <select 
                name="sort" 
                id="sort" 
                className="ring-1 ring-gray-200 shadow-md p-1 rounded-sm"
                onChange={(e) => handleSort(e.target.value)} 
                defaultValue={currentSort} 
            >
                <option value="newest">Mới nhất</option>
                <option value="oldest">Cũ nhất</option>
                <option value="asc">Giá: thấp đến cao</option>
                <option value="desc">Giá: cao đến thấp</option>
            </select>
        </div>
    );
};

export default Filter;