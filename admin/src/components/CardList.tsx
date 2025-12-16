import Image from "next/image";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const popularProducts = [
  {
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
            "Chức năng": "Hẹn giờ thông minh",
            "Kích thước": "30 x 30 x 5 cm"
        },
    },
    {
        id: 2,
        name: 'Ấm siêu tốc Inox 1.5 lít Happy Time HTD1055.jpg',
        code: 'HTD1055',
        price: 160000,
        compareAtPrice: 199000,
        images: {
            main: '/products/Ấm siêu tốc Inox 1.5 lít Happy Time HTD1055.jpg',
            gallery: [],
        },
        rating: 4.8,
        description: 'Ấm siêu tốc inox dung tích 1.5L, đun sôi nhanh, có chế độ tự ngắt an toàn.',
        features: { 
            "Dung tích": "1.5 lít",
            "Chất liệu": "Inox cao cấp",
            "Công suất": "1500W",
            "Tính năng": "Tự ngắt khi nước sôi"
        },
    },
    {
        id: 3,
        name: 'Bộ nồi chảo inox 5 đáy Sunhouse SHG789',
        code: 'SHG789',
        price: 990000,
        compareAtPrice: 1190000,
        images: {
            main: '/products/bo-noi-chao.jpg',
            gallery: [],
        },
        rating: 4.5,
        description: 'Bộ nồi chảo inox 5 đáy bền bỉ, truyền nhiệt nhanh, phù hợp với mọi loại bếp.',
        features: { 
            "Số lượng": "3 món (2 nồi, 1 chảo)",
            "Chất liệu": "Inox 5 đáy",
            "Đáy từ": "Có, dùng cho mọi loại bếp",
            "Tay cầm": "Thiết kế chống nóng"
        },
    },
    {
        id: 4,
        name: 'Chảo chống dính Ultra titanium Sunhouse ST20B',
        code: 'ST20B',
        price: 350000,
        compareAtPrice: 595000,
        images: {
            main: '/products/Chảo chống dính Ultra titanium Sunhouse ST20B.jpg',
            gallery: [],
        },
        rating: 5,
        description: 'Chảo chống dính với lớp phủ Ultra Titanium siêu bền, an toàn tuyệt đối.',
        features: { 
            "Đường kính": "20 cm",
            "Lớp chống dính": "Ultra Titanium",
            "Chất liệu": "Hợp kim nhôm",
            "Sử dụng": "Bếp từ, bếp gas, hồng ngoại"
        },
    },
];

const latestTransactions = [
  {
    id: 1,
    title: "Order Payment",
    badge: "John Doe",
    image:
      "/users/1.jpg",
    count: 1400,
  },
  {
    id: 2,
    title: "Order Payment",
    badge: "Jane Smith",
    image:
      "/users/2.jpg",
    count: 2100,
  },
  {
    id: 3,
    title: "Order Payment",
    badge: "Michael Johnson",
    image:
      "/users/3.jpg",
    count: 1300,
  },
  {
    id: 4,
    title: "Order Payment",
    badge: "Lily Adams",
    image:
      "/users/4.jpg",
    count: 2500,
  },
  {
    id: 5,
    title: "Order Payment",
    badge: "Sam Brown",
    image:
      "/users/5.jpg",
    count: 1400,
  },
];

const CardList = ({ title }: { title: string }) => {
  
  return (
    <div className="">
      <h1 className="text-lg font-medium mb-2">{title}</h1>
      <div className="flex flex-col gap-2">
        {title === "Popular Products" ?popularProducts.map((item) => (
          <Card key={item.id} className="flex-row items-center justify-between gap-4 p-4">
            <div className="w-12 h-12 rounded-sm relative overflow-hidden">
              <Image
                src={item.images.main}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="flex-1 p-0">
              <CardTitle className="text-sm font-medium">{item.name}</CardTitle>
            </CardContent>
            <CardFooter className="p-0">${item.price} K</CardFooter>
          </Card>
        )) : latestTransactions.map(item=>(
          <Card key={item.id} className="flex-row items-center justify-between gap-4 p-4">
            <div className="w-12 h-12 rounded-sm relative overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="flex-1 p-0">
              <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
              <Badge variant="secondary">{item.badge}</Badge>
            </CardContent>
            <CardFooter className="p-0">${item.count /1000} K</CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CardList;
