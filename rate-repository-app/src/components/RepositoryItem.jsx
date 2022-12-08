import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useQuery } from '@apollo/react-hooks'
import { useParams } from 'react-router-native'
import * as Linking from 'expo-linking'
import Text from './Text'
import { GET_REPO } from '../graphql/queries'
import RepoItemView from './RepositoryItemView'

import theme from '../theme'


// ? 10.19 single repo link, button to open Github url

const RepoItem = () => {
  const { id } = useParams()
  const { loading, data } = useQuery(GET_REPO, {
    variables: { id },
    fetchPolicy: 'cache-and-network'
  })

  if (loading) return <Text>Loading...</Text>

  console.log(data.repository)
  return (
    <RepoItemView {...data.repository}>
      <TouchableOpacity onPress={() => Linking.openURL(data.repository.url)}>
        <Text style={{
          color: '#ffffff',
          fontWeight: 'bold',
          backgroundColor: theme.colors.primary,
          padding: 10,
          marginTop: 10,
          borderRadius: 6,
          textAlign: 'center'
        }}>Open in GitHub</Text>
      </TouchableOpacity>
    </RepoItemView>
  )
}

export default RepoItem;