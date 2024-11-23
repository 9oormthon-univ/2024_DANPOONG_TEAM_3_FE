import { useQuery } from '@tanstack/react-query';
import { getChallenges } from '../api/getChallenges';

export const useGetChallenges = () => {
    return useQuery({ queryKey: ['challenges'], queryFn: () => getChallenges() });
};
