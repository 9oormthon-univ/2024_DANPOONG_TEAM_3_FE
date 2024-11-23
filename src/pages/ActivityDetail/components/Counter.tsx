import { Minus, Plus } from 'lucide-react';
import { ReactNode } from 'react';

export function GuestCounter({
    adultCount,
    childCount,
    onAdultAdd,
    onAdultSubtract,
    onChildAdd,
    onChildSubtract,
}: {
    adultCount: number;
    childCount: number;
    onAdultAdd: () => void;
    onAdultSubtract: () => void;
    onChildAdd: () => void;
    onChildSubtract: () => void;
}) {
    return (
        <div className="w-full h-12 text-[1rem] gap-5 bg-[#F8F8F8] rounded-lg flex items-center justify-between py-3 px-8">
            <CounterWrapper>
                <p>성인</p>
                <Counter count={adultCount} onAdd={onAdultAdd} onSubtract={onAdultSubtract} />
            </CounterWrapper>
            <hr className="h-8 w-[2px] bg-[#E4E4E4]" />
            <CounterWrapper>
                <p className="w-fit">어린이</p>
                <Counter count={childCount} onAdd={onChildAdd} onSubtract={onChildSubtract} />
            </CounterWrapper>
        </div>
    );
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
