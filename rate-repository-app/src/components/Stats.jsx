import { View, StyleSheet } from 'react-native'
import Text from './Text'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 10
    }
})

const truncValue = (value) => {
    return value >= 1000 ? (value / 1000).toFixed(1) + 'k' : value
}

const Stats = ({ label, value }) => {
    return (
        <View style={styles.container}>
            <Text fontWeight={'bold'} >{truncValue(value)}</Text>
            <Text color={'textSecondary'} >{label}</Text>
        </View>
    )
}

export default Stats