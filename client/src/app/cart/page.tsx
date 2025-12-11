"use client";

import React, { useState, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowRight, Trash2 } from "lucide-react";

import useCartStore from "@/src/stores/cartStore";
import PrimaryButtonLink from "@/src/components/PrimaryButtonLink";
import ShippingForm, { ShippingFormRef } from "@/src/components/ShippingForm";
import PaymentForm from "@/src/components/PaymentForm";
import QuantitySelector from "@/src/components/QuantitySelector";
import { ShippingFormInputs, formatCurrency } from "@/src/types";

// --------------------------- TYPES ---------------------------- //

type PaymentMethodType = "cod" | "bank";

const steps = [
  { id: 1, title: "Giỏ hàng của bạn" },
  { id: 2, title: "Địa chỉ giao hàng" },
  { id: 3, title: "Phương thức thanh toán" },
];

// --------------------------- DISPLAY BLOCK ---------------------------- //

interface OrderCostDisplayProps {
  subtotal: number;
  discountAmount: number;
  shippingFee: number;
  total: number;
}

const OrderCostDisplay = ({
  subtotal,
  discountAmount,
  shippingFee,
  total,
}: OrderCostDisplayProps) => (
  <>
    <h2 className="font-semibold pb-6 text-center">Chi phí đơn hàng</h2>

    <div className="flex flex-col gap-4">
      <Row label="Tổng tiền hàng" value={formatCurrency(subtotal)} />

      <Row
        label="Giảm giá (10%)"
        value={`- ${formatCurrency(discountAmount)}`}
        valueClass="text-red-600"
      />

      <Row
        label="Phí vận chuyển"
        value={formatCurrency(shippingFee)}
      />

      <div className="border-t pt-4 mt-4"></div>

      <Row
        label="Tổng cộng"
        value={formatCurrency(total)}
        bold
      />
    </div>
  </>
);

interface RowProps {
  label: string;
  value: string | number;
  valueClass?: string;
  bold?: boolean;
}

const Row = ({ label, value, valueClass = "", bold = false }: RowProps) => (
  <div className="flex justify-between text-sm">
    <p className={`text-gray-500 ${bold ? "font-bold text-black" : ""}`}>{label}</p>
    <p className={`font-medium ${valueClass} ${bold ? "font-bold" : ""}`}>{value}</p>
  </div>
);

interface PaymentDetailsDisplayProps {
  paymentMethod: PaymentMethodType;
  totalAmount: number;
}

const PaymentDetailsDisplay = ({
  paymentMethod,
  totalAmount,
}: PaymentDetailsDisplayProps) => (
  <div className="text-left flex flex-col gap-4 p-4 border rounded-lg bg-blue-50 mt-2">
    <p className="font-bold text-lg">
      Tổng tiền cần thanh toán:{" "}
      <span className="text-red-600">{formatCurrency(totalAmount)}</span>
    </p>

    <p className="text-sm text-gray-700">
      Phương thức đã chọn:
      <span className="font-semibold ml-2">
        {paymentMethod === "cod"
          ? "Thanh toán khi nhận hàng (COD)"
          : "Chuyển khoản Ngân hàng"}
      </span>
    </p>

    {paymentMethod === "bank" && (
      <div className="text-xs p-3 bg-white border rounded">
        <p className="font-semibold">Thông tin chuyển khoản:</p>
        <p>Ngân hàng: VPBank</p>
        <p>Số tài khoản: 0337901857</p>
        <p>Nội dung: THANHTOAN_[Mã đơn hàng]</p>
      </div>
    )}
  </div>
);

// ------------------------------ MAIN PAGE -------------------------------- //

const CartPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeStep = parseInt(searchParams.get("step") || "1", 10);

  const shippingFormRef = useRef<ShippingFormRef>(null);

  // Store
  const { cart, removeFromCart, updateQuantity } = useCartStore();

  // State
  const [shippingData, setShippingData] = useState<ShippingFormInputs>();
  const [paymentMethod, setPaymentMethod] =
    useState<PaymentMethodType>("cod");

  // ----------------------- PRICE CALCULATION ----------------------- //

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const discountAmount = Math.floor(subtotal * 0.1);
  const shippingFee = subtotal > 0 ? 30000 : 0;
  const total = subtotal - discountAmount + shippingFee;

  // -------------------------- STEP HANDLING ------------------------- //

  const handleContinue = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert("Giỏ hàng đang trống. Hãy thêm sản phẩm để tiếp tục!");
      return;
    }

    if (activeStep === 2) {
      shippingFormRef.current?.submitForm();
      return;
    }

    if (activeStep < steps.length) {
      router.push(`?step=${activeStep + 1}`);
    }
  };

  const handleShippingSuccess = (data: ShippingFormInputs) => {
    setShippingData(data);
    router.push("?step=3");
  };

  // ------------------------------ RENDER ------------------------------ //

  return (
    <div className="flex flex-col gap-8 items-center justify-center mt-12 mb-12">
      {/* STEP HEADER */}
      <StepHeader activeStep={activeStep} />

      <div className="w-full flex flex-col lg:flex-row gap-16">
        {/* LEFT */}
        <div className="w-full lg:w-7/12 shadow-lg border border-gray-100 p-8 rounded-lg flex flex-col gap-8 font-bold text-center">
          {activeStep === 1 &&
            cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
              />
            ))}

          {activeStep === 2 && (
            <ShippingForm
              ref={shippingFormRef}
              onNextStep={handleShippingSuccess}
            />
          )}

          {activeStep === 3 && shippingData && (
            <PaymentForm
              shippingData={shippingData}
              totalAmount={total}
              selectedMethod={paymentMethod}
              onMethodChange={setPaymentMethod}
            />
          )}
        </div>

        {/* RIGHT */}
        <div className="w-full lg:w-5/12 shadow-lg border border-gray-100 p-8 rounded-lg flex flex-col gap-8 justify-between">
          {activeStep < 3 ? (
            <OrderCostDisplay
              subtotal={subtotal}
              discountAmount={discountAmount}
              shippingFee={shippingFee}
              total={total}
            />
          ) : (
            <PaymentDetailsDisplay
              paymentMethod={paymentMethod}
              totalAmount={total}
            />
          )}

          <PrimaryButtonLink
            href="#"
            onClick={handleContinue}
            text={activeStep >= 3 ? "thanh toán" : "tiếp tục"}
            className={`w-full ${cart.length === 0
              ? "opacity-50 cursor-not-allowed pointer-events-none"
              : ""
              }`}
            icon={<ArrowRight size={20} />}
          />
        </div>
      </div>
    </div>
  );
};

export default CartPage;

// ========================= SUB COMPONENTS ========================= //

const StepHeader = ({ activeStep }: { activeStep: number }) => (
  <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
    {steps.map((s) => (
      <div
        key={s.id}
        className={`flex items-center gap-2 border-b-2 pb-4 ${activeStep === s.id ? "border-gray-800" : "border-gray-400"
          }`}
      >
        <div
          className={`w-6 h-6 rounded-full text-white flex items-center justify-center ${activeStep === s.id ? "bg-gray-800" : "bg-gray-200"
            }`}
        >
          {s.id}
        </div>

        <p
          className={`text-l font-bold ${activeStep === s.id ? "text-gray-800" : "text-gray-400"
            }`}
        >
          {s.title}
        </p>
      </div>
    ))}
  </div>
);

interface CartItemProps {
  item: any;
  removeFromCart: (item: any) => void;
  updateQuantity: (id: number | string, quantity: number) => void;
}

const CartItem = ({ item, removeFromCart, updateQuantity }: CartItemProps) => (
  <div className="flex items-center justify-between">
    <div className="flex gap-8">
      <div className="relative w-32 h-32 bg-gray-50 rounded-lg overflow-hidden shrink-0">
        <Image
          src={item.images.main}
          alt={item.name}
          fill
          className="object-contain"
        />
      </div>

      <div className="flex flex-col justify-between h-24 text-left pt-3 gap-2">
        <div className="flex flex-col gap-1 text-gray-500">
          <p className="font-semibold text-gray-800 line-clamp-2">{item.name}</p>

          <QuantitySelector
            quantity={item.quantity}
            setQuantity={(q) => updateQuantity(item.id, q)}
          />

          <p className="text-sm">
            Đơn giá: {formatCurrency(item.price)}
          </p>
        </div>

        <p className="">
          Thành tiền:
          <span className="text-red-600">
            {" "}
            {formatCurrency(item.price * item.quantity)}
          </span>
        </p>
      </div>
    </div>

    <button
      onClick={() => removeFromCart(item)}
      className="w-8 h-8 rounded-full bg-red-100 hover:bg-red-300 transition-all flex items-center justify-center shrink-0"
    >
      <Trash2 className="w-3 h-3" />
    </button>
  </div>
);
