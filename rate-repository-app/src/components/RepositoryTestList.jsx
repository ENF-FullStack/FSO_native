/* eslint-disable no-unused-vars */
import { FlatList, View, StyleSheet } from 'react-native';
import RepoItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: '#cccccc'
  },
});

const ItemSeparator = () => <View style={styles.separator} />

export const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      // renderItem={renderItem}
      renderItem={({ item, index, separators }) => (
        <RepoItem key={item.id} item={item} />
      )}
    />
  );
};

const RepositoryList = () => {
    const { repositories } = useRepositories();
    return <RepositoryListContainer repositories={repositories} />
}

export default RepositoryList;