import { email, z } from "zod";

export type ProductType = {
  id: string | number;
  name: string;
  price: number;
  compareAtPrice?: number;
  images: {
    main: string;
    gallery?: string[];
  };
  rating?: number;
  code: string;
  description: string;
  features: Record<string, string>;
};

export type ProductsType = ProductType[];

export type CartItemType = ProductType & {
  quantity: number;
};
export type CartItemsType = CartItemType[];

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(amount);
};

export const shippingFormSchema = z.object({
  name: z.string().min(1, "*Vui lòng nhập dữ liệu!"),
  email: z
  .string()
  .min(1, "*Vui lòng nhập email!")
  .email("*Email phải có dạng như you@gmail.com!"),
  phone: z
    .string()
    .min(7, "*Vui lòng nhập số điện thoại hợp lệ!")
    .max(11, "*Vui lòng nhập số điện thoại hợp lệ!")
    .regex(/^\d+$/, "*Vui lòng nhập số điện thoại hợp lệ!"),

  address: z.string().min(1, "*Vui lòng nhập dữ liệu!"),
});

export type ShippingFormInputs = z.infer<typeof shippingFormSchema>;

export type CartStoreStateType = {
  cart: CartItemType[];
  hasHydrated: boolean;
};

export type CartStoreActionsType = {
  addToCart: (product: CartItemType) => void;
  removeFromCart: (product: CartItemType) => void;
  clearCart: () => void;

  updateQuantity: (productId: number | string, quantity: number) => void;
};
