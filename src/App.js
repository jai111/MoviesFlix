import React, { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';


function App() {
  const email = useSelector(state => state.user.email);
  const navigate = useNavigate()

  useEffect(() => {
    if (email) {
      navigate('/')
    }
    else {
      navigate('/login')
    }
  }, [])

  return (
    <>
      <Outlet/>
    </>
  );
}

export default App;
