import { client } from '@/api/client';

export const getLikes = async () => {
    try {
        return await client.get('/api/activities/favorities').then((res) => {
            return res.data;
        });
    } catch (error) {
        console.log(error);
    }
};
