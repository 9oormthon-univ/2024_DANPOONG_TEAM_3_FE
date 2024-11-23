import { ReactNode } from 'react';
import BackgroundGradientOnly from '@/assets/BackgroundGradientOnly.svg?react';
import clsx from 'clsx';

export function BackgroundGradient({ children, className }: { children: ReactNode; className?: string }) {
    return (
        <>
            <div className={clsx(className, 'bg-transparent w-full h-fit z-10 relative')}>{children}</div>
            <div className="bg-white-to-green w-full h-1/4 relative z-0">
                <BackgroundGradientOnly className="absolute bottom-0 right-0" />
            </div>
        </>
    );
}
