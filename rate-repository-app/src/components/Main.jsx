import Constants from 'expo-constants';
import { Text, StyleSheet, View } from 'react-native';
import RepoList from './RepositoryList';

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
  },
  title: {
    fontSize: 24,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rate Repository Application</Text>
      <RepoList />
    </View>
  );
};

export default Main;