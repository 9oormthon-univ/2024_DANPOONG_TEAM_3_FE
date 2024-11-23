import { client } from '@/api/client';

export const patchChallengeProof = async ({ imageUrl }: { imageUrl: string }): Promise<void> => {
    await client.patch(`/api/challenges/proof`, {
        imageUrl,
    });
};
