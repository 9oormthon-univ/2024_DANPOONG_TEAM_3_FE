export const parseDateToString = (date: Date): string => {
    const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1
    const day = String(date.getDate()).padStart(2, '0');
    const dayOfWeek = daysOfWeek[date.getDay()];

    return `${year}년 ${month}월 ${day}일 (${dayOfWeek})`;
};
