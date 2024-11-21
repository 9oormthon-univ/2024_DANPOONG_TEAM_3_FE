import { ReactNode } from 'react';
import BackgroundIllustrate from '@/assets/BackgroundIllustrate.svg?react';
import clsx from 'clsx';

export function BackgroundGradient({ children, className }: { children: ReactNode; className?: string }) {
    return (
        <>
            <div className={clsx(className, 'bg-transparent w-full h-fit overflow-y-auto z-10 relative')}>
                {children}
            </div>
            <div className="bg-white-to-green w-full h-1/4 relative z-0">
                <BackgroundIllustrate className="absolute bottom-0 right-0" />
            </div>
        </>
    );
}
