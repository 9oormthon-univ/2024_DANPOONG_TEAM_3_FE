import { client } from '@/api/client';

export const getActivitiesReservation = async () => {
    try {
        return await client.get('/api/activities/reservations').then((res) => {
            return res.data;
        });
    } catch (error) {
        console.log(error);
    }
};
