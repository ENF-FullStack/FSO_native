/* eslint-disable no-unused-vars */
import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import RepoItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import { useNavigate } from 'react-router-native';

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: '#cccccc'
  },
});

const ItemSeparator = () => <View style={styles.separator} />

// ? 10.19 navigate to route, onPress wrap to RepoItem

export const RepositoryListContainer = ({ repositories }) => {
  let navigate = useNavigate()
  
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  const onPress = (id) => navigate(`/repository/${id}`)

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      // renderItem={renderItem}
      renderItem={({ item, index, separators }) => (
        <Pressable onPress={() => onPress(item.id)} >
          <RepoItem key={item.id} item={item} />
        </Pressable>
      )}
    />
  );
};

const RepositoryList = () => {
    const { repositories } = useRepositories();
    return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;