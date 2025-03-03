'use client';

import { useParams } from 'next/navigation';
import test1 from '../../../../public/ㅂㄹㅁㄹ.svg';
import MainInfo from '@/components/concert/mainInfo';
import TicketingButtons from '@/components/concert/ticketingButton';
import DetailInfo from '@/components/concert/underInfo/underDetailInfo';
import { useEffect, useState } from 'react';
import { fetchInstance } from '@/utils/fetchInstance';

export interface ConcertDetail {
    id: number;
    concertName: string;
    ticketOpenInfo: string;
    concertPlace: string;
    concertDate: string;
    concertRuntime: string;
    price: string;
    onlineStore: string;
    onlineStoreURL: string;
    concertAge: string;
    viewingRestrict: string;
}

export default function ConcertDetail() {
    const params = useParams();
    const id = params.id;
    const [concertInfo, setConcertInfo] = useState<ConcertDetail>();
    useEffect(() => {
        const getConcertInfo = async () => {
            try {
                const response = await fetchInstance(`/concerts/${id}`, {}, false);
                setConcertInfo({
                    id: response.result.id,
                    concertName: response.result.concertName,
                    ticketOpenInfo: response.result.ticketOpenInfo,
                    concertPlace: response.result.concertPlace,
                    concertDate: response.result.concertDate,
                    concertRuntime: response.result.concertRuntime,
                    price: response.result.price,
                    onlineStore: response.result.onlineStore,
                    onlineStoreURL: response.result.onlineStoreURL,
                    concertAge: response.result.concertAge,
                    viewingRestrict: response.result.viewingRestrict,
                });
            } catch (error) {
                console.error(error);
            }
        };
        getConcertInfo();
    }, [id]);

    // 설명 텍스트 더미 데이터 (API에 없지만 UI에 필요하여 일단 추가)
    const description =
        '- 공연 상세 정보입니다.\n- 추가 정보는 추후 업데이트될 예정입니다.\n- 자세한 사항은 공식 홈페이지를 참고하세요.';

    return (
        <div className="px-[8.33vw] w-full flex">
            <div className="mt-[1.94vw] w-full">
                {concertInfo ? (
                    <>
                        <MainInfo
                            tag={concertInfo.onlineStore === 'INTERPARK' ? '내한 콘서트' : '국내 콘서트'}
                            title={concertInfo.concertName.split('[')[0].trim()}
                            nextTicketOpen={concertInfo.ticketOpenInfo}
                            location={concertInfo.concertPlace}
                            date={concertInfo.concertDate}
                            runningTime={concertInfo.concertRuntime}
                            price={concertInfo.price}
                            posterUrl={test1}
                        />
                        {/* 나머지 컴포넌트들 */}
                    </>
                ) : (
                    <div>로딩 중...</div>
                )}
                <TicketingButtons
                    interParkUrl={concertInfo?.onlineStore === 'INTERPARK' ? concertInfo?.onlineStoreURL : undefined}
                    yes24Url={concertInfo?.onlineStore === 'YES24' ? concertInfo?.onlineStoreURL : undefined}
                />
                {concertInfo ? (
                    <DetailInfo
                        fullTitle={concertInfo?.concertName}
                        date={concertInfo?.concertDate}
                        location={concertInfo?.concertPlace}
                        price={concertInfo?.price}
                        runningTime={concertInfo?.concertRuntime}
                        ageLimit={concertInfo?.concertAge || '연령 제한 없음'}
                        ticketLimit={concertInfo?.viewingRestrict}
                        description={description}
                    />
                ) : (
                    <div>로딩 중...</div>
                )}
            </div>
            <div>사이드바</div>
        </div>
    );
}
