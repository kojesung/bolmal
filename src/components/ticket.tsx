import Image from 'next/image';
import { Concert } from './now-bolmal/concertRecommend';

interface TicketProps {
    concert: Concert;
}

export default function Ticket({ concert }: TicketProps) {
    return (
        <div className="flex flex-col items-center">
            <Image
                className="w-[204px] h-[272px] bg-black rounded-[10px]"
                src={concert.postUrl}
                alt={concert.id.toString()}
            ></Image>
            <div className="w-[204px] mt-[20px]">
                <div className="py-[9px] px-[0.69vw] border-primary border-[2px] rounded-[10px] w-[9vw] mb-[10px] flex gap-[7px]">
                    <Image className="w-[20px] h-[20px]" src={concert.postUrl} alt="시간"></Image>
                    <div className="text-[15px] font-[700] text-primary">{concert.ticket_round}</div>
                </div>
                <div className="mb-[6px] text-[20px] font-[700] text-primary">2024.01.09(목) 12PM</div>
                <div className="text-black text-[18px] font-[700]">2025 JUNIEL CONert..</div>
                <div className="text-[#AEAEAE] text-[15px] font-[500]">2025.01.25</div>
            </div>
        </div>
    );
}
