import { View, StyleSheet, Text, StatusBar } from 'react-native'

const RepoItem = ({ item }) => (
  <View style={styles.item}>
    <Text>Full name: {item.fullName}</Text>
    <Text>Description: {item.description}</Text>
    <Text>Language: {item.language}</Text>
    <Text>Stars: {item.stargazersCount}</Text>
    <Text>Forks: {item.forksCount}</Text>
    <Text>Reviews: {item.reviewCount}</Text>
    <Text>Rating: {item.ratingAverage}</Text>
  </View>
)

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#ffffff',
      padding: 10,
      marginVertical: 2,
      marginHorizontal: 16,
    },
  });

export default RepoItem;