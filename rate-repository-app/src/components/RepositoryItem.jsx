/* eslint-disable no-unused-vars */
import React from "react";
import { View, FlatList, StyleSheet, Pressable } from "react-native";
import { useParams } from "react-router-native";
import * as Linking from "expo-linking";
import Text from "./Text";
import useRepository from "../hooks/useRepository";
import useReviews from "../hooks/useReviews";
import RepoItemView from "./RepositoryItemView";

import theme from "../theme";
import RevItemView from "./ReviewItemView";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#ffffff",
    marginBottom: 10,
  },
  githubButton: {
    margin: 10,
    borderRadius: 4,
    paddingVertical: 10,
    textAlign: "center",
    fontSize: 14,
    fontWeight: "600",
    color: "#ffffff",
    backgroundColor: theme.colors.primary,
  },
  githubText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

//? 10.19 single repo link, button to open Github url
//? 10.20 reviews included to single repo view

const Repository = ({ repository, onOpenGithub }) => {
  return (
    <View style={styles.container}>
      <RepoItemView repository={repository} />
      {repository.url && (
        <Pressable style={styles.githubButton} onPress={onOpenGithub}>
          <Text style={styles.githubText}>Open in GitHub</Text>
        </Pressable>
      )}
    </View>
  );
};

const RepoItem = () => {
  const { id } = useParams();
  const { repository } = useRepository(id);
  const { reviews } = useReviews(id);

  const repo = repository ? repository : {};
  const review = reviews ? reviews.map(({ node }) => node) : [];

  // console.log('Repo: ',repo)
  // console.log('Reviews: ',review)

  const onOpenGithub = () => {
    Linking.openURL(repo.url);
  };

  return (
    <FlatList
      data={review}
      renderItem={({ item }) => <RevItemView review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => (
        <Repository repository={repo} onOpenGithub={onOpenGithub} />
      )}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};
export default RepoItem;
