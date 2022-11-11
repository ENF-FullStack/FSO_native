import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppBarHeader from './AppBarHeader';

import theme from '../theme'

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
    <ScrollView horizontal>
      <AppBarHeader header={'Repositories'} link={'/'} />
      <AppBarHeader header={'Sign in'} link={'/signin'} />
    </ScrollView>
  </View>
  )
};

export default AppBar;