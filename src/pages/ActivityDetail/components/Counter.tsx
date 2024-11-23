import { Minus, Plus } from 'lucide-react';
import { ReactNode } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { ReservationView } from '../schema';
import { MAX_ADULT_COUNT, MAX_CHILD_COUNT } from '../constant';

export function GuestCounter() {
    const { control } = useFormContext<ReservationView>();

    return (
        <div className="w-full h-12 text-[1rem] gap-5 bg-[#F8F8F8] rounded-lg flex items-center justify-between py-3 px-8">
            <Controller
                control={control}
                name="adultCount"
                render={({ field: { onChange, value } }) => (
                    <CounterWrapper>
                        <p>성인</p>
                        <Counter
                            count={value}
                            onAdd={() => handleAdultAdd({ onChange, adultCount: value })}
                            onSubtract={() => handleAdultSubtract({ onChange, adultCount: value })}
                        />
                    </CounterWrapper>
                )}
            />
            <hr className="h-8 w-[2px] bg-[#E4E4E4]" />
            <Controller
                control={control}
                name="childCount"
                render={({ field: { onChange, value } }) => (
                    <CounterWrapper>
                        <p className="w-fit">어린이</p>
                        <Counter
                            count={value}
                            onAdd={() => handleChildAdd({ onChange, childCount: value })}
                            onSubtract={() => handleChildSubtract({ onChange, childCount: value })}
                        />
                    </CounterWrapper>
                )}
            />
        </div>
    );

    function handleAdultAdd({ onChange, adultCount }: { onChange: (value: number) => void; adultCount: number }) {
        if (adultCount < MAX_ADULT_COUNT) {
            onChange(adultCount + 1);
        }
    }

    function handleAdultSubtract({ onChange, adultCount }: { onChange: (value: number) => void; adultCount: number }) {
        if (adultCount > 0) {
            onChange(adultCount - 1);
        }
    }

    function handleChildAdd({ onChange, childCount }: { onChange: (value: number) => void; childCount: number }) {
        if (childCount < MAX_CHILD_COUNT) {
            onChange(childCount + 1);
        }
    }

    function handleChildSubtract({ onChange, childCount }: { onChange: (value: number) => void; childCount: number }) {
        if (childCount > 0) {
            onChange(childCount - 1);
        }
    }
}

export function Counter({ count, onAdd, onSubtract }: { count: number; onAdd: () => void; onSubtract: () => void }) {
    return (
        <div className="flex items-center w-fit h-fit gap-2">
            <button
                className="!bg-[#E5E5E5] flex justify-center items-center rounded-full size-6 hover:outline-none focus:outline-none"
                onClick={onSubtract}
            >
                <Minus className="size-4 text-uiBlack" />
            </button>
            <p>{count}</p>
            <button
                className="!bg-[#E5E5E5] flex justify-center items-center rounded-full size-6 hover:outline-none focus:outline-none"
                onClick={onAdd}
            >
                <Plus className="size-4 text-uiBlack" />
            </button>
        </div>
    );
}

export function CounterWrapper({ children }: { children: ReactNode }) {
    return <div className="flex justify-between items-center w-full">{children}</div>;
}
