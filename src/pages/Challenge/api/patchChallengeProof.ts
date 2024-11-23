import { client } from '@/api/client';

export const patchChallengeProof = async ({ imageUrl }: { imageUrl: string }): Promise<void> => {
    try {
        await client.patch(`/api/challenges/proof`, {
            imageUrl,
        });
    } catch (error: any) {
        console.log(error);
        if (error?.response?.data?.code === 401) {
            alert('로그인이 필요합니다.');
        }
    }
};
