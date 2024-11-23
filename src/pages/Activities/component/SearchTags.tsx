import React, { useState } from 'react';

type Tag = '인기순' | '농촌체험' | '어촌체험' | '목장체험' | '관광' | '스포츠' | '요리' | '문화예술';

const SearchTags: React.FC<{ onTagSelect: (tag: Tag) => void }> = ({ onTagSelect }) => {
  const [selectedTag, setSelectedTag] = useState<Tag | null>(null);
  const tags: Tag[] = ['인기순', '농촌체험', '어촌체험', '목장체험', '관광', '스포츠', '요리', '문화예술'];

  const handleTagClick = (tag: Tag) => {
    setSelectedTag(tag);
    onTagSelect(tag); // 선택된 태그를 부모 컴포넌트로 전달
  };

  return (
    <div className="flex flex-col items-center justify-center my-4 w-full">
      <div className="flex flex-wrap items-center gap-5 mt-[1rem] mb-[0.5rem]">
        <span className="text-[17px] font-regular text-gray-500">검색결과</span>
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => handleTagClick(tag)}
            className={`w-[93px] h-[46px] rounded-[72px] border focus:outline-none ${
              selectedTag === tag ? 'bg-[#F0FFED] text-black border-[#59C642]' : 'bg-white text-gray-500 border-gray-300'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchTags;
