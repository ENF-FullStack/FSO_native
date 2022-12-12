import { useQuery } from "@apollo/client";
import { GET_REVIEWS } from "../graphql/queries";

const useReviews = (variables) => {
  const { data, loading, fetchMore } = useQuery(GET_REVIEWS, {
    fetchPolicy: "cache-and-network",
    variables,
  });

  const repository = data?.repository;

  const handleFetchMore = () => {
    const canFetchMore = !loading && repository?.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        ...variables,
        after: repository.reviews.pageInfo.endCursor,
      },
    });
  };

  return {
    reviews: data?.repository.reviews.edges,
    loading,
    fetchMore: handleFetchMore,
  };
};

export default useReviews;
