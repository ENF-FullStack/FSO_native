/* eslint-disable no-unused-vars */
import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import RepoItemView from './RepositoryItemView';
import useRepositories from '../hooks/useRepositories';
// import { useNavigate } from 'react-router-native';

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: '#cccccc'
  },
});

const ItemSeparator = () => <View style={styles.separator} />

export const RepositoryListContainer = ({ repositories }) => {
  // let navigate = useNavigate()
  
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  // const onPress = (id) => navigate(`/repository/${id}`)

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      // renderItem={renderItem}
      renderItem={({ item }) => (
        // <Pressable onPress={() => onPress(item.id)} >
          <RepoItemView key={item.id} {...item} />
        // </Pressable>
      )}
    />
  );
};

const RepositoryList = () => {
    const { repositories } = useRepositories();
    return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;