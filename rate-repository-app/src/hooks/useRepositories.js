import { useQuery } from "@apollo/client";
import { GET_REPOS } from "../graphql/queries";

const useRepositories = (variables) => {
  const { data, error, loading } = useQuery(GET_REPOS, {
    variables,
    fetchPolicy: "cache-and-network",
  });
  const repositories = data?.repositories;
  return { repositories, error, loading };
};

export default useRepositories;
