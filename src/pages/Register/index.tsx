import RegisterTop from '@/assets/RegisterTop.svg?react';
import RegisterButton from '@/assets/RegisterButton.svg?react';
import { Spacing } from '@/components/common/Spacing';

export function Register() {
    return (
        <div className="flex flex-col items-center justify-between size-full">
            <div>
                <RegisterTop className="w-full" />
                <Spacing direction="vertical" size={40} />
                <h1 className="text-[2.5rem] font-[600] text-main">Out Of City 입점하기</h1>
                <Spacing direction="vertical" size={21} />
                <h2 className="text-uiGray text-[1.25rem]">앞으로 Out Of City와 함께 해주세요!</h2>
            </div>
            <button>
                <RegisterButton />
            </button>
            <Spacing direction="vertical" size={21} />
        </div>
    );
}
