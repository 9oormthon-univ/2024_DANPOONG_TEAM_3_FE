import axios from 'axios';
import qs from 'qs';
import { KAKAO_CODE_POST_URL } from '../constant';

export const postKakaoLogin = async (code: string, callback: () => void) => {
    try {
        axios
            .post(
                KAKAO_CODE_POST_URL,
                qs.stringify({
                    grant_type: 'authorization_code',
                    client_id: import.meta.env.VITE_KAKAO_API_KEY,
                    redirect_uri: import.meta.env.VITE_KAKAO_REDIRECT_URI,
                    code: code,
                }),
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
                    },
                }
            )
            .then((res) => {
                axios
                    .post(
                        'https://kapi.kakao.com/v2/user/me',
                        {
                            accessToken: res.data.access_token,
                        },
                        {
                            headers: {
                                Authorization: `Bearer ${res.data.access_token}`,
                            },
                        }
                    )
                    .then((res) => {
                        console.log(res);
                        callback();
                    });
            });
    } catch (error) {
        console.error(error);
    }
};
