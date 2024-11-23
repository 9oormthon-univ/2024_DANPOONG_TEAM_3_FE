import { useQuery } from '@tanstack/react-query';
import { getActivitiesComplete } from '../api/getActivitiesComplete';

export const useGetActivitiesComplete = () => {
    return useQuery({ queryKey: ['activitiesComplete'], queryFn: () => getActivitiesComplete() });
};
