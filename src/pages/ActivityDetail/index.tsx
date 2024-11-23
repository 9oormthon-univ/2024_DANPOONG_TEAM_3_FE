import Example from '@/assets/Ex.svg';
import { Spacing } from '@/components/common/Spacing';
import { ImageCarousel } from './components/ImageCarousel';
import { Title } from './components/Title';
import { Description } from './components/Description';
import { Location } from './components/Location';
import { Reservation } from './components/Reservation';
import { Reviews } from './components/Review';

const mockData = {
    code: 200,
    message: '액티비티 상세 조회 성공',
    data: {
        id: 1,
        name: '우유로 치즈 만들기',
        activityPhotos: [Example, Example, Example],
        description:
            '대관령양떼목장은 자연 그대로의 모습을 간직하고 있습니다.\n대관령양떼목장의 부드러운 능선과 야생 식물로 가득 차있는 습지대는 자연 그대로의 모습을 간직하고 있기에 더욱 아름답고 신기하기만 합니다. 진녹색의 목초가 바람따라 흔들거리는 능선에서 양들이 한가로이 노니는 모습을 보고 있으면 마치 알프스에 와 있는 듯한 착각을 하게 됩니다. 봄, 여름, 가을, 겨울 그리고 시시각각 변하는 목장의 모습을 통해 자연의 신비로움과 아름다움을 몸소 느껴보세요.',
        state: 'activate',
        price: 30000,
        mainCategory: '산으로',
        subCategory: ['목장체험', '요리'],
        reviewCount: 20,
        serviceRate: 5,
        interestRate: 4,
        locationRate: 1,
        priceRate: 3,
        rating: 4.0,
        location: {
            address: '강원도 강릉시 ',
            latitude: 37.74913611,
            longitude: 128.8784972,
        },
        availableDates: [
            {
                date: '2024-12-01',
                times: ['14:00', '16:00', '18:00'],
                maxParticipants: 20,
            },
            {
                date: '2024-12-02',
                times: ['14:00', '16:00', '18:00'],
                maxParticipants: 20,
            },
            {
                date: '2024-12-03',
                times: ['14:00', '16:00', '18:00'],
                maxParticipants: 20,
            },
            {
                date: '2024-12-04',
                times: ['14:00', '16:00', '18:00'],
                maxParticipants: 20,
            },
            {
                date: '2024-12-05',
                times: ['14:00', '16:00', '18:00'],
                maxParticipants: 20,
            },
            {
                date: '2024-12-31',
                times: ['14:00', '16:00', '18:00'],
                maxParticipants: 20,
            },
        ],

        reviews: [
            {
                reviewId: 101,
                reviewerName: '여행이 좋아',
                rating: 1.7,
                comment: '경치가 좋은데다 날씨도 춥지 않고 딱 좋았습니다.',
                likes: 10,
                createdAt: '2024-11-10T14:00:00Z',
            },
            {
                reviewId: 102,
                reviewerName: '여행이 좋아',
                rating: 5.0,
                comment: '가장 기억에 남는 여행의 순간을 만들어줘서 감사합니다!!',
                likes: 6,
                createdAt: '2024-11-05T10:00:00Z',
            },
        ],
        createdAt: '2024-01-01T12:00:00Z',
        updatedAt: '2024-01-10T15:30:00Z',
    },
};

const { data } = mockData;
const reviewRate = { serviceRate: 5, interestRate: 4, locationRate: 1, priceRate: 3 };

export function ActivityDetailPage() {
    return (
        <div className="size-full">
            {/* <Header /> */}
            <div className="flex justify-center items-center flex-col h-fit overflow-y-auto">
                <div className="w-[58.451rem]">
                    <ImageCarousel images={data.activityPhotos} />
                    <Spacing direction="vertical" size={54} />
                    <Title title={data.location.address.replace('시', '').trim()} subtitle={data.name} />
                    <Spacing direction="vertical" size={30} />
                    <Description description={data.description} />
                    <Spacing direction="vertical" size={30} />
                    <Location location={data.location} />
                    <Spacing direction="vertical" size={54} />
                    <Reservation />
                    <Spacing direction="vertical" size={62} />
                    <Reviews reviews={data.reviews} reviewRate={reviewRate} />
                </div>
            </div>
        </div>
    );
}
