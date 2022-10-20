import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Footer = ({ selectedValue, setSelectedValue }) => (
    <View style={styles.footer}>
        <View style={styles.row}>
            <TouchableOpacity
                key={"1"}
                onPress={() => setSelectedValue("1")}
                style={[
                    styles.button,
                    selectedValue === "1" && styles.selectedSecondary,
                ]}
            >
                <Text
                    style={[
                        styles.buttonLabel,
                        selectedValue === "1" && styles.selectedLabel,
                    ]}
                >
                    1
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                key={"2"}
                onPress={() => setSelectedValue("2")}
                style={[
                    styles.button,
                    selectedValue === "2" && styles.selectedMain,
                ]}
            >
                <Text
                    style={[
                        styles.buttonLabel,
                        selectedValue === "2" && styles.selectedLabel,
                    ]}
                >
                    2
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                key={"3"}
                onPress={() => setSelectedValue("3")}
                style={[
                    styles.button,
                    selectedValue === "3" && styles.selectedTertiary,
                ]}
            >
                <Text
                    style={[
                        styles.buttonLabel,
                        selectedValue === "3" && styles.selectedLabel,
                    ]}
                >
                    3
                </Text>
            </TouchableOpacity>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: "#f5f5f5",
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

export default Footer;
