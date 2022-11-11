// import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { GET_REPOS } from '../graphql/queries';

// const useRepositories = () => {
//   const [repositories, setRepositories] = useState();
//   const [loading, setLoading] = useState(false);

//   const fetchRepositories = async () => {
//     setLoading(true);

//     const response = await fetch('http://192.168.1.101:5000/api/repositories')
//     const json = await response.json()

//     setLoading(false)
//     setRepositories(json)
//   }

//   useEffect(() => {
//     fetchRepositories();
//   }, []);

//   return { repositories, loading, refetch: fetchRepositories }
// };

const useRepositories = () => {
  const { data, error, loading } = useQuery(GET_REPOS, {
    fetchPolicy: 'cache-and-network',
  });
  const repositories = data?.repositories;
  return { repositories, error, loading };
};

export default useRepositories;