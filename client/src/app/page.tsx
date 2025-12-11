import HeroBanner from "@/src/components/HeroBanner";
import ProductLayout from "@/src/components/ProductLayout";
import FeaturedProducts from "@/src/components/FeaturedProducts";
import CuisinartGallery from "@/src/components/CuisinartGallery";
// Import icons từ thư viện Lucide để dùng (Giả định bạn có thư viện này)
import { FileText, Truck, Calendar } from 'lucide-react'; 

const Homepage = async ({ searchParams }: { searchParams: Promise<{ category: string }> }) => {
  const category = (await searchParams).category;

  return (
    // BANNER TOP
    <main className="w-full">
      <HeroBanner
        imageSrc="/US_TOA26_SM50_2000x750_Web_Banner_0001.jpg"
        title="Ưu Đãi Nhà Bếp Cuối Năm"
        description="Mua sắm ngay - Giảm giá lớn"
        linkHref="/products"
        linkText="MUA NGAY" />
      {/* FEATURE PRODUCT */}
      <ProductLayout>
        <FeaturedProducts />
      </ProductLayout>

      <HeroBanner
        imageSrc="/gigapixel-banner2.png"
        title="Bếp An Nguyên | Kiến Tạo Không Gian Bếp"
        description="“ Chúng tôi tin rằng, bếp không chỉ là nơi nấu nướng, mà là không gian của những câu chuyện, tiếng cười và khoảnh khắc sum vầy. Sứ mệnh của chúng tôi là kiến tạo nên những “trái tim ngôi nhà” hoàn hảo – nơi mỗi thiết bị cao cấp không chỉ mang lại sự tiện nghi vượt trội, mà còn trở thành người bạn đồng hành, gìn giữ và thắp lửa cho những bữa cơm đầm ấm, những kỷ niệm ngọt ngào. ”"
        linkHref="/products"
        linkText="Mua ngay" />

      <CuisinartGallery />

      <section className="bg-amber-50 py-12 md:py-24 px-4 border-t border-gray-100 text-[#375736]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif   mb-12">
            Sự bình yên trong Tâm
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Bảo hành */}
            <div className="flex flex-col items-center p-4">
              <FileText className="w-12 h-12 mb-4 " />
              <h3 className="text-xl font-semibold mb-3 ">Bảo hành</h3>
              <p className="text-gray-700 leading-relaxed max-w-xs">
                Chúng tôi tin tưởng vào sản phẩm của mình nên chúng tôi cung cấp chế độ bảo hành để đảm bảo chất lượng.
              </p>
            </div>

            {/* Vận chuyển */}
            <div className="flex flex-col items-center p-4">
              <Truck className="w-12 h-12 mb-4 " />
              <h3 className="text-xl font-semibold mb-3 ">
                Miễn phí vận chuyển cho đơn hàng từ 1 triệu đồng trở lên
              </h3>
              <p className="text-gray-700 leading-relaxed max-w-xs">
                Nhận miễn phí vận chuyển cho mọi đơn hàng trên 1 triệu đồng la tại Hà Nội.
              </p>
            </div>

            {/* Trả hàng */}
            <div className="flex flex-col items-center p-4">
              <Calendar className="w-12 h-12 mb-4 " />
              <h3 className="text-xl font-semibold mb-3">
                Trả hàng trong vòng 30 ngày
              </h3>
              <p className="text-gray-700 leading-relaxed max-w-xs">
                Nếu bạn không hài lòng với sản phẩm đã mua, bạn có thể trả lại hàng hóa chưa sử dụng trong vòng 30 ngày để được hoàn lại toàn bộ tiền.
              </p>
            </div>
          </div>
        </div>
      </section>
      
    </main>
  );
};

export default Homepage;