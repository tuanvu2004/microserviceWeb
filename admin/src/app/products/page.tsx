import { Product,columns } from "./columns";
import { DataTable } from "./data-table";

const getData = async (): Promise<Product[]> => {
  return [
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
    {
        id: 5,
        name: 'Máy lọc nước Sunhouse SHR8537B',
        code: 'SHR8537B',
        price: 4335000,
        compareAtPrice: 4335000,
        images: {
            main: '/products/May-loc-nuoc-Sunhouse-SHR8537B.gif',
            gallery: [],
        },
        rating: 4,
        description: 'Máy lọc nước 7 lõi, cung cấp nguồn nước sạch và khoáng chất có lợi cho sức khỏe.',
        features: { 
            "Số lõi lọc": "7 lõi",
            "Công nghệ": "RO",
            "Công suất lọc": "10 - 15 lít/giờ",
            "Bảo hành": "12 tháng"
        },
    },
    {
        id: 6,
        name: 'DAO GỌT HOA QUẢ CLASSIC SUNHOUSE KS-KN100CP',
        code: 'KS-KN100CP',
        price: 49000,
        compareAtPrice: 59000,
        images: {
            main: '/products/anh bai viét 2(67).png',
            gallery: [],
        },
        rating: 4.2,
        description: 'Dao gọt hoa quả lưỡi sắc bén, tay cầm nhựa chắc chắn.',
        features: { 
            "Chất liệu lưỡi": "Thép không gỉ",
            "Tay cầm": "Nhựa PP",
            "Chiều dài": "20 cm"
        },
    },
    {
        id: 7,
        name: 'BÁT TRỘN SALAD BIOZONE 900ML KB-MI900S',
        code: 'KB-MI900S',
        price: 90000,
        compareAtPrice: 120000,
        images: {
            main: '/products/2(237).jpg',
            gallery: [],
        },
        rating: 3.8,
        description: 'Bát trộn salad dung tích lớn, chịu nhiệt tốt.',
        features: { 
            "Dung tích": "900 ml",
            "Chất liệu": "Nhựa an toàn",
            "Sử dụng": "Lò vi sóng, máy rửa chén"
        },
    },
    {
        id: 8,
        name: 'Màng bọc thực phẩm Horeca SUNHOUSE KS-WR45250H',
        code: 'KS-WR45250H',
        price: 150000,
        compareAtPrice: 150000,
        images: {
            main: '/products/4(77).png',
            gallery: [],
        },
        rating: 4.3,
        description: 'Màng bọc thực phẩm an toàn, không chứa DEHP, chịu nhiệt tốt.',
        features: { 
            "Chiều rộng": "45 cm",
            "Chiều dài": "250 mét",
            "Chất liệu": "PE nguyên sinh",
            "An toàn": "Không DEHP"
        },
    },
]
};

const PaymentsPage = async () => {
  const data = await getData();
  return (
    <div className="">
      <div className="mb-8 px-4 py-2 bg-secondary rounded-md">
        <h1 className="font-semibold">All Products</h1>
      </div>
      <DataTable columns={columns} data={data}/>
    </div>
  );
};

export default PaymentsPage;
