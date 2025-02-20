import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
import { Swiper as SwiperType } from 'swiper';
import Ticket from '../ticket';
import { useRouter } from 'next/navigation';
import { fetchInstance } from '@/utils/fetchInstance';

interface ConcertDate {
    startDate: string;
    endDate: string;
}

export interface Concert {
    id: number;
    postUrl: string;
    ticket_round: string;
    ticket_open_date?: string;
    concertName?: string;
    concertDate?: ConcertDate;
}

interface RecommendSwiperProps {
    isLoggedIn: boolean;
}

export default function ConcertRecommend({ isLoggedIn }: RecommendSwiperProps) {
    const [concerts, setConcerts] = useState<Concert[]>([]);
    const [swiper, setSwiper] = useState<SwiperType | null>(null);
    const router = useRouter();
    const handlePrev = () => {
        if (swiper) swiper.slidePrev();
    };
    const handleNext = () => {
        if (swiper) swiper.slideNext();
    };
    useEffect(() => {
        const fetchConcerts = async () => {
            try {
                const endpoint = isLoggedIn
                    ? '/home/recommend' // 로그인 안됐을 때 호출할 API
                    : '/home/recommend'; // 로그인 됐을 때 호출할 API <- 나중에 수정
                const response = await fetchInstance(endpoint, {}, isLoggedIn);
                setConcerts(response.result);
            } catch (error) {
                console.error('실패', error);
            }
        };
        fetchConcerts();
    }, [isLoggedIn]);

    return (
        <div className="relative w-full">
            <div className="flex justify-between">
                <button
                    className="absolute left-[-2%] top-[136px] -translate-y-1/2 w-[50px] h-[50px] rounded-[50%] z-50 bg-white shadow-[0_0_10px_rgba(99,99,99,0.2)]"
                    onClick={handlePrev}
                >
                    {'<'}
                </button>
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 3000 }}
                    loop={true}
                    slidesPerView={5}
                    onSwiper={setSwiper}
                    spaceBetween={50}
                    className="w-full flex justify-between"
                >
                    {concerts.map((concert) => (
                        <SwiperSlide
                            onClick={() => router.push(`concert/${concert.id}`)}
                            key={concert.id}
                            className="w-[20%]"
                        >
                            <Ticket concert={concert}></Ticket>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <button
                    className="absolute right-[-2%] top-[136px] -translate-y-1/2 w-[50px] h-[50px] bg-white shadow-[0_0_10px_rgba(99,99,99,0.2)] rounded-[50%] z-50"
                    onClick={handleNext}
                >
                    {'>'}
                </button>
            </div>
        </div>
    );
}
