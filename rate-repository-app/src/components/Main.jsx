import { View } from 'react-native';
import RepoList from './RepositoryList';
import AppBar from './AppBar';

const Main = () => {
  return (
    <>
    <View>
      <AppBar />
      <RepoList />
    </View>
    </>
  );
};

export default Main;