// import React from 'react'

import { useNavigate } from "react-router-dom";






const Header = () => {

  const navigate = useNavigate();

  return (
    <div className="bg-gray-800">
      <div className="h-16 px-20 flex items-center justify-between">
        <p className="text-white font-bold text-lg">EMPLOYEE MANAGEMENT SYSTEM</p>
        <div className="flex space-x-8">
          <p 
          onClick={() => navigate('/employeeList')} 
          className="text-white font-bold text-lg hover:cursor-pointer">HOME</p>
          <p className="text-white font-bold text-lg hover:cursor-pointer">ABOUT</p>
          <p className="text-white font-bold text-lg hover:cursor-pointer">CONTACT US</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
