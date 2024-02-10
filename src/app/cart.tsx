import { Header } from "@/components/header";
import { View } from "react-native";

import { Product } from '@/components/product';
import { ProductCartProps, useCartStore } from '@/stores/cart-store';


export default function Cart() {
    const cartStore = useCartStore();
    return(
        <View className="flex-1 mt-8">
            <Header title="Seu carrinho" />

            <View className="p-5 flex-1">         
                {cartStore.products.map((product) => (
                  <Product
                    key={product.id}
                    data={product}
                  />
                ))}
            </View>
        </View>
    )
}