import { Pressable, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        fontWeight: "600",
        color: "#FFFFFF",
        paddingVertical: 14,
        paddingHorizontal: 10
    }
})

const AppBarHeader = ({ header }) => {
    return (
        <Pressable>
            <Text style={styles.text}>{header}</Text>
        </Pressable>
    )
}

export default AppBarHeader;