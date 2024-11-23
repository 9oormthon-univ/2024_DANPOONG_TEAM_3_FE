import { client } from '@/api/client';

export const getActivityDetail = async (activityId: number | null) => {
    try {
        return await client.get(`/api/activities/${activityId}`).then((res) => {
            return res.data;
        });
    } catch (error) {
        console.log(error);
    }
};
