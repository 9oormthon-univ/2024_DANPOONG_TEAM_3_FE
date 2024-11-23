import clsx from 'clsx';
import { ReactNode } from 'react';
import { Profile } from './component/Profile';
import { Likes } from './component/Like';
import { Spacing } from '@/components/common/Spacing';
import Header from '../Main/component/Header';
import { BackgroundGradient } from './component/BackGroundGradient';
import { CompleteBar } from './component/CompleteBar';
import { Reservations } from './component/Reservations';

export function MyPage() {
    return (
        <BackgroundGradient className="size-full">
            <Header />
            <Spacing direction="vertical" size={56} />
            <div className="flex justify-center items-center flex-col">
                <div className="mt-[105px] w-[58.451rem] flex justify-between">
                    <div>
                        <Profile />
                        <Spacing direction="vertical" size={57} />
                        <Likes />
                    </div>
                    <Reservations />
                </div>
                <CompleteBar />
            </div>
        </BackgroundGradient>
    );
}

export function SectionTitle({ children, className }: { children: string | ReactNode; className?: string }) {
    return <h3 className={clsx('text-xl', className)}>{children}</h3>;
}
