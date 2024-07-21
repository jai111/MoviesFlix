import React, { useEffect } from 'react';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';


function App() {
  const email = useSelector(state => state.user.email);
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const pathname = location.pathname
    if (!email) {
      navigate('/login', {replace: true})
    }
    else{
      if(pathname === '/login'){
        navigate('/', {replace: true})
      }
    }
  }, [])

  return (
    <>
      <Outlet/>
    </>
  );
}

export default App;
