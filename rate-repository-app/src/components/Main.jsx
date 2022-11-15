import { View, StyleSheet } from 'react-native'
import { Route, Routes, Navigate } from 'react-router-native'

import RepoList from './RepositoryList'
import RepoItemView from './RepositoryItemView'
import AppBar from './AppBar'
import SignIn from './SignIn'

import theme from '../theme'

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.mainBackgroud,
  }
})
 
// ? 10.19 add route to single repo

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path='/' element={<RepoList />} exact />
        <Route path='/signin' element={<SignIn />} exact />
        <Route path='/repository/:id' element={<RepoItemView />} exact />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </View>
  );
};

export default Main;