import React from 'react'
import { View, Text, Image } from 'react-native'

export default function About() {

    const yelpRestInfo = {
        name: "FarmHouse Kitchen Thai Cuisine",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
        price: "$$",
        reviews: "1500",
        rating: 4.5,
        categories: [{ title: "thai" }, { title: "Comfort Food" }],
    }

    const { name, image, price, reviews, rating, categories } = yelpRestInfo;

    const formattedCategories = categories.map((cat) => cat.title).join(" • ");

    const desc = `${formattedCategories} ${price ? " • " + price : ""
        } • 🎫 • ${rating} ⭐ (${reviews}+)`;

    return (
        <View>
            <RestaurantImage image={image} />
            <RestaurantName name={name} />
            <RestaurantDescription desc={desc} />
        </View>
    )
}

const RestaurantImage = (props) => (
    <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
);

const RestaurantName = (props) => (
    <Text
        style={{
            fontSize: 29,
            fontWeight: "600",
            marginTop: 10,
            marginHorizontal: 15,
        }}
    >
        {props.name}
    </Text>
);

const RestaurantDescription = (props) => (
    <Text
        style={{
            marginTop: 10,
            marginHorizontal: 15,
            fontWeight: "400",
            fontSize: 15.5,
        }}
    >
        {props.desc}
    </Text>
);
