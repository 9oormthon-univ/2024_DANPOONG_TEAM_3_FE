import KakaoButton from '@/assets/KakaoLoginButton.svg?react';
import KakaoLoginCharacter from '@/assets/KakaoLoginCharacter.svg?react';

import { KAKAO_URL } from '../constant';

export function KakaoLoginButton() {
    return (
        <div className="flex flex-col justify-center items-center">
            <KakaoLoginCharacter />
            <button
                className="bg-transparent focus:outline-none border-0 w-[493px] p-0"
                onClick={() => {
                    handleKakaoLogin();
                }}
            >
                <KakaoButton className="size-fit" />
            </button>
        </div>
    );

    function handleKakaoLogin() {
        window.location.href = KAKAO_URL;
    }
}
