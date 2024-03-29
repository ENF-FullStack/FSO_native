import { FlatList, View, StyleSheet } from "react-native";
import RepoItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: "#cccccc",
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { repositories } = useRepositories();

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      // renderItem={renderItem}
      renderItem={({ item }) => <RepoItem key={item.id} item={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export default RepositoryList;
