import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { login, signup } from 'Store/userSlice';
import movieImage from 'Images/movie.jpg';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function Login() {
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const users = useSelector(state => state.user.users);
  const navigate = useNavigate()
  const email = useSelector(state => state.user.email);

  useEffect(() => {
    if (email) {
      navigate('/')
    }
    else {
      navigate('/login')
    }
  }, [])

  const initialValues = {
    email: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Email is required'),
  });
  
  const handleFormSubmit = async (values) => {
    const userExists = users.includes(values.email);

    if (isSignup) {
      if (userExists) {
        toast.error('User already exists.');
      } else {
        await toast.promise(
          new Promise((resolve, reject) => {
            dispatch(signup(values.email))
            setTimeout(() => {
              resolve()
            }, 1000);
          }),
          {
            loading: 'Signing up...',
            success: 'Sign up successful!',
            error: 'Sign up failed. Please try again.',
          }
        );
        navigate('/login')
        setIsSignup(false)
      }
    } else {
      if (userExists) {
        await toast.promise(
          new Promise((resolve, reject) => {
            dispatch(login(values.email))
            setTimeout(() => {
              resolve()
            }, 1000);
          }),
          {
            loading: 'Logging in...',
            success: 'Login successful!',
            error: 'Login failed. Please try again.',
          }
        );
        navigate('/')
      } else {
        toast.error('User does not exist. Please sign up.');
      }
    }
  };

  return (
    <div className="bg-cover bg-center bg-fixed h-screen" style={{
      backgroundImage: `url(${movieImage})`
    }}>
      <div className='flex justify-center items-center mt-auto h-full'>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleFormSubmit}
        >
          {() => (
            <Form className="max-w-sm sm:max-w-md m-auto my-5 py-10 px-8 sm:py-16 sm:px-16 bg-black bg-opacity-80 text-white rounded-md">
              <h3 className="text-4xl font-bold mb-8 text-center">{isSignup ? 'Sign Up' : 'Sign In'}</h3>
              <Field
                name="email"
                className="block w-full py-3.5 px-5 bg-[#333] focus:bg-[#454545] rounded focus:outline-0 focus:ring-0 focus:border-none border-none placeholder:text-[#8c8c8c]"
                placeholder="Email or phone number"
              />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-2" />
              <button
                type="submit"
                className="py-3.5 mt-8 bg-[#e50914] text-center block w-full rounded hover:cursor-pointer font-bold text-lg"
              >
                {isSignup ? 'Sign Up' : 'Sign In'}
              </button>
              <div className="pt-3 text-gray-500 text-sm">
                {isSignup ? (
                  <>
                    Already have an account?{' '}
                    <span
                      className="hover:underline hover:cursor-pointer text-white"
                      onClick={() => setIsSignup(false)}
                    >
                      Sign in now
                    </span>
                    .
                  </>
                ) : (
                  <>
                    New to Watchlists?{' '}
                    <span
                      className="hover:underline hover:cursor-pointer text-white"
                      onClick={() => setIsSignup(true)}
                    >
                      Sign up now
                    </span>
                    .
                  </>
                )}
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Login;
