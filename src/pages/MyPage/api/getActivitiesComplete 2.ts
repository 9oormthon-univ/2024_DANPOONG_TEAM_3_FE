import { client } from '@/api/client';

export const getActivitiesComplete = async () => {
    try {
        return await client.get('/api/activities/completed').then((res) => {
            return res.data;
        });
    } catch (error) {
        console.log(error);
    }
};
