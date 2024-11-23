import MyPageBar from '@/assets/MyPageBar.svg?react';
import CompleteMark from '@/assets/CompleteMark.svg?react';
import { useGetActivitiesComplete } from '../hooks/useGetActivitiesComplete';
import clsx from 'clsx';
import { format } from 'date-fns';

export function CompleteBar() {
    const { data: complete } = useGetActivitiesComplete();
    console.log(complete?.data);

    const monthlyData = Array(12).fill(''); // 12개의 빈 문자열로 초기화된 배열

    complete?.data?.forEach((item) => {
        const month = Number(format(item?.orderTime?.split('T')[0], 'MM')) - 1; // 월을 0부터 시작하는 인덱스로 변환
        monthlyData[month] = item; // 해당 월의 인덱스에 값을 할당
    });

    return (
        <div className="relative w-fit flex justify-center items-center mt-24">
            <MyPageBar className="absolute bottom-0" />
            <div className="w-[1095px] h-fit grid grid-cols-12 pb-9 px-36">
                {monthlyData?.map((item) => {
                    return <CompleteItem key={item.orderName} complete={item} />;
                })}
            </div>
        </div>
    );
}

function CompleteItem({ complete, className }: { complete: any; className?: string }) {
    const { orderActivityPhoto, orderTime } = complete;
    return (
        <div className={clsx(className, 'flex justify-center items-center relative size-fit')}>
            {complete === '' ? (
                <div className="size-[4rem]" />
            ) : (
                <div className="flex flex-col items-center">
                    <>
                        <div className="size-[4rem] flex justify-center items-center overflow-clip rounded-full absolute top-4">
                            <img src={orderActivityPhoto[0]} className="h-full w-full" />
                        </div>
                        <CompleteMark />
                    </>
                    <p className="text-uiGray">{Number(format(orderTime.split(' ')[0], 'MM')) + '월'}</p>
                </div>
            )}
        </div>
    );
}
