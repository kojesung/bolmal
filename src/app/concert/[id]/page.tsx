'use client';

import { useParams } from 'next/navigation';
import test1 from '../../../../public/ㅂㄹㅁㄹ.svg';
import MainInfo from '@/components/concert/mainInfo';
import TicketingButtons from '@/components/concert/ticketingButton';
import DetailInfo from '@/components/concert/underInfo/underDetailInfo';

export interface ConcertDetail {
    fullTitle: string; // 공연 전체 제목
    title: string; // 공연 제목
    date: string; // 공연 일시
    location: string; // 공연 장소
    price: string; // 티켓 가격
    runningTime: string; // 러닝 타임
    ageLimit: string; // 관람 연령
    ticketLimit: string; // 예매 제한
    description: string; // 공연 소개글
    nextTicketOpen: string; // 가까운 티켓 오픈
    tag: '내한 콘서트' | '국내 콘서트'; // 태그(내한, 국내 콘서트)
    agency: {
        // 기획사 정보
        name1: string; // 주최
        name2: string; // 주관
    };
    posterUrl: string; // 포스터 url
}

export default function ConcertDetail() {
    const params = useParams();
    const id = params.id;
    console.log('무시해도 됨', id);
    // id로 API 호출
    // const { data, isLoading } = useQuery<ConcertDetail>({
    //     queryKey: ['concert', id],
    //     queryFn: () => fetchConcertDetail(id)
    // });
    // return은 공연 제목, 공연 일시, 공연 장소, 티켓 가격, 러닝 타임, 관람 연령, 예매 제한, 공연 소개글, 가까운 티켓 오픈, 태그(내한, 국내 콘서트), 기획사 정보, 포스터 url
    const data: ConcertDetail = {
        fullTitle: '엘레가든 내한공연 ELLEGARDEN "Boys are Back in the East Tour: Revival" [SEOUL]',
        title: '엘레가든 내한공연',
        date: '2025년 3월 20일(목), 21(금) 8PM',
        location: 'YES24 LIVE HALL',
        price: '전석 88,000원 (1층 스탠딩/2층 지정석)',
        runningTime: '90분',
        ageLimit: '만 7세 이상 관람가',
        ticketLimit: '회차당 1인 2매 제한',
        description: '- 어쩌구 저쩌구 한줄.\n- 어쩌구 저쩌구 두줄.\n- 어쩌구 저쩌구 세줄.',
        nextTicketOpen: '2024.12.18 (수) 7PM',
        tag: '내한 콘서트',
        agency: {
            name1: '어디어디서 주최함',
            name2: '주식회사 어디',
        },
        posterUrl: test1,
    };
    return (
        <div className="px-[8.33vw] w-full flex">
            <div className="mt-[28px] w-full">
                <MainInfo
                    tag={data.tag}
                    title={data.title}
                    nextTicketOpen={data.nextTicketOpen}
                    location={data.location}
                    date={data.date}
                    runningTime={data.runningTime}
                    price={data.price}
                    posterUrl={data.posterUrl}
                />
                <TicketingButtons></TicketingButtons>
                <DetailInfo
                    fullTitle={data.fullTitle}
                    date={data.date}
                    location={data.location}
                    price={data.price}
                    runningTime={data.runningTime}
                    ageLimit={data.ageLimit}
                    ticketLimit={data.ticketLimit}
                    description={data.description}
                />
            </div>
            <div>사이드바</div>
        </div>
    );
}
