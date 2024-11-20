import axios from 'axios';

export const getKakaoLogin = async () => {
    axios.get(
        `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${
            import.meta.env.VITE_KAKAO_API_KEY
        }&redirect_uri=${import.meta.env.VITE_KAKAO_REDIRECT_URI}`
    );
};
