import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { postKakaoLogin } from '../UserAuth/api/postKakaoLogin';
import { USER_STATE } from '@/constant';
import { getCookie } from '@/utils/cookie';

export function KakaoLoginCallback() {
    const code = new URL(document.location.toString()).searchParams.get('code') ?? '';
    const navigate = useNavigate();

    useEffect(() => {
        if (!getCookie(USER_STATE)) {
            postKakaoLogin(code, () => {
                navigate('/');
            });
        }
    }, []);

    return (
        <div>
            <p>loading</p>
        </div>
    );
}
