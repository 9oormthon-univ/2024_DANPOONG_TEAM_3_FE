import { BackgroundGradient } from './component/BackgroundGradient';
import { KakaoLoginButton } from './component/KakaoLoginButton';
import Logo from '@/assets/OutOfCityLogo.svg?react';
import { RegisterInformation } from './component/RegisterInformation';

export function UserAuth() {
    return (
        <>
            <Logo className="absolute top-0 left-0 mt-10 ml-14" />
            <BackgroundGradient className="space-y-16">
                <h1 className="text-main font-semibold text-4xl">환영합니다!</h1>
                <KakaoLoginButton />
                <RegisterInformation />
            </BackgroundGradient>
        </>
    );
}
