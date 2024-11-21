import { Spacing } from '@/components/common/Spacing';
import { CertificateSection } from './component/CertificateSection';
import { Title } from './component/Title';
import { BackgroundGradient } from './component/BackgroundGradient';
import { Calendar } from './component/Calendar';

export function Challenge() {
    // 날짜별 태그 데이터를 전달합니다.
    // approved: 승인됨, declined: 거절됨
    const tagData = {
        '2024-11-06': 'approved',
        '2024-11-07': 'declined',
    };

    return (
        <BackgroundGradient className="size-full flex flex-col items-center">
            <Spacing direction="vertical" size={65} />
            <Title />
            <Spacing direction="vertical" size={78} />
            <CertificateSection challengeName="여행 지역 근처 전통시장 가보기" />
            <Calendar tagData={tagData} />
        </BackgroundGradient>
    );
}
