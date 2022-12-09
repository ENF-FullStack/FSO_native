import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../graphql/mutations";

const useSignUp = () => {
  const [mutate, result] = useMutation(CREATE_USER);
  console.log("🚀 ~ file: useSignUp.js:6 ~ useSignUp ~ mutate", mutate);

  const signUp = async ({ username, password }) => {
    const response = await mutate({
      variables: { user: { username, password } },
    });

    return response;
  };

  return [signUp, result];
};

export default useSignUp;
