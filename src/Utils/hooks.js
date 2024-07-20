import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from 'Store/userSlice';

export const useAuth = () => {
  const dispatch = useDispatch();
  const email = useSelector(state => state.user.email);

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
      dispatch(login(storedEmail));
    }
  }, [dispatch]);

  const handleLogin = (email) => {
    dispatch(login(email));
    localStorage.setItem('email', email);
  };

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('email');
  };

  return { email, handleLogin, handleLogout };
};
