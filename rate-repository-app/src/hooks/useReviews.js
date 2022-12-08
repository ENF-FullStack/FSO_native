import { useQuery } from "@apollo/client";
import { GET_REVIEWS } from "../graphql/queries";

const useReviews = (id) => {
  const results = useQuery(GET_REVIEWS, {
    fetchPolicy: "cache-and-network",
    variables: { id: id },
  });

  return { reviews: results.data?.repository.reviews.edges };
};

export default useReviews;
