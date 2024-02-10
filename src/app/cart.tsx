import { Header } from "@/components/header";
import { View, Text, ScrollView } from "react-native";

import { Product } from '@/components/product';
import { ProductCartProps, useCartStore } from '@/stores/cart-store';
import { formatCurrency } from "@/utils/functions/format-currency";
import { Input } from "@/components/input";


export default function Cart() {
    const cartStore = useCartStore();

    const total = formatCurrency(
      cartStore.products.reduce(
        (total, product) => total + product.price * product.quantity,
        0,
      ),
    );

    
    return(
        <View className="flex-1 mt-8">
         <Header title="Seu carrinho"/>
          <ScrollView>                  
              
            <View className="p-5 flex-1">
              {cartStore.products.length > 0 ? (
                <View className="border-b border-slate-700">
                  {cartStore.products.map((product) => (
                    <Product
                      key={product.id}
                      data={product}
                    />
                  ))}
                </View>
              ) : (
                <Text className="font-body text-slate-400 text-center my-8">
                  Seu carrinho está vazio.
                </Text>
              )}                      
            </View>           

            <View className="flex-row gap-2 items-center mt-5 mb-4">
                <Text className="text-white text-xl font-subtitle">Total:</Text>
                <Text className="text-lime-400 text-2xl font-heading">{total}</Text>
            </View>

            <Input
              placeholder="Informe o endereço de entrega com rua, bairro, CEP, número e complemento..."
              blurOnSubmit={true}
              returnKeyType="next"
            />

          </ScrollView> 

        </View>
    )
}