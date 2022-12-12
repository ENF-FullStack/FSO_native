/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FlatList, View, StyleSheet, Pressable } from "react-native";
import RepoItemView from "./RepositoryItemView";
import useRepositories from "../hooks/useRepositories";
import { useNavigate } from "react-router-native";
import { Button, Menu, Divider, Provider } from "react-native-paper";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({
  repositories,
  sortBy,
  setSortBy,
}) => {
  const navigate = useNavigate();

  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const onOpenRepo = (id) => {
    navigate(`/${id}`);
  };

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <Provider>
      <View
        style={{
          paddingTop: 50,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <FlatList
          data={repositoryNodes}
          ItemSeparatorComponent={ItemSeparator}
          ListHeaderComponent={() => (
            <Menu
              visible={visible}
              onDismiss={closeMenu}
              anchor={<Button onPress={openMenu}>Show menu</Button>}
              selectedValue={sortBy}
              onValueChange={(itemValue) => setSortBy(itemValue)}
            >
              <Menu.Item
                onPress={() => {}}
                title="Latest repositories"
                value="latest"
              />
              <Menu.Item
                onPress={() => {}}
                title="Highest rated repositories"
                value="highestRated"
              />
              <Menu.Item
                onPress={() => {}}
                title="Lowest rated repositories"
                value="lowestRated"
              />
            </Menu>
          )}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Pressable onPress={() => onOpenRepo(item.id)}>
              <RepoItemView repository={item} />
            </Pressable>
          )}
        />
      </View>
    </Provider>
  );
};

const RepositoryList = () => {
  const [sortBy, setSortBy] = useState("latest");
  const { repositories } = useRepositories(sortBy);

  return (
    <RepositoryListContainer
      repositories={repositories}
      sortBy={sortBy}
      setSortBy={setSortBy}
    />
  );
};

export default RepositoryList;
