/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FlatList, Pressable, StyleSheet, TextInput, View } from "react-native";
import RepoItemView from "./RepositoryItemView";
import useRepositories from "../hooks/useRepositories";
import { useNavigate } from "react-router-native";
import { Button, Menu, Provider, Searchbar } from "react-native-paper";
import { useDebounce } from "use-debounce";
import Text from "./Text";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const orderOptions = [
  { title: "Most rated repositories", value: "mostRated" },
  { title: "Least rated repositories", value: "leastRated" },
  { title: "Latest repositories", value: "latest" },
  { title: "Oldest repositories", value: "oldest" },
];

const orderValues = {
  mostRated: {
    orderBy: "RATING_AVERAGE",
    orderDirection: "DESC",
  },
  leastRated: { orderBy: "RATING_AVERAGE", orderDirection: "ASC" },
  latest: { orderBy: "CREATED_AT", orderDirection: "DESC" },
  oldest: { orderBy: "CREATED_AT", orderDirection: "ASC" },
};

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListHeader = ({ orderBy, onOrderBy, filter, onFilter }) => {
  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  return (
    <Provider>
      <View>
        <Searchbar
          value={filter}
          onChangeText={onFilter}
          placeholder="Type to filter"
        ></Searchbar>
        <TextInput
          style={{
            width: 300,
            backgroundColor: "transparent",
            margin: 0,
            padding: 0,
          }}
          label="Choice"
          value={orderBy}
          onChangeText={(itemValue) => onOrderBy(itemValue)}
        />
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <Button onPress={openMenu} icon="menu" dark={true} color="#ffffff">
              Show menu
            </Button>
          }
          onValueChange={onOrderBy}
          selectedValue={orderBy}
        >
          {orderOptions.map(({ value, title }) => (
            <Menu.Item key={value} title={title} value={value} />
          ))}
        </Menu>
      </View>
    </Provider>
  );
};

export const RepositoryListContainer = ({
  orderBy,
  onOrderBy,
  filter,
  onFilter,
  repositories,
}) => {
  const navigate = useNavigate();

  const onOpenRepo = (id) => {
    navigate(`/${id}`);
  };

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={(item, index) => index.toString()}
      ListHeaderComponent={
        <RepositoryListHeader
          orderBy={orderBy}
          onOrderBy={onOrderBy}
          filter={filter}
          onFilter={onFilter}
        />
      }
      renderItem={({ item }) => (
        <Pressable onPress={() => onOpenRepo(item.id)}>
          <RepoItemView repository={item} />
        </Pressable>
      )}
    />
  );
};

const RepositoryList = () => {
  const [orderBy, setOrderBy] = useState("latest");
  const [filter, setFilter] = useState("");
  const [debounced] = useDebounce(filter, 500);

  const { repositories } = useRepositories({
    ...orderValues[orderBy],
    searchKeyword: debounced,
  });

  // if (repositories.loading) {
  //   return <View><Text>loading repositories...</Text></View>
  // }

  return (
    <RepositoryListContainer
      repositories={repositories}
      orderBy={orderBy}
      onOrderBy={(orderBy) => setOrderBy(orderBy)}
      filter={filter}
      onFilter={(filter) => setFilter(filter)}
    />
  );
};

export default RepositoryList;
