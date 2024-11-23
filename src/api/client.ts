import { USER_STATE } from '@/constant';
import { getCookie } from '@/utils/cookie';
import axios from 'axios';

export const client = axios.create({
    baseURL: 'https://outofcity.site',
    headers: {
        Authorization: getCookie(USER_STATE)?.data?.jwtToken ? `${getCookie(USER_STATE)?.data?.jwtToken}` : null,
    },
});
