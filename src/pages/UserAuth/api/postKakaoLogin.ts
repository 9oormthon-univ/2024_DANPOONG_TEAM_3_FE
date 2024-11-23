import axios from 'axios';
import qs from 'qs';
import { KAKAO_CODE_POST_URL } from '../constant';
import { client } from '@/api/client';
import { USER_STATE } from '@/constant';
import { setCookie } from '@/utils/cookie';

export const postKakaoLogin = async (code: string, callback: () => void) => {
    try {
        if (code === '') {
            return;
        }

        const code_post_response = await axios.post(
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
        );

        if (code_post_response.status !== 200) {
            return;
        }
        const kakao_user_response = await axios.post(
            'https://kapi.kakao.com/v2/user/me',
            {
                accessToken: code_post_response.data.access_token,
            },
            {
                headers: {
                    Authorization: `Bearer ${code_post_response.data.access_token}`,
                },
            }
        );

        if (kakao_user_response.status !== 200) {
            return;
        } else {
            try {
                await client
                    .post('/api/login/kakao', {
                        id: kakao_user_response.data.id,
                        email: kakao_user_response.data.kakao_account.email,
                        name: kakao_user_response.data.kakao_account.profile.nickname,
                        profileImageUrl: kakao_user_response.data.kakao_account.profile.profile_image_url,
                    })
                    .then((res) => {
                        console.log(res);
                        setCookie(USER_STATE, res.data, {
                            path: '/',
                            maxAge: 60 * 60 * 24 * 7,
                        });
                        callback();
                    });
            } catch (error) {
                console.error(error);
            }
        }
    } catch (error) {
        console.error(error);
    }
};
