import Illustrate from '@/assets/ChallengeIllustrate.svg?react';
import { useOverlay } from '@toss/use-overlay';
import { ChallengeUploadModal } from './ChallengeUploadModal';

export function CertificateSection({ challengeName }: { challengeName: string }) {
    const overlay = useOverlay();

    return (
        <div>
            <div className="border border-main rounded-full w-[69.75rem] h-[10.688rem] relative flex items-center">
                <Illustrate className="absolute bottom-0 ml-20" />
                <div className="flex flex-col ml-[28.375rem] gap-5">
                    <h1 className="text-main text-3xl font-semibold">{challengeName}</h1>
                    <button
                        className="bg-main text-white rounded-full w-[11.688rem] h-11 focus:outline-none border-0"
                        onClick={() => {
                            overlay.open(({ isOpen, exit }) => <ChallengeUploadModal open={isOpen} setOpen={exit} />);
                        }}
                    >
                        인증하기
                    </button>
                </div>
            </div>
        </div>
    );
}
