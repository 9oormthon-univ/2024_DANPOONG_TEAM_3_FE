import { client } from '@/api/client';

export const postS3 = async (file: File) => {
    try {
        return await client
            .post(
                '/api/s3/asdpofjq1l1kjw1kfp1kdjf',
                {
                    file,
                },
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            )
            .then((res) => {
                return res.data;
            });
    } catch (error) {
        console.log(error);
    }
};
