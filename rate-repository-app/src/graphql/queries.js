import { gql } from "@apollo/client";
import {
  REPO_DETAILS,
  REVIEW_DETAILS,
  PAGE_INFO,
  USER_DETAILS,
} from "./fragments";

export const GET_REPOS = gql`
  query (
    $first: Int
    $after: String
    $searchKeyword: String
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
  ) {
    repositories(
      first: $first
      after: $after
      searchKeyword: $searchKeyword
      orderBy: $orderBy
      orderDirection: $orderDirection
    ) {
      edges {
        node {
          ...RepoDetails
        }
        cursor
      }
      pageInfo {
        ...PageInfo
      }
    }
  }
  ${REPO_DETAILS}
  ${PAGE_INFO}
`;

export const ME = gql`
  query {
    me {
      id
      username
    }
  }
`;

export const GET_REPO = gql`
  query getOneRepo($id: ID!, $first: Int, $after: String) {
    repository(id: $id) {
      ...RepoDetails
      reviews(first: $first, after: $after) {
        edges {
          node {
            ...ReviewDetails
            user {
              ...UserDetails
            }
          }
          cursor
        }
        pageInfo {
          ...PageInfo
        }
      }
    }
  }
  ${REPO_DETAILS}
  ${REVIEW_DETAILS}
  ${PAGE_INFO}
  ${USER_DETAILS}
`;

export const GET_REVIEWS = gql`
  query getReviews($id: ID!) {
    repository(id: $id) {
      reviews {
        edges {
          node {
            ...ReviewDetails
            user {
              username
            }
          }
        }
      }
    }
  }
  ${REVIEW_DETAILS}
`;
