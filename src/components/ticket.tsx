import Image from 'next/image';
import { Concert } from './now-bolmal/concertRecommend';

interface TicketProps {
    concert: Concert;
}

export default function Ticket({ concert }: TicketProps) {
    console.log(concert);
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
            <div className="w-[204px] mt-[20px]">
                <div className="py-[9px] px-[0.69vw] border-primary border-[2px] rounded-[10px] w-[9vw] mb-[10px] flex gap-[7px]">
                    <Image src={concert.posterUrl} alt="시간" width={20} height={20}></Image>
                    <div className="text-[15px] font-[700] text-primary">
                        {concert.concertTicketRoundDTOList[0].ticket_round}
                    </div>
                </div>
                <span className="mb-[6px] text-[20px] font-[700] text-primary">
                    {concert.concertTicketRoundDTOList[0].ticket_open_date}(목) 12PM
                </span>
                <span className="text-black text-[18px] font-[700]">{concert.concertName}</span>
                <span className="text-[#AEAEAE] text-[15px] font-[500]">{concert.concertDate.endDate}</span>
            </div>
        </div>
    );
}
