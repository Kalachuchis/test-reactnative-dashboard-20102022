import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, TouchableOpacity, View } from "react-native";
import SelectorButtons from "./components/dashboard/header";
import Chart from "./components/dashboard/chart.js";
import Footer from "./components/Footer.js";
import lightMode from "./styles/lightMode.js";

const sampleData = [
    {
        Date: "Jan",
        Items: {
            "pinkPart": 6,
            "Restaurants & Cafes": 10,
            "Health": 11,
            "Food": 12,
            "Shopping": 36,
        },
        Income: 90,
    },
    {
        Date: "Feb",
        Items: {
            "Health": 15,
            "Restaurants & Cafes": 15,
            "pinkPart": 15,
            "Food": 28,
        },
        Income: 90,
    },
    {
        Date: "Mar",
        Items: {
            Food: 17,
            Shopping: 18,
            Health: 34,
        },
        Income: 90,
    },
    {
        Date: "Apr",
        Items: {
            "Health": 439.6,
            "Restaurants & Cafes": 710.3,
            "Shopping": 930.7,
            "Food": 1630.2,
        },
        Income: 3900,
    },
    {
        Date: "May",
        Items: {
            Food: 8,
            Shopping: 15,
            greyPart: 24,
            pinkPart: 35,
        },
        Income: 100,
    },
    {
        Date: "Jun",
        Items: {
            "Food": 13,
            "pinkPart": 23,
            "Restaurants & Cafes": 23,
            "Health": 30,
        },
        Income: 100,
    },
];
const styles = lightMode;

const Total = () => (
    <View style={styles.totalContainer}>
        <Text style={{ fontWeight: "bold", fontSize: 30 }}>
            2000<Text style={{ fontWeight: "normal" }}>.00</Text>
        </Text>
    </View>
);

export default function App() {
    const [moneyType, setmoneyType] = useState("Expense");
    const [dayType, setdayType] = useState("Year");
    const [footer, setfooter] = useState("2");
    const [data, setdata] = useState("Apr");
    const styles = lightMode;
    return (
        <View style={styles.container}>
            <SelectorButtons
                moneyType={moneyType}
                setmoneyType={setmoneyType}
                dayType={dayType}
                setdayType={setdayType}
            />
            <StatusBar style="auto" />
            <Chart
                chartData={sampleData}
                selectedValue={data}
                setSelectedValue={setdata}
            />
            <Total />
            <Footer selectedValue={footer} setSelectedValue={setfooter} />
        </View>
    );
}
