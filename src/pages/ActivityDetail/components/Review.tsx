import { Spacing } from '@/components/common/Spacing';
import { SectionLayout } from './Reservation';
import { SectionTitle } from './SectionTitle';
import { Review } from '../model/review';
import { RatingStar } from './RatingStar';

export function Reviews({
    reviews,
    reviewRate,
}: {
    reviews: Review[];
    reviewRate: { serviceRate: number; interestRate: number; locationRate: number; priceRate: number };
}) {
    return (
        <SectionLayout>
            <SectionTitle className="flex gap-2">
                <p>리뷰 </p>
                <p className="text-uiGray">{`${reviews?.length ?? '0'}개`}</p>
            </SectionTitle>
            <Spacing direction="vertical" size={20} />
            <ReviewAverage
                rating={(reviews?.reduce((acc, review) => acc + review.rating, 0) / (reviews?.length ?? 0)).toFixed(1)}
                reviewRate={reviewRate}
            />
        </SectionLayout>
    );
}

function ReviewAverage({
    rating,
    reviewRate,
}: {
    rating: string;
    reviewRate: { serviceRate: number; interestRate: number; locationRate: number; priceRate: number };
}) {
    return (
        <div className="flex w-full items-center justify-center border-[#E5E5E5] border rounded-lg px-[4.75rem] py-20">
            <div className="gap-[1.5rem] flex items-center">
                <div className="flex gap-1 items-end leading-[57.28px]">
                    <p className="text-[3rem] leading-[57.28px] font-[600] text-main">{rating}</p>
                    <p className="text-[2rem] font-[400] text-main">/5</p>
                </div>
                <RatingStar rating={Number(rating)} />
            </div>
            <Spacing direction="horizontal" size={80} />
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
                <ReviewAverageItem title="위치" rating={reviewRate?.locationRate ?? 0} />
                <ReviewAverageItem title="서비스" rating={reviewRate?.serviceRate ?? 0} />
                <ReviewAverageItem title="흥미도" rating={reviewRate?.interestRate ?? 0} />
                <ReviewAverageItem title="가격대비 만족도" rating={reviewRate?.priceRate ?? 0} />
            </div>
        </div>
    );
}

function ReviewAverageItem({ title, rating }: { title: string; rating: number }) {
    return (
        <div className="flex flex-col gap-[0.5rem] items-start">
            <p className="text-uiBlack text-[0.9rem]">{title}</p>
            <ProgressBar rating={rating} />
        </div>
    );
}

export function ProgressBar({ rating, maxRating = 5 }: { rating: number; maxRating?: number }) {
    const percentage = Math.min(Math.max(rating / maxRating, 0), 1) * 100;

    return (
        <svg width="159" height="9" viewBox="0 0 159 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* 배경 바 */}
            <rect width="159" height="9" rx="4.5" fill="#D9D9D9" />
            {/* 진행 바 */}
            <rect width={`${(159 * percentage) / 100}`} height="9" rx="4.5" fill="#59C642" />
        </svg>
    );
}
