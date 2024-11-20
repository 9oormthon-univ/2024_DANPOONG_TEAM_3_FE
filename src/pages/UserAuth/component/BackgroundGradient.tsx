import { ReactNode } from 'react';
import BackgroundIllustrate from '@/assets/BackgroundIllustrate.svg?react';
import clsx from 'clsx';

export function BackgroundGradient({ children, className }: { children: ReactNode; className?: string }) {
    return (
        <>
            <div className={clsx(className, 'bg-white size-full px-14 py-36')}>{children}</div>
            <div className="bg-white-to-green w-full h-1/4 absolute bottom-0" />
            <BackgroundIllustrate className="absolute bottom-0 right-0" />
        </>
    );
}
