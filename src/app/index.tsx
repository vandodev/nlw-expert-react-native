import { useState } from 'react';
import { CategoryButton } from "@/components/category-button"
import { Header } from "@/components/header"
import {View,Text, FlatList, SectionList} from "react-native"
import { CATEGORIES, MENU} from '@/utils/data/products';
import { Link } from 'expo-router';

export default function Home(){
    const [category, setCategory] = useState(CATEGORIES[0]);

    function handleCategorySelect(selectedCategory: string) {
        setCategory(selectedCategory);
    }

    return(
        <View className="bg-slate-900 pt-8 flex-1">
            <Header title="Faça seu pedido" cartQuantityItems={5}/> 

        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item}
           
            renderItem={({ item }) => (
                <CategoryButton
                    title={item}
                    isSelected={item === category}
                    onPress={() => handleCategorySelect(item)}
                />
            )}
            horizontal
            className="max-h-10 mt-5"
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
        />

        <SectionList
            // ref={sectionListRef}
            sections={MENU}
            keyExtractor={(item) => item.id}
            stickySectionHeadersEnabled={false}
            renderItem={({ item }) => (
               <Text className='text-white'>{item.title}</Text>
            )} 
            renderSectionHeader={({ section: { title } }) => (
                <Text className="text-xl text-white font-heading mt-8 mb-3">{title}</Text>
            )}
            className="flex-1 p-5"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 100 }}
        />

           
        </View>
    )
}

