import { View, StyleSheet, ScrollView, Pressable, Text } from "react-native";
// import { Link, useNavigate } from "react-router-native";
import Constants from "expo-constants";

import AppBarHeader from "./AppBarHeader";
import useMe from "../hooks/useMe";
import useAuthStorage from "../hooks/useAuthStorage";
import { useApolloClient } from "@apollo/client";

import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.navBackground,
    flexDirection: "row",
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    color: "#ffffff",
    paddingVertical: 14,
    paddingHorizontal: 10,
  },
  scrollItems: {
    paddingLeft: 10,
  },
});

const AppBar = () => {
  const { me } = useMe();
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const signOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
    console.log("Token removed!");
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarHeader header={"Repositories"} link={"/"} />
        {me ? (
          <>
            <AppBarHeader header={"Create review"} link={"/createreview"} />
            <Pressable onPress={signOut}>
              <Text style={styles.text}>Sign out</Text>
            </Pressable>
          </>
        ) : (
          <>
            <AppBarHeader header={"Sign in"} link={"/signin"} />
            <AppBarHeader header={"Sign up"} link={"/signup"} />
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
