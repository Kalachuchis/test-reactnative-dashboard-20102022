import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Chart = ({ chartData, selectedValue, setSelectedValue }) => (
    <View style={[styles.chartContainer]}>
        {chartData.map((data) => (
            <ChartColumn
                data={data}
                selectedValue={selectedValue}
                setSelectedValue={setSelectedValue}
            />
        ))}
    </View>
);

const ChartColumn = ({ data, selectedValue, setSelectedValue }) => {
    const itemsList = Object.entries(data.Items);
    return (
        <TouchableOpacity
            style={[
                styles.chartColumnContainer,
                selectedValue === data.Date && styles.chartColumnSelected,
            ]}
            key={data.Date}
            onPress={() => setSelectedValue(data.Date)}
        >
            <Text style={styles.chartLabel}>{data.Date}</Text>
            {itemsList.map((itemData) => (
                <ChartData
                    data={`${(itemData[1] / data.Income) * 100}%`}
                    category={itemData[0]}
                />
            ))}
        </TouchableOpacity>
    );
};

const ChartData = ({ data, category }) => {
    return (
        <View
            style={[
                styles.chartData,
                styles.colorCode[category],
                { height: data },
            ]}
        ></View>
    );
};

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
        "greyPart": {
            backgroundColor: "#cccccc",
        },
    },
    chartLabel: {
        marginTop: 10,
    },
});

export default Chart;
