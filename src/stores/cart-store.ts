import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import * as cartInMemory from './helpers/cart-in-memory';

import { ProductProps } from '@/utils/data/products';

export type ProductCartProps = ProductProps & {
  quantity: number;
};

type StateProps = {
  products: ProductCartProps[]; 
  add: (product: ProductProps) => void;
  remove: (productId: string) => void;
};

export const useCartStore = create<StateProps>((set) => ({
      products: [],

      add: (product: ProductProps) =>
        set((state) => ({
          products: cartInMemory.add(state.products, product),
        })),

        remove: (productId: string) =>
        set((state) => ({
          products: cartInMemory.remove(state.products, productId),
        })),

}));