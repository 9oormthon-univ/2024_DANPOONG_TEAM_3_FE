import { ReactNode } from 'react';
import { SectionTitle } from './SectionTitle';
import { Spacing } from '@/components/common/Spacing';
import { ReservationForm } from './ReservationForm';
import { FormProvider, useForm } from 'react-hook-form';
import { ReservationSchema, ReservationView } from '../schema';
import { DateSelect } from './DateSelect';
import { zodResolver } from '@hookform/resolvers/zod';
import { GuestCounter } from './Counter';

export function Reservation() {
    const methods = useForm<ReservationView>({
        mode: 'onSubmit',
        reValidateMode: 'onSubmit',
        defaultValues: {
            date: new Date(),
            time: '',
            adultCount: 0,
            childCount: 0,
        },
        resolver: zodResolver(ReservationSchema),
        shouldFocusError: false,
    });

    return (
        <div className="flex w-full justify-between">
            <FormProvider {...methods}>
                <DateSelect />
                <SectionLayout>
                    <SectionTitle>인원 선택</SectionTitle>
                    <Spacing direction="vertical" size={20} />
                    <div className="w-[30rem] h-full">
                        <GuestCounter />
                        <Spacing direction="vertical" size={62} />
                        <ReservationForm />
                    </div>
                </SectionLayout>
            </FormProvider>
        </div>
    );
}

export function SectionLayout({ children }: { children: ReactNode }) {
    return <div className="flex flex-col items-start">{children}</div>;
}
