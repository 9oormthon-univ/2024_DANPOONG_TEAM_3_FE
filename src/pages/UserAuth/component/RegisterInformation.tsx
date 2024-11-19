import { Link } from 'react-router-dom';

export function RegisterInformation() {
    return (
        <p>
            입점을 원하신다면{' '}
            <Link to="/register" className="text-main underline underline-offset-2 hover:text-green-800">
                이 곳
            </Link>
            을 클릭해주세요.
        </p>
    );
}
