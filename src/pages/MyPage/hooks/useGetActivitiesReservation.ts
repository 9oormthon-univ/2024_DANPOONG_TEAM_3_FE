import { useQuery } from '@tanstack/react-query';
import { getActivitiesReservation } from '../api/getActivitiesReservation';
import { ReservationResponse } from '../model/reservation';

export const useGetActivitiesReservation = () => {
    return useQuery<ReservationResponse>({
        queryKey: ['activitiesReservation'],
        queryFn: () => getActivitiesReservation(),
    });
};
