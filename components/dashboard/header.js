import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const IncomeExpenseButtons = ({ selectedValue, setSelectedValue }) => (
    <View>
        <View style={styles.row}>
            <TouchableOpacity
                key={"Expense"}
                onPress={() => setSelectedValue("Expense")}
                style={[
                    styles.button,
                    selectedValue === "Expense" && styles.selectedMoney,
                ]}
            >
                <Text
                    style={[
                        styles.buttonLabel,
                        selectedValue === "Expense" && styles.selectedLabel,
                    ]}
                >
                    Expense
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                key={"Income"}
                onPress={() => setSelectedValue("Income")}
                style={[
                    styles.button,
                    selectedValue === "Income" && styles.selectedMoney,
                ]}
            >
                <Text
                    style={[
                        styles.buttonLabel,
                        selectedValue === "Income" && styles.selectedLabel,
                    ]}
                >
                    Income
                </Text>
            </TouchableOpacity>
        </View>
    </View>
);

const DateSelector = ({ selectedValue, setSelectedValue, values }) => (
    <View>
        <View style={styles.row}>
            {values.map((value) => (
                <TouchableOpacity
                    key={value}
                    onPress={() => setSelectedValue(value)}
                    style={[
                        styles.buttonDay,
                        selectedValue === value && styles.selectedDay,
                    ]}
                >
                    <Text
                        style={[
                            styles.buttonLabel,
                            selectedValue === value && styles.selectedLabel,
                        ]}
                    >
                        {value === "All" ? value : value.slice(0, 1)}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    </View>
);

export default function SelectorButtons({
    moneyType,
    setmoneyType,
    dayType,
    setdayType,
}) {
    return (
        <View style={styles.container}>
            <IncomeExpenseButtons
                selectedValue={moneyType}
                setSelectedValue={setmoneyType}
            />
            <DateSelector
                values={["Day", "Week", "Month", "Year", "All", "Calendar"]}
                selectedValue={dayType}
                setSelectedValue={setdayType}
            />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 20,
        marginRight: 20,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    buttonDay: {
        paddingHorizontal: 8,
        paddingVertical: 12,
        borderRadius: 10,
        backgroundColor: "#ffffff",
        textAlign: "center",
        marginBottom: 6,
        minWidth: "14%",
    },
    button: {
        paddingHorizontal: 8,
        paddingVertical: 12,
        borderRadius: 10,
        backgroundColor: "#ffffff",
        textAlign: "center",
        marginBottom: 6,
        minWidth: "48%",
    },
    selectedMoney: {
        backgroundColor: "#ff375e",
        //background: "linear-gradient(to right, #430089, #82ffa1)",
    },
    selectedDay: {
        backgroundColor: "#32d74c",
        //background: "linear-gradient(to right, #430089, #82ffa1)",
    },
    buttonLabel: {
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
        color: "black",
    },
    selectedLabel: {
        color: "white",
    },
});
