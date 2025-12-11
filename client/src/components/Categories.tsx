  "use client"
  import {
    Utensils,
    Microwave,
    CookingPot,
    Soup,
    Grid2x2,
    Milk
  } from "lucide-react";
  import { usePathname, useRouter, useSearchParams } from "next/navigation";
  import { useCallback } from "react";

  const categories = [
    {
      name: "Tất cả",
      icon: <Grid2x2 className="w-4 h-4" />,
      slug: null, 
    },
    {
      name: "Đồ sơ chế",
      icon: <Utensils className="w-4 h-4" />,
      slug: "Đồ sơ chế",
    },
    {
      name: "Điện tử điện lạnh",
      icon: <Microwave className="w-4 h-4" />,
      slug: "Điện tử điện lạnh",
    },
    {
      name: "Đồ gia dụng",
      icon: <CookingPot className="w-4 h-4" />,
      slug: "Đồ gia dụng",
    },
    {
      name: "Dụng cụ ăn uống",
      icon: <Soup className="w-4 h-4" />,
      slug: "Dụng cụ ăn uống",
    },
    {
      name: "Đồ dùng nhà bếp",
      icon: <Milk className="w-4 h-4" />,
      slug: "Đồ dùng nhà bếp",
    }
  ]

  const Categories = () => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname(); 

    const selectedCategory = searchParams.get("category");

    const handleChange = useCallback((slug: string | null) => {
      const params = new URLSearchParams(searchParams.toString());

      if (slug === null) {
        params.delete("category");
      } else {
        params.set("category", slug);
      }
      router.push(`${pathname}?${params.toString()}`);

    }, [searchParams, router, pathname]);

    return (
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 bg-gray-100 p-2 rounded-lg mb-4 text-sm '>
        {categories.map(category => {
          const isSelected =
            (category.slug === null && selectedCategory === null) ||
            (category.slug === selectedCategory);

          return (
            <div
              className={`flex items-center justify-center gap-2 cursor-pointer px-2 py-1 rounded-md ${isSelected ? "bg-white" : "text-gray-600"
                }`}
              key={category.name}
              onClick={() => handleChange(category.slug)} 
            >
              {category.icon}
              <span className="translate-y-px">
                {category.name}
              </span>
            </div>
          );
        })}
      </div>
    );
  };

  export default Categories;