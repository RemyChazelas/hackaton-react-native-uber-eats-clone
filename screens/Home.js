import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import Categories from '../components/Categories'
import HeaderTabs from '../components/HeaderTabs'
import RestaurantItems, {
    localRestaurants,
} from '../components/RestaurantItems'
import SearchBar from '../components/SearchBar'

const YELP_API_KEY =
    "lr4gTILlkhZgShWHP_dkOTH98wSzlR6BQGRH22a2J4UYaiszE3V7XfLK3uOsWANQ7TrFK5-lLvvWlCsGzcQniqJxEFd96k2lKtHiXGykfB9zNGJ9rdfeh4ad7fCDYXYx";

export default function Home() {
    const [restaurantData, setRestaurantData] = useState(localRestaurants);
    // const [city, setCity] = useState("San Francisco");
    // const [activeTab, setActiveTab] = useState("Delivery");

    const getRestaurantsFromYelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=paris`;

        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
            },
        };

        return fetch(yelpUrl, apiOptions)
            .then((res) => res.json())
            .then((json) =>
                setRestaurantData(json.businesses)
            );
    };

    useEffect(() => {
        getRestaurantsFromYelp();
    }, []);

    return (
        <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
            <View style={{ backgroundColor: "white", padding: 15 }}>
                <HeaderTabs />
                <SearchBar />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItems restaurantData={restaurantData} />

            </ScrollView>
        </SafeAreaView>
    )
}
