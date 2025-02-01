import Ad from '@/components/ad';
import NowBolmal from '@/components/now-bolmal/now-bolmal';

import Profile from '@/components/profile/profile';
import WeeklyTicke from '@/components/weekly-ticket/weekly-ticket';

export default function Home() {
    return (
        <div>
            <div className="bg-bg-default flex py-[20px] px-[120px] justify-between">
                <Ad></Ad>
                <Profile></Profile>
            </div>
            <div className="bg-white px-[120px] py-[30px]">
                <NowBolmal></NowBolmal>
            </div>
            <div className="bg-[#FAFAFA] px-[120px] pt-[30px]">
                <WeeklyTicke></WeeklyTicke>
            </div>
        </div>
    );
}
