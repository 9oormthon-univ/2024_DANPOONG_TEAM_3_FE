import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MainLogo from '../../.././assets/main-logo.svg';
import ShopIcon from '../../.././assets/main-shop.svg';
import UserIcon from '../../.././assets/main-profile.svg';
import { getCookie, removeCookie } from '@/utils/cookie';
import { USER_STATE } from '@/constant';

const Header: React.FC = () => {
    const [userData, setUserData] = useState(getCookie(USER_STATE)?.data ?? null);
    const location = useLocation();

    return (
        <header className="w-full h-[105px] flex items-center justify-between px-20 bg-white shadow-md fixed top-0 left-0 right-0 z-50">
            <div className="flex items-center space-x-24">
                <img
                    src={MainLogo}
                    alt="Logo"
                    className="h-12 w-12 cursor-pointer"
                    onClick={() => (window.location.href = '/')}
                />
                <Link
                    to="/activity"
                    className={`hover:text-[#222222] font-medium ${
                        location.pathname === '/activity'
                            ? 'text-lg text-[#222222] font-bold'
                            : 'text-base text-[#5E5E5E]'
                    }`}
                >
                    액티비티
                </Link>
                <Link
                    to="/challenge"
                    className={`hover:text-[#222222] font-medium ${
                        location.pathname === '/challenge'
                            ? 'text-lg text-[#222222] font-bold'
                            : 'text-base text-[#5E5E5E]'
                    }`}
                >
                    챌린지 기록
                </Link>
                <Link
                    to="/content"
                    className={`hover:text-[#222222] font-medium ${
                        location.pathname === '/content'
                            ? 'text-lg text-[#222222] font-bold'
                            : 'text-base text-[#5E5E5E]'
                    }`}
                >
                    여행 콘텐츠
                </Link>
            </div>
            <nav className="flex items-center space-x-16">
                {userData ? (
                    <span
                        className="text-sm text-uiGray cursor-pointer"
                        onClick={() => {
                            removeCookie(USER_STATE);
                            setUserData(null);
                            window.location.reload();
                        }}
                    >
                        로그아웃
                    </span>
                ) : null}
                <Link to="/shop" className="text-gray-700">
                    <img src={ShopIcon} alt="Logo" className="h-9 w-9" />
                </Link>
                {userData ? (
                    <Link to="/myPage" className="text-gray-700">
                        <img src={userData?.profileImageUrl} alt="Logo" className="h-10 w-10 rounded-full" />
                    </Link>
                ) : (
                    <Link to="/auth" className="text-gray-700">
                        <img src={UserIcon} alt="Logo" className="h-9 w-9" />
                    </Link>
                )}
            </nav>
        </header>
    );
};

export default Header;
