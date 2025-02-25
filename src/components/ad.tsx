'use client';

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import test1 from '../../public/ㅂㄹㅁㄹ.svg';
import Image from 'next/image';
import { Autoplay } from 'swiper/modules';
import { useState } from 'react';
import { Swiper as SwiperType } from 'swiper';

export default function Ad() {
    const [swiper, setSwiper] = useState<SwiperType | null>(null);
    const [activeIdx, setActiveIdx] = useState<number>(0);
    const testObj = [
        { id: '1', url: test1 },
        { id: '2', url: test1 },
        { id: '3', url: test1 },
        { id: '4', url: test1 },
        { id: '5', url: test1 },
    ];
    return (
        <div>
            <div className="w-[62.08vw] h-[343px]">
                <Swiper
                    onSwiper={setSwiper}
                    onSlideChange={(swiper) => setActiveIdx(swiper.realIndex)}
                    className="mb-[15px] bg-white rounded-[20px]"
                    modules={[Autoplay]}
                    autoplay={{ delay: 3000 }} // 자동재생
                    loop={true} // 반복 여부
                >
                    {testObj.map((ad, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex items-center justify-center h-full">
                                {ad.url ? (
                                    <Image className="w-[62.08vw] h-[320px]" src={ad.url} alt={ad.id} />
                                ) : (
                                    <>없음</>
                                )}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="h-[8px] gap-[8px] flex ml-[14px]">
                    {testObj.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => swiper?.slideTo(index)}
                            className={`h-[8px] bg-[#e9e9e9] ${
                                swiper?.realIndex === index
                                    ? 'bg-primary-bg w-[20px] rounded-[100px]'
                                    : 'bg-gray-300 w-[8px] rounded-[50%]'
                            }`}
                        ></button>
                    ))}
                </div>
            </div>
        </div>
    );
}
