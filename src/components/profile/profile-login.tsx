import { UserInfo } from '@/hooks/useUserInfo';
import Image from 'next/image';
import defaultImg from '../../../public/ㅂㄹㅁㄹ.svg';

export default function ProfileLogin({ userInfo }: { userInfo: UserInfo }) {
    return (
        <div className="h-[320px] flex flex-col gap-[10px]">
            <div className="flex flex-col rounded-[20px] bg-white w-[19.58vw] h-[160px] border-[1px] border-[#F0F0F0] gap-[16px] p-[20px]">
                <div className="flex flex-col">
                    <div className="flex">
                        <Image
                            className="h-[55px] w-[55px] rounded-[50%] bg-black"
                            src={userInfo.imgUrl ? userInfo.imgUrl : defaultImg}
                            alt="프로필"
                            width={55}
                            height={55}
                        ></Image>
                        <div className="py-[5px] ml-[1.38vw]">
                            <div className="text-[18px]">
                                <span className="font-[700]">{userInfo.name}</span>
                                <span className="font-[500]">님</span>
                            </div>
                            <span>{userInfo.isSubscribe ? '프리미엄 구독중' : '무료버전 이용중'}</span>
                        </div>
                    </div>
                </div>
                <div className="bg-[#F7F7F7] w-[16.80vw] h-[49px] flex justify-between rounded-[10px] p-[15px]">
                    <div className="flex">
                        <Image src={defaultImg} alt="타임어택" className="w-[20px] h-[20px] mr-[0.62vw]"></Image>
                        <span className="text-[15px] font-[500]">다가오는 티켓팅</span>
                    </div>
                    {userInfo.onComming !== '' ? (
                        <span className="font-[700] text-[15px]">{userInfo.onComming}전</span>
                    ) : (
                        <span className="font-[700] text-[15px]">없음</span>
                    )}
                </div>
            </div>
            <div className="rounded-[20px] bg-white w-[19.58vw] h-[70px] border-[1px] border-[#F0F0F0] py-[15px] px-[1.73vw] flex justify-between">
                <div className="flex">
                    <Image src={defaultImg} alt="알람" className="h-[40px] w-[40px] mr-[1.388vw]"></Image>
                    <span className="py-[9px]">알람 이용권</span>
                </div>
                <span className="py-[9px] text-[18px] font-[700]">{userInfo.alarmTicket}개</span>
            </div>
            <div className="rounded-[20px] bg-white w-[19.58vw] h-[70px] border-[1px] border-[#F0F0F0] py-[15px] px-[1.73vw] flex justify-between">
                <div className="flex">
                    <Image src={defaultImg} alt="알람" className="h-[40px] w-[40px] mr-[1.388vw]"></Image>
                    <span className="py-[9px]">찜 이용권</span>
                </div>
                <span className="py-[9px] text-[18px] font-[700]">{userInfo.zzimTicket}개</span>
            </div>
        </div>
    );
}
