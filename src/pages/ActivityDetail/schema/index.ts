import z from 'zod';

export type ReservationView = z.infer<typeof ReservationSchema>;

export const ReservationSchema = z
    .object({
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
        adultCount: z.number().optional(),
        childCount: z.number().optional(),
    })
    .refine((data) => data.date && (data?.adultCount ?? 0) + (data?.childCount ?? 0) >= 0, {
        message: '날짜와 인원을 선택해주세요',
        path: ['time'],
    })
    .refine((data) => (data?.adultCount ?? 0) + (data?.childCount ?? 0) > 0);
