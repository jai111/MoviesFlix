import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from 'Components/Sidebar';

function App() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 overflow-auto p-10 pt-[30px] ml-[100px]">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
