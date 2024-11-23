import React from 'react';

interface CertifyModalProps {
  onClose: () => void;
}

const CertifyModal: React.FC<CertifyModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-[500px] p-8 rounded-lg shadow-lg flex flex-col items-center">
        {/* Modal Content */}
        <h2 className="text-2xl font-bold text-green-500 mb-4 text-center">챌린지 인증하기</h2>
        <p className="text-gray-700 mb-6 text-center">오늘의 챌린지를 인증해주세요!</p>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="bg-[#59C642] text-white px-6 py-2 rounded-full font-semibold">
          닫기
        </button>
      </div>
    </div>
  );
};

export default CertifyModal;
