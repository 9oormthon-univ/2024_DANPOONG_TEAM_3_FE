import { client } from '@/api/client';

export const getTodayChallenge = async () => {
    try {
        return await client.get('/api/challenges/today').then((res) => {
            return res.data;
        });
    } catch (error) {
        console.log(error);
    }
};
