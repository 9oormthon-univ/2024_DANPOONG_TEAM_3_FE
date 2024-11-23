import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import MainLogo from '../../.././assets/main-logo.svg';
import ShopIcon from '../../.././assets/main-shop.svg';
import UserIcon from '../../.././assets/main-profile.svg';

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className="w-full h-[105px] flex items-center justify-between px-20 bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center space-x-24">
        <Link to="/">
          <img src={MainLogo} alt="Logo" className="h-12 w-12" />
        </Link>

        <Link 
          to="/activity" 
          className={`hover:text-[#222222] font-medium ${
            location.pathname === '/activity' ? 'text-lg text-[#222222] font-bold' : 'text-base text-[#5E5E5E]'
          }`}
        >
          액티비티
        </Link>

        <Link 
          to="/challenge" 
          className={`hover:text-[#222222] font-medium ${
            location.pathname === '/challenge' ? 'text-lg text-[#222222] font-bold' : 'text-base text-[#5E5E5E]'
          }`}
        >
          챌린지 기록
        </Link>

        <Link 
          to="/content" 
          className={`hover:text-[#222222] font-medium ${
            location.pathname === '/content' ? 'text-lg text-[#222222] font-bold' : 'text-base text-[#5E5E5E]'
          }`}
        >
          여행 콘텐츠
        </Link>
      </div>

      <nav className="flex items-center space-x-16">
        <Link to="/shop" className="text-gray-700">
          <img src={ShopIcon} alt="Logo" className="h-9 w-9" />
        </Link>
        {/* Profile Icon */}
        <Link to="/profile" className="text-gray-700">
          <img src={UserIcon} alt="Logo" className="h-9 w-9" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
