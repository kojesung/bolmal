'use client';

import DropDown from '@/components/dropdown/dropDown';
import { Concert } from '@/components/now-bolmal/concertRecommend';
import Ticket from '@/components/ticket';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

async function getConcertInfo(page: number) {
    const res = await fetch(`/api/concerts?page=${page}`);
    return res.json();
}

export type SortType = 'latest' | 'popularity' | 'near';

export default function ConcertPage() {
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [isSelectedNC, setIsSelectedNC] = useState<boolean>(false);
    const [isSelectedKC, setIsSelectedKC] = useState<boolean>(false);
    const [sortType, setSortType] = useState<SortType>('near');
    const { data, isLoading, isError } = useQuery({
        queryKey: ['pagenatedNum', pageNumber],
        queryFn: () => getConcertInfo(pageNumber), // 실제 API 호출에는 isSelectedNC, isSelectKC, sortType도 포함해야함
    });
    const router = useRouter();

    if (isLoading) return <div>로딩중...</div>;
    if (isError) return <div>에러</div>;
    return (
        <div className="px-[120px] flex flex-col">
            <div className="px-[20px] flex justify-between  my-[30px]">
                <div className="flex gap-[10px]">
                    <button
                        onClick={() => {
                            setIsSelectedNC((prev) => !prev);
                            setPageNumber(1);
                        }}
                        className={`w-[7.56vw] h-[38px] rounded-[100px] ${
                            isSelectedNC ? 'bg-primary text-white' : 'bg-[#F7F7F7] text-[#AEAEAE]'
                        }`}
                    >
                        내한 콘서트
                    </button>
                    <button
                        onClick={() => {
                            // 처음에는 onClick={(prev) => setIsSelectedNC(!prev)} 이런 실수를 했는데 여기서의 prev는 onClick 함수의 매개변수로 React의 이벤트 객체, 이정 상태값 가져오려면 setState의 매개변수에 접근해야했음
                            setIsSelectedKC((prev) => !prev);
                            setPageNumber(1);
                        }}
                        className={`w-[7.56vw] h-[38px] rounded-[100px] ${
                            isSelectedKC ? 'bg-primary text-white' : 'bg-[#F7F7F7] text-[#AEAEAE]'
                        }`}
                    >
                        국내 콘서트
                    </button>
                </div>
                <DropDown sortType={sortType} setSortType={setSortType}></DropDown>
            </div>
            <div className="grid grid-cols-5 gap-y-[30px] gap-x-[0.55vw]">
                {data.concerts.map((ticket: Concert) => (
                    <div key={ticket.id} onClick={() => router.push(`concert/${ticket.id}`)}>
                        <Ticket concert={data}></Ticket>
                    </div>
                ))}
            </div>
            <div className="my-[60px] text-center">
                {Array.from({ length: data?.totalPages || 0 }, (_, index) => (
                    <button
                        onClick={() => setPageNumber(index + 1)}
                        key={index + 1}
                        className={`gap-[1.18vw] w-[30px] h-[30px] ${
                            pageNumber == index + 1
                                ? 'rounded-[50%] bg-primary text-white font-[700] text-[15px]'
                                : 'text-[#686868] text-[15px] font-[500]'
                        }`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}
