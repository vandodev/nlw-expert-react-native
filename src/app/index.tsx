import { CategoryButton } from "@/components/category-button"
import { Header } from "@/components/header"
import {View, FlatList} from "react-native"
import { CATEGORIES} from '@/utils/data/products';

export default function Home(){
    return(
        <View className="bg-slate-900 pt-8 flex-1">
            <Header title="Faça seu pedido" cartQuantityItems={5}/> 

        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
            <CategoryButton
                title={item}
            />
            )}
            horizontal
            className="max-h-10 mt-5"
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
        />

           
        </View>
    )
}

