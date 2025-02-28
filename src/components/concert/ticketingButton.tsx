interface TicketingButtonsProps {
    interParkUrl?: string;
    yes24Url?: string;
}

export default function TicketingButtons({ interParkUrl, yes24Url }: TicketingButtonsProps) {
    const handleOpenNewTab = (url?: string) => {
        if (url) {
            window.open(url, '_blank');
        }
    };

    return (
        <div className="flex w-[62.08vw] justify-between my-[1.38vw]">
            <button
                onClick={() => handleOpenNewTab(interParkUrl)}
                className="w-[30.55vw] border-violet-600 border-[2px] h-[4.51vw] rounded-[20px] flex items-center justify-center text-violet-600 text-[1.11vw] font-[700]"
            >
                인터파크에서 티켓팅 하러 가기 ＞
            </button>
            <button
                onClick={() => handleOpenNewTab(yes24Url)}
                className="w-[30.55vw] border-gray-600 border-[2px] h-[4.51vw] rounded-[20px] flex items-center justify-center text-gray-600 text-[1.11vw] font-[700]"
            >
                예스24에서 티켓팅 하러 가기 ＞
            </button>
        </div>
    );
}
