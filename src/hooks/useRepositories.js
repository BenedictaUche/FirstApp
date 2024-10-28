import { useState, useEffect } from 'react';
// import 'dotenv/config';
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  const [repositories, setRepositories] = useState();
  const [loading, setLoading] = useState(false);
//   const { data, loading, refetch } = useQuery(GET_REPOSITORIES, {
//     fetchPolicy: 'cache-and-network',
//   });

  const fetchRepositories = async () => {
    setLoading(true);
    const response = await fetch('http://192.168.71.202:5000/api/repositories');
    const json = await response.json();

    setLoading(false);
    setRepositories(json);
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  return { repositories, loading, refetch: fetchRepositories };
};

export default useRepositories;
