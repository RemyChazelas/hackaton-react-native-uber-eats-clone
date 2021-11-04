import React from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import Categories from '../components/Categories'
import HeaderTabs from '../components/HeaderTabs'
import RestaurantItems from '../components/RestaurantItems'
import SearchBar from '../components/SearchBar'

export default function Home() {
    return (
        <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
            <View style={{ backgroundColor: "white", padding: 15 }}>
                <HeaderTabs />
                <SearchBar />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItems />

            </ScrollView>
        </SafeAreaView>
    )
}
