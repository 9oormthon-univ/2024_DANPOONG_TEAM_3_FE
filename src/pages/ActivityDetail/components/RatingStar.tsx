export function RatingStar({ rating, maxStars = 5 }: { rating: number; maxStars?: number }) {
    const percentage = (rating / maxStars) * 100; // 별점 비율 계산

    return (
        <svg width={maxStars * 28} height="26" viewBox={`0 0 ${maxStars * 28} 26`} xmlns="http://www.w3.org/2000/svg">
            <defs>
                <clipPath id="clip">
                    {/* rating에 따라 채워지는 비율 설정 */}
                    <rect x="0" y="0" width={`${percentage}%`} height="100%" />
                </clipPath>
            </defs>

            {/* 빈 별들 */}
            <g>
                {Array.from({ length: maxStars }).map((_, index) => (
                    <path
                        key={`empty-star-${index}`}
                        d="M11.3199 5.43151C12.3366 2.89709 12.8449 1.62988 13.6707 1.45425C13.8879 1.40807 14.1123 1.40807 14.3294 1.45425C15.1553 1.62988 15.6636 2.89709 16.6802 5.43151C17.2583 6.87279 17.5474 7.59343 18.0883 8.08357C18.24 8.22105 18.4047 8.3435 18.58 8.44919C19.2052 8.82598 19.9856 8.89587 21.5464 9.03566C24.1886 9.27229 25.5097 9.3906 25.9132 10.1439C25.9967 10.2999 26.0535 10.4688 26.0812 10.6436C26.215 11.4875 25.2438 12.3711 23.3014 14.1383L22.762 14.6291C21.8538 15.4553 21.3998 15.8683 21.1372 16.3839C20.9796 16.6931 20.874 17.0262 20.8245 17.3697C20.742 17.9424 20.8749 18.5417 21.1409 19.7402L21.2359 20.1685C21.7128 22.3179 21.9512 23.3926 21.6536 23.9209C21.3862 24.3954 20.8937 24.6991 20.3497 24.7251C19.744 24.754 18.8906 24.0587 17.1838 22.6679C16.0593 21.7516 15.4971 21.2934 14.8729 21.1144C14.3025 20.9509 13.6976 20.9509 13.1272 21.1144C12.5031 21.2934 11.9408 21.7516 10.8163 22.6679C9.10953 24.0587 8.25613 24.754 7.65048 24.7251C7.10644 24.6991 6.61395 24.3954 6.34658 23.9209C6.04893 23.3926 6.28737 22.3179 6.76427 20.1685L6.85928 19.7402C7.12521 18.5417 7.25817 17.9424 7.17566 17.3697C7.12616 17.0262 7.02053 16.6931 6.86298 16.3839C6.60035 15.8683 6.1463 15.4553 5.23818 14.6291L4.69878 14.1383C2.75637 12.3711 1.78516 11.4875 1.91891 10.6436C1.94661 10.4688 2.00342 10.2999 2.08697 10.1439C2.49041 9.3906 3.81151 9.27229 6.45372 9.03566C8.01454 8.89587 8.79496 8.82598 9.42012 8.44919C9.59547 8.3435 9.76016 8.22105 9.91187 8.08357C10.4528 7.59343 10.7418 6.87279 11.3199 5.43151Z"
                        stroke="#59C642"
                        fill="white"
                        strokeWidth="2"
                        transform={`translate(${index * 28}, 0)`}
                    />
                ))}
            </g>

            {/* 채워진 별들 */}
            <g clipPath="url(#clip)">
                {Array.from({ length: maxStars }).map((_, index) => (
                    <path
                        key={`filled-star-${index}`}
                        d="M11.3199 5.43151C12.3366 2.89709 12.8449 1.62988 13.6707 1.45425C13.8879 1.40807 14.1123 1.40807 14.3294 1.45425C15.1553 1.62988 15.6636 2.89709 16.6802 5.43151C17.2583 6.87279 17.5474 7.59343 18.0883 8.08357C18.24 8.22105 18.4047 8.3435 18.58 8.44919C19.2052 8.82598 19.9856 8.89587 21.5464 9.03566C24.1886 9.27229 25.5097 9.3906 25.9132 10.1439C25.9967 10.2999 26.0535 10.4688 26.0812 10.6436C26.215 11.4875 25.2438 12.3711 23.3014 14.1383L22.762 14.6291C21.8538 15.4553 21.3998 15.8683 21.1372 16.3839C20.9796 16.6931 20.874 17.0262 20.8245 17.3697C20.742 17.9424 20.8749 18.5417 21.1409 19.7402L21.2359 20.1685C21.7128 22.3179 21.9512 23.3926 21.6536 23.9209C21.3862 24.3954 20.8937 24.6991 20.3497 24.7251C19.744 24.754 18.8906 24.0587 17.1838 22.6679C16.0593 21.7516 15.4971 21.2934 14.8729 21.1144C14.3025 20.9509 13.6976 20.9509 13.1272 21.1144C12.5031 21.2934 11.9408 21.7516 10.8163 22.6679C9.10953 24.0587 8.25613 24.754 7.65048 24.7251C7.10644 24.6991 6.61395 24.3954 6.34658 23.9209C6.04893 23.3926 6.28737 22.3179 6.76427 20.1685L6.85928 19.7402C7.12521 18.5417 7.25817 17.9424 7.17566 17.3697C7.12616 17.0262 7.02053 16.6931 6.86298 16.3839C6.60035 15.8683 6.1463 15.4553 5.23818 14.6291L4.69878 14.1383C2.75637 12.3711 1.78516 11.4875 1.91891 10.6436C1.94661 10.4688 2.00342 10.2999 2.08697 10.1439C2.49041 9.3906 3.81151 9.27229 6.45372 9.03566C8.01454 8.89587 8.79496 8.82598 9.42012 8.44919C9.59547 8.3435 9.76016 8.22105 9.91187 8.08357C10.4528 7.59343 10.7418 6.87279 11.3199 5.43151Z"
                        fill="#59C642"
                        transform={`translate(${index * 28}, 0)`}
                    />
                ))}
            </g>
        </svg>
    );
}
