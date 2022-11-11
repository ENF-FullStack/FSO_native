import { View, StyleSheet, Image } from 'react-native'
import Statistics from './Stats'
import Details from './Details'

const RepoItem = ({ item }) => {
  return (
  <View style={styles.container}>
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
  </View>
  )
}

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
    }
  });

export default RepoItem;