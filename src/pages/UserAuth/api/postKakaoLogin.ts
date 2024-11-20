import axios from 'axios';
import { KAKAO_CODE_POST_URL } from '../constant';

export const postKakaoLogin = async (code: string, callback: () => void) => {
    try {
        axios
            .post(KAKAO_CODE_POST_URL, {
                code: code,
            })
            .then((res) => {
                if (res.data.code === 200) {
                    callback();
                }
            });
    } catch (error) {
        console.error(error);
    }
};
