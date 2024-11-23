import { Spacing } from '@/components/common/Spacing';
import { CertificateSection } from './component/CertificateSection';
import { Title } from './component/Title';
import { BackgroundGradient } from './component/BackgroundGradient';
import { Calendar } from './component/Calendar';
import { useGetTodayChallenge } from './hooks/useGetTodayChallenge';
import { useGetChallenges } from './hooks/useGetChallenges';
import Header from '../Main/component/Header';

export function ChallengePage() {
    const { data: todayChallenge } = useGetTodayChallenge();
    const { data: challengesData } = useGetChallenges();

    interface Challenge {
        id: number;
        image_url: string;
        content: string;
        performedAt: string;
        certification: string;
    }

    // 날짜별 태그 데이터를 전달합니다.
    // certified: 승인됨, uncertified: 거절됨, pending: 대기 중
    const tagData = challengesData?.data?.reduce((acc: Record<string, string>, challenge: Challenge) => {
        const date = challenge?.performedAt;
        acc[date] = challenge?.certification;
        return acc;
    }, {});
    console.log(tagData);

    return (
        <BackgroundGradient className="size-full flex flex-col items-center">
            <Header />
            <Spacing direction="vertical" size={65} />
            <Title />
            <Spacing direction="vertical" size={78} />
            <CertificateSection challengeName={todayChallenge?.data?.content ?? '사용 가능한 챌린지가 없습니다.'} />
            <Spacing direction="vertical" size={78} />
            <Calendar tagData={tagData} />
        </BackgroundGradient>
    );
}
