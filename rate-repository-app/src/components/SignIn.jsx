import SignInForm from './SignInForm';
import useSignIn from '../hooks/useSignIn';

const SignIn = () => {
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const {username, password } = values;

    try {
      const { authenticate } = await signIn({ username, password })
      console.log('Auth results: ', authenticate);
    } catch (error) {
      console.log(error);
    }
  };
  return <SignInForm onSubmit={onSubmit} />;
};

export default SignIn;