'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import test1 from '../../../public/ㅂㄹㅁㄹ.svg';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import { useState } from 'react';
import { Swiper as SwiperType } from 'swiper';

export default function WeeklyTicke() {
    const [swiper, setSwiper] = useState<SwiperType | null>(null);

    const handlePrev = () => {
        if (swiper) swiper.slidePrev();
    };

    const handleNext = () => {
        if (swiper) swiper.slideNext();
    };

    const testObj = [
        { id: '1', url: test1 },
        { id: '2', url: test1 },
        { id: '3', url: test1 },
        { id: '4', url: test1 },
        { id: '5', url: test1 },
        { id: '6', url: test1 },
        { id: '7', url: test1 },
        { id: '8', url: test1 },
    ];

    //4개씩 나누기
    const createGroups = () => {
        const groups = [];
        for (let i = 0; i < testObj.length; i += 4) {
            groups.push(testObj.slice(i, i + 4));
        }
        console.log(groups);
        return groups;
    };

    return (
        <div className="relative w-full">
            <div className="flex justify-between">
                <button onClick={handlePrev}>{'<'}</button>
                <Swiper modules={[Autoplay]} autoplay={{ delay: 3000 }} slidesPerView={1} onSwiper={setSwiper}>
                    {createGroups().map((group, index) => (
                        <SwiperSlide key={index}>
                            <div className="grid grid-cols-2 gap-x-[1.527vw] gap-y-[20px]">
                                {group.map((item) => (
                                    <div
                                        key={item.id}
                                        className="p-[20px] flex bg-white w-[39.93vw] rounded-[20px] border-[1px] border-[rgba(240, 240, 240, 1)] h-[240px] justify-between items-center"
                                    >
                                        <Image src={item.url} alt={item.id} />
                                        <div className="justify-center items-center">{item.id}</div>
                                        <div className="py-[21.5px] w-[20.27vw] justify-between h-[157px] items-center">
                                            <div className="h-[38px] w-8.95vw">팬클럽선예매</div>
                                            <div className="">날짜</div>
                                            <div className="h-[70px]">
                                                <div>제목</div>
                                                <div>기간</div>
                                                <div>기타정보</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <button onClick={handleNext}>{'>'}</button>
            </div>
        </div>
    );
}
