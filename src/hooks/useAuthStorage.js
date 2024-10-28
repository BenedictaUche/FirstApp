import { useContext } from 'react';
import AuthStorageContext from '../directory/AuthStorageContext';

const useAuthStorage = () => {
  return useContext(AuthStorageContext);
};

export default useAuthStorage;
