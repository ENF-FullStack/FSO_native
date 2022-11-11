import { Pressable, StyleSheet, Text } from "react-native";
import { Link } from 'react-router-native'

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        fontWeight: "600",
        color: "#FFFFFF",
        paddingVertical: 14,
        paddingHorizontal: 10
    }
})

const AppBarHeader = ({ header, link }) => {
    return (
        <Pressable>
            <Link to={link}>
                <Text style={styles.text}>{header}</Text>
            </Link>
        </Pressable>
    )
}

export default AppBarHeader;