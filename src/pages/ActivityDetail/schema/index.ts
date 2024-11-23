import z from 'zod';

export type ReservationView = z.infer<typeof ReservationSchema>;

export const ReservationSchema = z
    .object({
        activityId: z.number(),
        date: z.date(),
        time: z.string().refine(
            (data) => {
                const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
                return timeRegex.test(data);
            },
            {
                message: '시간 형식이 잘못되었습니다. (HH:mm)',
            }
        ),
        adultCount: z.number(),
        childCount: z.number(),
    })
    .refine((data) => data.date && data.adultCount + data.childCount >= 0, {
        message: '날짜와 인원을 선택해주세요',
        path: ['time'],
    });
