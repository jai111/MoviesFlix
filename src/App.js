import React, { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Sidebar from 'Components/Sidebar';

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
      <>
        <div className="flex flex-1 overflow-hiddent h-screen  m-auto">
          <div className="w-full">
            <div className="max-h-full h-full flex flex-row">
              <Sidebar/>
              <div className="flex-1 flex-col w-full p-10 pt-[30px]">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default App;
