import React, { useState } from 'react';
import CertifyModal from './CertifyModal';
import Character from '../../.././assets/main-character.svg';
import { useNavigate } from 'react-router-dom';
import { useGetTodayChallenge } from '@/pages/Challenge/hooks/useGetTodayChallenge';

const TodayChallenge: React.FC = () => {
    const [isCertifyModalOpen, setIsCertifyModalOpen] = useState(false);
    const navigate = useNavigate();

    const handleCertifyClick = () => {
        // setIsCertifyModalOpen(true);
        navigate('/challenge');
    };

    const handleCloseModal = () => {
        setIsCertifyModalOpen(false);
    };

    const { data: todayChallenge } = useGetTodayChallenge();

    return (
        <div className="relative w-[100vw] h-[650px] bg-white flex flex-col items-center justify-center">
            {/* Top Hashtags */}
            <div className="flex justify-between w-full px-80 text-[#59C642] mb-4 text-[16px] font-regular space-x-4">
                <span>#오늘도 해냈다!</span>
                <span>#주4회이상 인증하면</span>
                <span>#1000포인트!</span>
            </div>
            {/* Main Title */}
            <h1 className="text-[33px] font-semibold text-green-500 mb-2">오늘의 챌린지</h1>
            {/* Date */}
            <span className="text-[20px] font-regular text-gray-500 mb-[8rem]">2024년 11월 24일 (일)</span>
            {/* Oval Character and Challenge Title */}
            <div className="relative flex items-center w-[1080px] h-[171px] justify-center border-2 border-green-500 rounded-full py-4 px-40">
                {/* Character Image Placeholder */}
                <div className="w-[308px] h-[248px] rounded-full absolute bottom-0 left-0 ml-20">
                    <img src={Character} alt="Character"></img>
                </div>
                {/* Challenge Title */}
                <div className="flex flex-col ml-auto mr-11">
                    <span className="text-[35px] font-semibold text-green-500 mb-2 text-right">
                        {todayChallenge?.data?.content ?? '사용 가능한 챌린지가 없습니다.'}
                    </span>
                    {/* Certify Button */}
                    <button
                        onClick={handleCertifyClick}
                        className="w-[187px] h-[44px] bg-[#59C642] text-white font-medium text-[20px] rounded-full flex items-center justify-center"
                    >
                        인증하기
                    </button>
                </div>
            </div>
            {/* Certify Modal */}
            {isCertifyModalOpen && <CertifyModal onClose={handleCloseModal} />}
        </div>
    );
};

export default TodayChallenge;
