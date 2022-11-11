import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme'
import AppBarHeader from './AppBarHeader';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.navBackground,
    flexDirection: 'row',
  },
});

const AppBar = () => {
  return (
  <View style={styles.container}>
    <AppBarHeader header={'Repositories'} />
  </View>
  )
};

export default AppBar;