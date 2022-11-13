import { gql } from '@apollo/client'

export const GET_REPOS = gql`
  query {
    repositories {
        edges {
          node {
            id
            ownerName
            name
            fullName
            ratingAverage
            reviewCount
            stargazersCount
            forksCount
            ownerAvatarUrl
            description
            language
            createdAt
          }
        }
    }
  }
`

export const ME = gql`
  query {
    me {
      id
      username
    }
  }
`