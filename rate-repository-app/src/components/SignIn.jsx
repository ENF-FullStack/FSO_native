import SignInForm from './SignInForm';
import useSignIn from '../hooks/useSignIn';
import { useNavigate } from 'react-router-native';

const SignIn = () => {
  const [signIn] = useSignIn();
  let navigate = useNavigate();

  const onSubmit = async (values) => {
    const {username, password } = values;
    console.log(username, password)

    try {
      const { authenticate } = await signIn({ username, password })
      console.log('Auth results: ', authenticate);
      navigate('/', { replace: true });
    } catch (error) {
      console.log(error);
    }
  };
  return <SignInForm onSubmit={onSubmit} />;
};

export default SignIn;