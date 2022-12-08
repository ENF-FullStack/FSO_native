import { gql } from "@apollo/client";
import { REPO_DETAILS, REVIEW_DETAILS } from "./fragments";

export const GET_REPOS = gql`
  query {
    repositories {
      edges {
        node {
          ...RepoDetails
        }
      }
    }
  }
  ${REPO_DETAILS}
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
  query getOneRepo($id: ID!) {
    repository(id: $id) {
      ...RepoDetails
    }
  }
  ${REPO_DETAILS}
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
