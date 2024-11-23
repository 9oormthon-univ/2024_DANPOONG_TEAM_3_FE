import clsx from 'clsx';
import { ReactNode } from 'react';

export function SectionTitle({ children, className }: { children: string | ReactNode; className?: string }) {
    return <h3 className={clsx('text-xl', className)}>{children}</h3>;
}
