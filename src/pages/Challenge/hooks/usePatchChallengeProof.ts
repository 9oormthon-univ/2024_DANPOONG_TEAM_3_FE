import { useMutation, useQueryClient } from '@tanstack/react-query';
import { patchChallengeProof } from '../api/patchChallengeProof';

export const usePatchChallengeProof = ({ setOpen }: { setOpen: () => void }) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ imageUrl }: { imageUrl: string }) =>
            patchChallengeProof({
                imageUrl,
            }),
        retry: false,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['challenges'] });
            setOpen();
        },
    });
};
