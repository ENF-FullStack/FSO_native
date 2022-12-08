import { gql } from "@apollo/client";

export const REPO_DETAILS = gql`
  fragment RepoDetails on Repository {
    id
    name
    fullName
    description
    language
    ownerName
    ownerAvatarUrl
    stargazersCount
    ratingAverage
    reviewCount
    forksCount
    createdAt
    url
  }
`;

export const REVIEW_DETAILS = gql`
  fragment ReviewDetails on Review {
    id
    userId
    repositoryId
    rating
    createdAt
    text
  }
`;
