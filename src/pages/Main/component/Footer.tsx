import React from 'react';
import footerIllustration from "../../.././assets/main-footer.svg"; 

const Footer: React.FC = () => {
  return (
    <div className="relative w-full h-[300px] bg-gradient-to-t from-[#DEF8D9] to-[#FBFEFA] flex items-end">
      {/* 일러스트 배경 이미지 */}
      <img 
        src={footerIllustration} 
        alt="Footer Illustration" 
        className="absolute bottom-0 left-0 w-full object-cover" 
      />
      {/* Footer Content */}
      <div className="relative w-full text-center p-8 text-[#59C642] text-sm">
        <p>© 2024 Out of City. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
