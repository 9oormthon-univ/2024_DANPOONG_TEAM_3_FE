import { Popover, PopoverContent } from '@/components/ui/popover';

export function TimeSelectPopover({ open, setOpen }: { open: boolean; setOpen: () => void }) {
    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverContent className="w-80">
                <div className="grid gap-4">
                    <div className="space-y-2">
                        <h4 className="font-medium leading-none">Dimensions</h4>
                        <p className="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
                    </div>
                    <div className="grid gap-2">fdjdlfk</div>
                </div>
            </PopoverContent>
        </Popover>
    );
}
