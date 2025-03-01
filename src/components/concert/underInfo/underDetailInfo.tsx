import { UnderInfoItem, UnderInfoItemProps } from './underInfoItem';

interface DetailInfoProps {
    fullTitle: string;
    date: string;
    location: string;
    price: string;
    runningTime: string;
    ageLimit: string;
    ticketLimit: string;
    description: string;
}

export default function DetailInfo({
    fullTitle,
    date,
    location,
    price,
    runningTime,
    ageLimit,
    ticketLimit,
    description,
}: DetailInfoProps) {
    const infoItems: UnderInfoItemProps[] = [
        { label: '공연 제목', value: fullTitle || '' },
        { label: '공연 일시', value: date || '' },
        { label: '공연 장소', value: location || '' },
        { label: '티켓 가격', value: price || '' },
        { label: '러닝 타임', value: runningTime || '' },
        { label: '관람 연령', value: ageLimit || '' },
        { label: '예매 제한', value: ticketLimit || '' },
    ];

    return (
        <div className="flex flex-col gap-[1.04vw] p-[2.08vw] w-[62.08vw] border-[#F0F0F0] border-[1.5px] rounded-[20px]">
            <h3 className="font-[700] text-[1.38vw]">공연 상세 정보</h3>
            <hr />
            <div className="min-h-[16.94vw] justify-between flex flex-col mb-[2.77vw] mt-[1.04vw] font-[600] text-[1.25vw]">
                {infoItems.map((item, index) => (
                    <UnderInfoItem key={index} {...item} />
                ))}
            </div>
            <div className="flex flex-col gap-[1.04vw]">
                <h3 className="font-[700] text-[1.38vw]">공연 소개</h3>
                <hr />
                <span className="whitespace-pre-line mt-[1.04vw] font-[600] text-[1.25vw]">{description}</span>
            </div>
        </div>
    );
}
