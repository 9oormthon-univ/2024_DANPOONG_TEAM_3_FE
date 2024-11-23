import { client } from '@/api/client';

export const getChallenges = async () => {
    try {
        return await client.get('/api/challenges').then((res) => {
            return res.data;
        });
    } catch (error) {
        console.log(error);
    }
};
