import { Spacing } from '@/components/common/Spacing';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';

export function ChallengeUploadModal({ open, setOpen }: { open: boolean; setOpen: () => void }) {
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="min-w-[39.5rem] h-fit px-9 py-12">
                <DialogHeader>
                    <DialogTitle className="text-2xl text-uiBlack">챌린지 인증하기</DialogTitle>
                </DialogHeader>
                <Spacing direction="vertical" size={10} />
                <div className="w-full h-64 rounded-md shadow-lg"></div>
                <Spacing direction="vertical" size={20} />
                <p className="text-[#464646] text-sm">인증을 완료하기까지 3-5일 걸릴 수 있습니다.</p>
                <Spacing direction="vertical" size={30} />
                <DialogFooter className="sm:justify-start">
                    <button className="bg-main w-full h-fit py-3 text-white text-lg rounded-lg">등록하기</button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
