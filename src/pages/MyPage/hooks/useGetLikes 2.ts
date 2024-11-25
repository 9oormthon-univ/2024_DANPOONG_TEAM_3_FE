import { useQuery } from '@tanstack/react-query';
import { getLikes } from '../api/getLikes';
import { LikeItemModel } from '../model/like';

export const useGetLikes = () => {
    return useQuery<LikeItemModel[]>({
        queryKey: ['likes'],
        queryFn: () => getLikes(),
    });
};
