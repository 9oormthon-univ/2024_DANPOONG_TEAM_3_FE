import { parseDateToString } from '@/utils/date';

export function Title() {
    const today = new Date();

    return (
        <div className="flex w-[69.75rem] justify-between mt-[105px]">
            <Tag tag="" />
            <Tag tag="#오늘도 해냈다!" />
            <div className="flex flex-col gap-3">
                <h1 className="text-main text-4xl font-semibold">오늘의 챌린지</h1>
                <h2 className="text-uiGray">{parseDateToString(today)}</h2>
            </div>
            <Tag tag="#주4회이상 인증하면" />
            <Tag tag="#1000포인트!" />
        </div>
    );
}

function Tag({ tag }: { tag: string }) {
    return <p className="pt-2 text-main min-w-32">{tag}</p>;
}
