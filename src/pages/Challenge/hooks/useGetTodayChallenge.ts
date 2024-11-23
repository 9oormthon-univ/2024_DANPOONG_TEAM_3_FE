import { getTodayChallenge } from '../api/getTodayChallenge';
import { useQuery } from '@tanstack/react-query';

export const useGetTodayChallenge = () => {
    return useQuery({ queryKey: ['todayChallenge'], queryFn: () => getTodayChallenge(), retry: false });
};
