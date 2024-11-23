import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { ReactNode } from 'react';

export function TimeSelectPopover({
    trigger,
    content,
    disabled,
}: {
    trigger: ReactNode;
    content: ReactNode;
    disabled?: boolean;
}) {
    return (
        <Popover>
            <PopoverTrigger disabled={disabled} className="!w-full">
                {trigger}
            </PopoverTrigger>
            <PopoverContent className="!w-[27rem] h-fit bg-[#F0F0F0]">{content}</PopoverContent>
        </Popover>
    );
}
