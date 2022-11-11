import { View, StyleSheet } from 'react-native';
import RepoList from './RepositoryList';
import AppBar from './AppBar';

import theme from '../theme'

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.mainBackgroud,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <RepoList />
    </View>
  );
};

export default Main;