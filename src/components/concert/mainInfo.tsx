import Image from 'next/image';

interface MainInfoProps {
    tag: string;
    title: string;
    nextTicketOpen: string;
    location: string;
    date: string;
    runningTime: string;
    price: string;
    posterUrl: string;
}

export default function MainInfo({
    tag,
    title,
    nextTicketOpen,
    location,
    date,
    runningTime,
    price,
    posterUrl,
}: MainInfoProps) {
    return (
        <div className="flex">
            {posterUrl && (
                <Image
                    src={posterUrl}
                    alt="공연포스터"
                    className="w-[19.44vw] aspect-[280/392] rounded-[10px] bg-black mr-[1.66vw]"
                ></Image>
            )}

            <div className="h-[27.22vw] w-[40.83vw] border-[#F0F0F0] border-[1.5px] rounded-[20px] p-[1.38vw] flex flex-col justify-between">
                <div className="p-[0.69vw]">
                    <div className="w-[6.18vw] h-[2.5vw] border-primary border-[1.5px] rounded-[10px] text-primary font-[700] text-[1.04vw] flex justify-center items-center mb-[1.04vw]">
                        {tag}
                    </div>
                    <div className="flex flex-col">
                        <span className="mb-[0.69vw] font-[700] text-[1.73vw]">{title}</span>
                        <div className="text-primary text-[1.38vw] font-[700]">
                            <span>🕓 1차 티켓 오픈</span>
                            <span>{nextTicketOpen}</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-evenly h-[13.12vw] bg-bg-default rounded-[20.11px] px-[1.38vw] text-[1.25vw] font-[500]">
                    <div className="flex gap-[1.38vw] h-[1.52vw]">
                        <span className="text-[#919191]">📍 공연장소</span>
                        <span>{location}</span>
                    </div>
                    <div className="flex gap-[1.38vw] h-[1.52vw]">
                        <span className="text-[#919191]">🗓️ 공연일시</span>
                        <span>{date}</span>
                    </div>
                    <div className="flex gap-[1.38vw] h-[1.52vw]">
                        <span className="text-[#919191]">🕓 러닝타임</span>
                        <span>{runningTime}</span>
                    </div>
                    <div className="flex gap-[1.38vw] h-[1.52vw]">
                        <span className="text-[#919191]">🎫 티켓가격</span>
                        <span>{price}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
