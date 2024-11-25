import { Spacing } from '@/components/common/Spacing';
import { SectionTitle } from '..';
import { useGetLikes } from '../hooks/useGetLikes';
import { LikeItemModel } from '../model/like';

export function Likes() {
    const { data: likes } = useGetLikes();

    return (
        <div className="flex flex-col items-start">
            <SectionTitle>찜 목록</SectionTitle>
            <Spacing direction="vertical" size={19} />
            <div className="felx flex-col w-[25rem] h-[25rem] shadow-sm overflow-y-auto">
                {likes?.data ? (
                    <>
                        {likes?.data?.map((item, index) => (
                            <LikeItem key={index} like={item} />
                        ))}
                    </>
                ) : (
                    <div className="flex flex-col items-center justify-center size-full">
                        <p className="font-semibold text-sm text-uiBlack">찜 목록이 없습니다.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

// {
//     "id": 2,
//     "activityName": "포천 산내지 우디 독채스테이",
//     "activityPhoto": [
//         "https://image.example.com/1",
//         "https://image.example/2"
//     ],
//     "description": "테스트 액티비티",
//     "state": "activate",
//     "price": 15000,
//     "mainCategory": "농촌으로",
//     "createdAt": "2024-11-24T02:39:11",
//     "updatedAt": "2024-11-24T02:39:13",
//     "address": "경기 포천",
//     "latitude": 1.1,
//     "longitude": 1.1
// },

export function LikeItem({ like }: { like: LikeItemModel }) {
    const { activityName, address, price, activityPhoto } = like;

    return (
        <div className="felx flex-col p-[0.8rem] border border-[#E5E5E5] rounded-lg w-full items-center h-100 justify-center shadow-sm mb-5">
            <div className="flex gap-3">
                <img src={activityPhoto[0]} alt="" className="w-[6.25rem] h-[6.25rem] object-cover rounded-lg" />
                <div className="flex flex-col w-full">
                    <div className="flex items-start justify-between flex-col w-full">
                        <p className="font-semibold text-sm flex gap-1 w-full text-left">
                            <p>[{address}]</p>
                            <p className="font-[400]">{activityName}</p>
                        </p>
                        <p className="font-semibold self-end text-sm">
                            {new Intl.NumberFormat('ko-KR').format(Number(price))}원
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
