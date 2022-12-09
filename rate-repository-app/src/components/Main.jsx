import React from "react";
import { View, StyleSheet } from "react-native";
import { Route, Routes, Navigate } from "react-router-native";

import RepoList from "./RepositoryList";
import RepoItem from "./RepositoryItem";
import AppBar from "./AppBar";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ReviewForm from "./ReviewForm";

import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.mainBackground,
  },
});

//? 10.19 add route to single repo
//? 10.21 add route to create review
//? 10.22 add route to create signup

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepoList />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/signup" element={<SignUp />} exact />
        <Route path="/signin" element={<SignIn />} exact />
        <Route path="/:id" element={<RepoItem />} exact />
        <Route path="/createreview" element={<ReviewForm />} exact />
      </Routes>
    </View>
  );
};

export default Main;
