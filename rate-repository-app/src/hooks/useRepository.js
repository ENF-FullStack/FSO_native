import { useQuery } from "@apollo/client";
import { GET_REPO } from "../graphql/queries";

const useRepository = (id) => {
  const result = useQuery(GET_REPO, {
    fetchPolicy: "cache-and-network",
    variables: { id: id },
  });
  return { repository: result.data?.repository };
};

export default useRepository;
