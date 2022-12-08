import { ME } from "../graphql/queries";
import { useQuery } from "@apollo/client";

const useMe = () => {
  const { data, error, loading } = useQuery(ME, {
    fetchPolicy: "cache-and-network",
  });
  const me = data?.me;
  return { me, error, loading };
};

export default useMe;
