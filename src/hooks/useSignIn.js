import { useMutation } from "@apollo/client";
import { AUTHENTICATE } from "../graphql/queries";
import AuthStorageContext from "../directory/AuthStorageContext";
import useAuthStorage from '../hooks/useAuthStorage';


const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHENTICATE);
  const authStorage = useAuthStorage();

  const signIn = async ({ username, password }) => {
    try {
      const response = await mutate({
        variables: {
          credentials: { username, password }
        }
      });
      return response;
    } catch (error) {
      console.error("Authentication error:", error.message); // Updated error logging
      return { error }; // Return the error object for handling in SignIn.jsx
    }
  };

  return [signIn, result];
};

export default useSignIn;
