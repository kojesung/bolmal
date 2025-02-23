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
                className="bg-black rounded-[10px]"
                src={concert.posterUrl}
                alt={concert.id.toString()}
                unoptimized
                width={204}
                height={272}
            ></Image>
            <div className="w-[204px] mt-[20px] flex flex-col">
                <div className="p-[10px] border-primary border-[2px] rounded-[10px] w-[123px] mb-[10px] flex gap-[7px]">
                    <span className="w-[20px] h-[20px]">⏰</span>
                    {/* <Image src={concert.posterUrl} alt="시간" width={20} height={20}></Image> */}
                    <div className="text-[15px] font-[700] text-primary">
                        {concert.concertTicketRoundDTOList[0].ticket_round}
                    </div>
                </div>
                <span className="mb-[6px] text-[20px] font-[700] text-primary">
                    {getFormattedData(concert.concertTicketRoundDTOList[0].ticket_open_date)}
                </span>
                <span className="text-black text-[18px] font-[700]">{concert.concertName}</span>
                <span className="text-[#AEAEAE] text-[15px] font-[500]">{concert.concertDate.endDate}</span>
            </div>
        </div>
    );
}
