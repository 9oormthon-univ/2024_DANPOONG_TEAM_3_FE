export const KAKAO_CODE_POST_URL =
    'https://kauth.kakao.com/oauth/token?grant_type=authorization_code&cliende=W0AxCs6SIAoTRtcfkM-79FWY9r0eVOXFg8n-Xnay4CkbZzc_wrPUDgAAAAQKPCRaAAABkz_YcPctjdRiIM79qQ';
export const KAKAO_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${
    import.meta.env.VITE_KAKAO_API_KEY
}&redirect_uri=${import.meta.env.VITE_KAKAO_REDIRECT_URI}`;
