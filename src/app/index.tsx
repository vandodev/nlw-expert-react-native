import { CategoryButton } from "@/components/category-button"
import { Header } from "@/components/header"
import {View, Text} from "react-native"
export default function Home(){
    return(
        <View className="bg-slate-900 pt-8 flex-1">
            <Header title="Faça seu pedido" cartQuantityItems={5}/> 

            <View className="flex-row gap-4">
                 <CategoryButton title="Lanche do dia" isSelected/>
                 <CategoryButton title="Promoções"/>
                 <CategoryButton title="Sobremesa"/>
                 <CategoryButton title="Bebidas"/>
            </View>
           
        </View>
    )
}

