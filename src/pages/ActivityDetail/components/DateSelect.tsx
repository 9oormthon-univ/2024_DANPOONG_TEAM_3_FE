import { Spacing } from '@/components/common/Spacing';
import { Calendar } from '@/components/ui/calendar';
import { useFormContext, Controller } from 'react-hook-form';
import { ReservationView } from '../schema';
import { SectionLayout } from './Reservation';
import { SectionTitle } from './SectionTitle';

export function DateSelect() {
    const { control } = useFormContext<ReservationView>();

    return (
        <Controller
            control={control}
            name="date"
            render={({ field: { onChange, value } }) => (
                <SectionLayout>
                    <SectionTitle>이용 날짜 선택</SectionTitle>
                    <Spacing direction="vertical" size={20} />{' '}
                    <Calendar
                        mode="single"
                        selected={value}
                        onSelect={onChange}
                        className="rounded-md border w-[22rem] h-fit py-8 px-5 border-none"
                    />
                </SectionLayout>
            )}
        />
    );
}
