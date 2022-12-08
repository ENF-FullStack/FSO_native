import React from "react";
import { View, StyleSheet } from "react-native";
import { Route, Routes, Navigate } from "react-router-native";

import RepoList from "./RepositoryList";
import RepoItem from "./RepositoryItem";
import AppBar from "./AppBar";
import SignIn from "./SignIn";

import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.mainBackground,
  },
});

// ? 10.19 add route to single repo

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepoList />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/signin" element={<SignIn />} exact />
        <Route path="/:id" element={<RepoItem />} exact />
      </Routes>
    </View>
  );
};

export default Main;
