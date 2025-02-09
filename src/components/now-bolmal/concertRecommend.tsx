import { Swiper, SwiperSlide } from 'swiper/react';
import test1 from '../../../public/ㅂㄹㅁㄹ.svg';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
import { Swiper as SwiperType } from 'swiper';
import Ticket from '../ticket';
import { useRouter } from 'next/navigation';

export interface Concert {
    id: number;
    url: string;
    tag: string;
    // date: string;
    // title: string;
    // performDate: string;
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
                setConcerts([
                    { id: 1, url: test1, tag: '1차 티켓 오픈' },
                    { id: 2, url: test1, tag: '팬클럽 선예매' },
                    { id: 3, url: test1, tag: '팬클럽 선예매' },
                    { id: 4, url: test1, tag: '1차 티켓 오픈' },
                    { id: 5, url: test1, tag: '팬클럽 선예매' },
                    { id: 6, url: test1, tag: '1차 티켓 오픈' },
                    { id: 7, url: test1, tag: '팬클럽 선예매' },
                    { id: 8, url: test1, tag: '1차 티켓 오픈' },
                    { id: 9, url: test1, tag: '팬클럽 선예매' },
                    { id: 10, url: test1, tag: '1차 티켓 오픈' },
                ]);
                // isLoggedIn 상태에 따라 다른 API 엔드포인트 호출
                // const endpoint = isLoggedIn
                //     ? '/api/recommendations' // 로그인 됐을 때 호출할 API
                //     : '/api/popular-concerts'; // 로그인 안됐을 때 호출할 API

                // const response = await fetch(endpoint);
                // const data = await response.json();
                // setConcerts(data);
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
