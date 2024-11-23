import React from 'react';
import star from "../../.././assets/start.svg";
type Activity = {
  id: number;
  image: string;
  title: string;
  price: string;
  rating: number;
  reviewCount: number;
  reviewPreview: string;
};

const SearchList: React.FC<{ activities: Activity[] }> = ({ activities }) => {
    return (
      <div className="grid grid-cols-2 gap-4 mt-6">
        {activities.map((activity) => (
            <div key={activity.id} className="w-[559px] h-[242px] border rounded-lg flex overflow-hidden">
            <img src={activity.image} alt={activity.title} className="w-1/2 object-cover" />
            <div className="p-4 w-1/2 flex flex-col justify-between">
                <div>
                <h3 className="text-lg font-semibold">{activity.title}</h3>
                <p className="text-sm text-gray-500">{activity.reviewPreview}</p>
                </div>
                <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-[#59C642]">{activity.price}</span>
                <div className="flex items-center">
                    <span className="text-yellow-500">
                        <img src={star} alt="star-icon"></img>
                        {activity.rating}
                    </span>
                    <span className="text-sm text-gray-500 ml-2">({activity.reviewCount} 리뷰)</span>
                </div>
                </div>
            </div>
            </div>
    ))}
    </div>
  );
};

export default SearchList;
