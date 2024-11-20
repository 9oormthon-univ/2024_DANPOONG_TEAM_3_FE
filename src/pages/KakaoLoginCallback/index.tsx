import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { postKakaoLogin } from '../UserAuth/api/postKakaoLogin';

export function KakaoLoginCallback() {
    const code = new URL(document.location.toString()).searchParams.get('code') ?? '';
    const navigate = useNavigate();

    useEffect(() => {
        postKakaoLogin(code, () => {
            navigate('/');
        });
    }, [code]);

    return (
        <div>
            <p>loading</p>
        </div>
    );
}
