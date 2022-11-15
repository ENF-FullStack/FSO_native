import { View, StyleSheet, Image, Text, Pressable } from 'react-native'
import Statistics from './Stats'
import Details from './Details'
import * as Linking from 'expo-linking'

import theme from '../theme'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff'
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  details: {
    flexDirection: 'row'
  },
  icon: {
    height: 50,
    width: 50,
    borderRadius: 4,
    margin: 10
  },
  button: {
    margin: 10,
    borderRadius: 4,
    paddingVertical: 10,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '600',
    color: '#ffffff',
    backgroundColor: theme.colors.primary
}
});

// ? 10.19 button to open Github url

const RepoItem = ({ item, showURLbutton }) => {
  const onPress = (url) => {
    Linking.openURL(url)
  }
  
  return (
  <View style={styles.container} testID="repositoryItem">
    <View style={styles.details}>
      <Image style={styles.icon} source={{ uri: item.ownerAvatarUrl }} />
      <Details name={item.fullName} description={item.description} language={item.language}/>
    </View>

    <View style={styles.stats}>
      <Statistics label={'Stars'} value={item.stargazersCount}/>
      <Statistics label={'Forks'} value={item.forksCount}/>
      <Statistics label={'Reviews'} value={item.reviewCount}/>
      <Statistics label={'Rating'} value={item.ratingAverage}/>
    </View>
    {!!showURLbutton && (
      <Pressable onPress={() => onPress(item.url)}>
        <Text style={styles.button}>Open GitHub</Text>
      </Pressable>
    )}
  </View>
  )
}

export default RepoItem;