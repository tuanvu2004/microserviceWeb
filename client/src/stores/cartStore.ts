import { create } from "zustand";
import { CartStoreActionsType, CartStoreStateType, CartItemType } from "../types";
import { persist, createJSONStorage } from "zustand/middleware";

const useCartStore = create<CartStoreStateType & CartStoreActionsType>()(
  persist(
    (set) => ({
      cart: [],
      hasHydrated: false,

      addToCart: (product: CartItemType) =>
        set((state) => {
          const existingIndex = state.cart.findIndex(
            (p) => p.id === product.id
          );

          if (existingIndex !== -1) {
            const updatedCart = [...state.cart];
            updatedCart[existingIndex].quantity += product.quantity || 1;
            return { cart: updatedCart };
          }

          return {
            cart: [
              ...state.cart,
              {
                ...product,
                quantity: product.quantity || 1,
              },
            ],
          };
        }),

      removeFromCart: (productToRemove: CartItemType) =>
        set((state) => ({
          cart: state.cart.filter((p) => p.id !== productToRemove.id),
        })),

      clearCart: () => set({ cart: [] }),

      updateQuantity: (productId: number | string, newQuantity: number) =>
        set((state) => ({
          cart: state.cart.map((p) =>
            p.id === productId ? { ...p, quantity: newQuantity } : p
          ),
        })),
    }),

    {
      name: "cart",
      storage: createJSONStorage(() => localStorage),

      onRehydrateStorage: () => (state) => {
        if (state) {
          state.hasHydrated = true;
        }
      },
    }
  )
);

export default useCartStore;
