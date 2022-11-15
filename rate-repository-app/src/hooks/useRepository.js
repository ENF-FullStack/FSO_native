import { useQuery } from '@apollo/client'
import { GET_REPO } from '../graphql/queries'

const useRepository = (id) => {
    const { data, error, loading } = useQuery(GET_REPO, {
        fetchPolicy: 'cache-and-network',
        variables: { repoId: id }
      });
      const repository = data?.repository;
      return { repository, error, loading };
}

export default useRepository