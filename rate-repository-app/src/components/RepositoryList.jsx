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
  middleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "blue",
  },
  leftContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor: "green",
  },
  rightContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
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

//! 10.23 sorting pop-up menu renders behind repo items
//* testing different sorting not available until fix is found
//? 10.24 filtering works, deleting filter does not update pagination

const RepositoryListHeader = ({ orderBy, onOrderBy, filter, onFilter }) => {
  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  return (
    <View>
      <Provider>
        <View style={{ zIndex: 2 }}>
          <Searchbar
            value={filter}
            onChangeText={onFilter}
            placeholder="Type to filter"
          ></Searchbar>
          <View style={styles.middleContainer}>
            <View style={styles.leftContainer}>
              <TextInput
                style={{
                  width: 300,
                  backgroundColor: "transparent",
                  margin: 0,
                  padding: 10,
                }}
                label="Choice"
                value={orderBy}
                onChangeText={(itemValue) => onOrderBy(itemValue)}
              />
            </View>
            <View style={styles.rightContainer}>
              <View style={{ zIndex: 3, position: "absolute" }}>
                <Menu
                  visible={visible}
                  onDismiss={closeMenu}
                  anchor={
                    <Button
                      onPress={openMenu}
                      icon="menu"
                      color="#fff"
                      dark={true}
                      compact={true}
                    ></Button>
                  }
                  onValueChange={onOrderBy}
                  selectedValue={orderBy}
                >
                  {orderOptions.map(({ value, title }) => (
                    <Menu.Item key={value} title={title} value={value} />
                  ))}
                </Menu>
              </View>
            </View>
          </View>
        </View>
      </Provider>
    </View>
  );
};

export const RepositoryListContainer = ({
  orderBy,
  onOrderBy,
  filter,
  onFilter,
  repositories,
  onEndReach,
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
      CellRendererComponent={({ children }) => children}
      removeClippedSubviews={false}
      renderItem={({ item }) => (
        <View>
          <Pressable onPress={() => onOpenRepo(item.id)}>
            <RepoItemView repository={item} />
          </Pressable>
        </View>
      )}
      ListHeaderComponent={
        <RepositoryListHeader
          orderBy={orderBy}
          onOrderBy={onOrderBy}
          filter={filter}
          onFilter={onFilter}
        />
      }
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );
};

const RepositoryList = () => {
  const [orderBy, setOrderBy] = useState("latest");
  const [filter, setFilter] = useState("");
  const [debounced] = useDebounce(filter, 500);

  const { repositories, fetchMore } = useRepositories({
    first: 5,
    ...orderValues[orderBy],
    searchKeyword: debounced,
  });

  const onEndReach = () => {
    fetchMore();
  };

  return (
    <RepositoryListContainer
      repositories={repositories}
      orderBy={orderBy}
      onOrderBy={(orderBy) => setOrderBy(orderBy)}
      filter={filter}
      onFilter={(filter) => setFilter(filter)}
      onEndReach={onEndReach}
    />
  );
};

export default RepositoryList;
