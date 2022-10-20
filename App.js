import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import SelectorButtons from "./components/dashboard/header";
import Chart from "./components/dashboard/chart.js";
import Footer from "./components/Footer.js";

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
        Income: 3710,
    },
    {
        Date: "May",
        Items: {
            Food: 8,
            Shopping: 13,
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

export default function App() {
    const [moneyType, setmoneyType] = useState("Expense");
    const [dayType, setdayType] = useState("Year");
    const [footer, setfooter] = useState("2");
    const [data, setdata] = useState("Apr");
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
            <Footer selectedValue={footer} setSelectedValue={setfooter} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: "#f5f5f5",
    },
    chartContainer: {
        height: 270,
        margin: 10,
        marginTop: 30,
        flexDirection: "row",
        alignItems: "flex-end",
    },
    chartColumnContainer: {
        margin: "1.333%",
        flexDirection: "column-reverse",
        alignItems: "center",
        width: "14%",
        height: "90%",
        opacity: 0.4,
    },
    chartColumnSelected: {
        opacity: 1,
    },
    chartData: {
        marginTop: 3,
        minWidth: "100%",
        borderRadius: 50,
    },
    colorCode: {
        "Health": {
            backgroundColor: "#63d2ff",
        },
        "Shopping": {
            backgroundColor: "#bf5bf3",
        },
        "Food": {
            backgroundColor: "#32d74c",
        },
        "Restaurants & Cafes": {
            backgroundColor: "#ff9f0a",
        },
        "pinkPart": {
            backgroundColor: "#ff375e",
        },
    },
    chartLabel: {
        marginTop: 10,
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    footer: {
        left: 0,
        right: 0,
        bottom: 0,
        padding: 20,
        position: "absolute",
        backgroundColor: "#ffffff",
        //backgroundColor: "#1c1c1e", // darkmode
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
    },
    button: {
        paddingHorizontal: 8,
        paddingVertical: 12,
        borderRadius: 15,
        backgroundColor: "#ffffff",
        textAlign: "center",
        marginBottom: 6,
        minWidth: "28%",
    },
    selectedMain: {
        backgroundColor: "#ff375e",
        //background: "linear-gradient(to right, #430089, #82ffa1)",
    },
    selectedSecondary: {
        backgroundColor: "#32d74c",
        //background: "linear-gradient(to right, #430089, #82ffa1)",
    },
    selectedTertiary: {
        backgroundColor: "#5d5ce4",
    },
    buttonLabel: {
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
        color: "#919193",
    },
    selectedLabel: {
        color: "white",
    },
});
