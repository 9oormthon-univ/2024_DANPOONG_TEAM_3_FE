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
    <div className="flex flex-wrap gap-2 my-4">
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => handleTagClick(tag)}
          className={`w-[93px] h-[46px] rounded-[72px] border ${
            selectedTag === tag ? 'bg-[#59C642] text-white' : 'bg-white text-gray-500'
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default SearchTags;
