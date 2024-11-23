import { useQuery } from '@tanstack/react-query';
import { getActivityDetail } from '../api/getActivityDetail';

export const useGetActivityDetail = (activityId?: number) => {
    return useQuery({ queryKey: ['activityDetail', activityId], queryFn: () => getActivityDetail(activityId ?? null) });
};
