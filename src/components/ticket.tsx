import Image from 'next/image';
import { Concert } from './now-bolmal/concertRecommend';
import { getFormattedData } from '@/utils/changeDataFormat';

interface TicketProps {
    concert: Concert;
}

export default function Ticket({ concert }: TicketProps) {
    return (
        <div className="flex flex-col items-center">
            <Image
                className="bg-black rounded-[10px] w-[14.16vw] h-fit aspect-[204/272]"
                src={concert.posterUrl}
                alt={concert.id.toString()}
                unoptimized
                width={204}
                height={272}
            ></Image>
            <div className="w-[14.16vw] mt-[20px] flex flex-col">
                <div className="p-[0.694vw] border-primary border-[2px] rounded-[10px] w-fit mb-[10px] flex gap-[7px] text-center items-center">
                    <span className="w-[1.38vw] h-[1.38vw]">⏰</span>
                    {/* <Image src={concert.posterUrl} alt="시간" width={20} height={20}></Image> */}
                    <div className="text-[1.04vw] font-[700] text-primary">
                        {concert.concertTicketRoundDTOList[0].ticket_round}
                    </div>
                </div>
                <span className="mb-[6px] text-[1.38vw] font-[700] text-primary">
                    {getFormattedData(concert.concertTicketRoundDTOList[0].ticket_open_date)}
                </span>
                <span className="text-black text-[1.25vw] font-[700] overflow-hidden whitespace-nowrap text-ellipsis">
                    {concert.concertName}
                </span>
                <span className="text-[#AEAEAE] text-[1.04vw] font-[500]">{concert.concertDate.endDate}</span>
            </div>
        </div>
    );
}
