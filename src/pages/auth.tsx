import { useState } from 'preact/hooks';
import Helmet from 'preact-helmet';

import Container, { NavBarType } from "../components/container";
import TextInput from "../components/textInput";
import Button from "../components/button";
import useAuthStore from "../stores/useAuthStore";

const AuthPage = () => {
  const { emailSignup, emailLogin } = useAuthStore();
  const [isSignIn, setIsSignIn] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  }

  const signUp = () => {
    emailSignup(email, password, name);
  }

  const signIn = async () => {
    await emailLogin(email, password);
  }

  const isSignUpDisabled = () => {
    return !email || !password || password !== passwordConfirm;
  }

  const isSignInDisabled = () => {
    return !email || !password;
  }

  const renderSignInForm = () => (
    <>
      <div className='font-bold text-3xl text-center text-zinc-700 dark:text-zinc-50 mb-2'>sign in</div>
      <div className='text-xl text-center text-zinc-700 dark:text-zinc-50 mb-6'>welcome back to marklet</div>
      <form>
        <TextInput
          autoComplete='email'
          label='Email'
          htmlFor='email'
          onInput={(e) => setEmail(e.currentTarget.value)}
          placeholder='jane.doe@gmail.com'
          value={email}
        />
        <TextInput
          autoComplete='current-password'
          label='Password'
          htmlFor='password'
          onInput={(e) => setPassword(e.currentTarget.value)}
          value={password}
        />
        <Button
          className='mb-4 mt-6'
          disabled={isSignInDisabled()}
          label='Sign In'
          onClick={signIn}
        />
        <div className='text-l text-center text-zinc-700 dark:text-zinc-50 cursor-pointer' onClick={toggleForm}>Don't have an account? <b>Sign Up</b></div>
      </form>
    </>
  )

  const renderSignUpForm = () => (
    <>
      <div className='font-bold text-3xl text-center text-zinc-700 dark:text-zinc-50 mb-2'>sign up</div>
      <div className='text-xl text-center text-zinc-700 dark:text-zinc-50 mb-6'>just a few things before you write your first marklet</div>
      <form>
        <TextInput
          autoComplete='name'
          label='Name'
          htmlFor='name'
          onInput={(e) => setName(e.currentTarget.value)}
          placeholder='Jane Doe'
          value={name}
        />
        <TextInput
          autoComplete='email'
          label='Email'
          htmlFor='email'
          onInput={(e) => setEmail(e.currentTarget.value)}
          placeholder='jane.doe@gmail.com'
          value={email}
        />
        <TextInput
          autoComplete='new-password'
          label='Password'
          htmlFor='password'
          onInput={(e) => setPassword(e.currentTarget.value)}
          value={password}
        />
        <TextInput
          autoComplete='new-password'
          label='Confirm Password'
          htmlFor='password'
          onInput={(e) => setPasswordConfirm(e.currentTarget.value)}
          value={passwordConfirm}
        />
        <Button
          className='mb-4 mt-6'
          disabled={isSignUpDisabled()}
          label='Sign Up'
          onClick={signUp}
        />
        <div className='text-l text-center text-zinc-700 dark:text-zinc-50 cursor-pointer' onClick={toggleForm}>Already have an account? <b>Sign In</b></div>
      </form>
    </>
  )

  return (
    <Container navBar={NavBarType.PUBLIC}>
      <Helmet title={isSignIn ? 'sign in' : 'sign up'} />
      <div className='p-8 flex justify-center h-full w-full relative'>
        <div className='p-8 min-w-xl'>
          {isSignIn ? renderSignInForm() : renderSignUpForm()}
        </div>
      </div>
    </Container>
  );
};

export default AuthPage;