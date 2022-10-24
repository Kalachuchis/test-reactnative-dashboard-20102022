import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: "#f5f5f5",
        //backgroundColor: "#000000", //drakmode
    },
    totalContainer: {
        justifyContent: "center",
        alignItems: "center",
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
        height: 94,
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
        //backgroundColor: "#1c1c1e", // darkmode
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
