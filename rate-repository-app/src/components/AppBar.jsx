import { View, StyleSheet, ScrollView, Pressable, Text } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme'

import AppBarHeader from './AppBarHeader';
import useMe from '../hooks/useMe';
import useAuthStorage from '../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';


const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.navBackground,
    flexDirection: 'row',
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    color: "#ffffff",
    paddingVertical: 14,
    paddingHorizontal: 10
  }
});

const AppBar = () => {
  const { me } = useMe();
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const signOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
    console.log('Token removed!');
  }

  return (
  <View style={styles.container}>
    <ScrollView horizontal>
      <AppBarHeader header={'Repositories'} link={'/'} />
      {!me && <AppBarHeader header={'Sign in'} link={'/signin'} />}
      {!!me && (
        <Pressable onPress={signOut}>
          <Text style={styles.text}>Sign out</Text>
          {/* <AppBarHeader header={'Sign out'} link={'/'} /> */}
        </Pressable>
      )}
    </ScrollView>
  </View>
  )
};

export default AppBar;