'use client';

import { fetchInstance } from '@/utils/fetchInstance';
import { useStore } from './useUserInfo';

export default function useKakaoLogin() {
    const setUserState = useStore((state) => state.setUserState);

    const handleKakaoLogin = async (name: string, email: string) => {
        //name과 email로 서버에 fetch하는 내용
        //이 밑은 임시로 로그인하도록 구현
        const userInfoBody = {
            name: name,
            email: email,
        };
        const userInfoData = await fetchInstance(
            '/oauth/kakao/front',
            { method: 'POST', body: JSON.stringify(userInfoBody) },
            false
        );
        setUserState(
            userInfoData.result.memberId,
            userInfoData.result.name,
            userInfoData.result.upComming,
            userInfoData.result.alarmCount,
            userInfoData.result.bookmarkCount,
            userInfoData.result.subcribe,
            userInfoData.result.imagePath
        );
    };

    return handleKakaoLogin;
}
