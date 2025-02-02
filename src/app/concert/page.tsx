'use client';

import { Concert } from '@/components/now-bolmal/concertRecommend';
import Ticket from '@/components/ticket';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

async function getConcertInfo(page: number) {
    const res = await fetch(`/api/concerts?page=${page}`);
    return res.json();
}

export default function ConcertPage() {
    const [pageNumber, setPageNumber] = useState<number>(1);
    const { data, isLoading, isError } = useQuery({
        queryKey: ['pagenatedNum', pageNumber],
        queryFn: () => getConcertInfo(pageNumber),
    });

    if (isLoading) return <div>...로딩중</div>;
    if (isError) return <div>에러</div>;
    return (
        <div className="px-[120px] flex flex-col">
            <div className="px-[20px]">옵션 들어갈 칸</div>
            <div className="grid grid-cols-5 gap-y-[30px] gap-x-[0.55vw]">
                {data.concerts.map((ticket: Concert) => (
                    <Ticket key={ticket.id} concert={{ id: ticket.id, url: ticket.url, tag: ticket.tag }}></Ticket>
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
