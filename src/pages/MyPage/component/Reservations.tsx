import { Spacing } from '@/components/common/Spacing';
import { SectionTitle } from '..';
import { useGetActivitiesReservation } from '../hooks/useGetActivitiesReservation';
import { ReservationModel } from '../model/reservation';
import { parseDateToString } from '@/utils/date';
import { Button } from 'react-day-picker';

export function Reservations() {
    const { data } = useGetActivitiesReservation();
    console.log(data);
    return (
        <div className="flex flex-col items-start w-[28rem] leading-[23.87px]">
            <SectionTitle>
                예정된 예약 <strong className="font-[600]">{data?.data?.length ?? 0}개</strong>
            </SectionTitle>
            <Spacing direction="vertical" size={19} />
            {data?.data?.map((item) => {
                return <ReservationItem key={item.id} item={item} />;
            })}
        </div>
    );
}

function ReservationItem({ item }: { item: ReservationModel }) {
    return (
        <div className="w-full border border-[#E5E5E5] py-5 px-6 rounded-lg flex justify-center shadow-sm flex-col items-start gap-3">
            <p className="text-xs">주문번호 {item?.orderNumber}</p>
            <div className="w-full flex gap-5">
                <div className="w-[235px] h-[117px] bg-[#F7FEF5] rounded-lg">
                    <img className="size-full rounded-lg" src={item?.orderActivityPhoto[0]} alt="" />
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1 justify-start">
                        <p className="w-fit text-xs text-uiGray">날짜</p>
                        <p className="text-sm">{parseDateToString(new Date(item?.orderTime?.split('T')[0]))}</p>
                    </div>
                    <div className="flex gap-5">
                        <div className="flex flex-col gap-1 justify-start">
                            <p className="w-fit text-xs text-uiGray">시간</p>
                            <p className="text-sm w-fit">{item?.orderTime?.split('T')[1]}</p>
                        </div>
                        <div className="flex flex-col gap-1 justify-start">
                            <p className="w-fit text-xs text-uiGray">인원</p>
                            <p className="text-sm w-fit">{item?.orderPerson}명</p>
                        </div>
                    </div>
                </div>
            </div>
            <button className="bg-[#F3F3F3] text-uiBlack w-full h-10 rounded-lg flex justify-center items-center">
                주문 취소
            </button>
        </div>
    );
}
