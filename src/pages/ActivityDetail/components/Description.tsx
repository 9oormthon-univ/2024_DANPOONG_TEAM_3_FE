import { Spacing } from '@/components/common/Spacing';
import { SectionTitle } from './SectionTitle';

export function Description({ description }: { description: string }) {
    return (
        <div className="flex flex-col justify-start items-start">
            <SectionTitle>개요</SectionTitle>
            <Spacing direction="vertical" size={20} />
            <p className="text-left text-lg text-[#3D3D3D] whitespace-pre-line">{description}</p>
        </div>
    );
}
