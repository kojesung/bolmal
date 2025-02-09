'use client';

import { useStore } from '@/hooks/useUserInfo';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useEffect } from 'react';

export default function UserOption() {
    const isLoggedIn = useStore((state) => state.userInfo.isLoggedIn);
    const userName = useStore((state) => state.userInfo.name);
    const removeUserState = useStore((state) => state.removeUserState);
    const { status } = useSession();
    useEffect(() => {
        if (status === 'unauthenticated') {
            // 5. status는 'un~~~'가 되고
            removeUserState(); // 6. 유저 정보까지 삭제
        }
    }, [status, removeUserState]); // 4. 카카오 로그아웃이 됐으니 status가 바뀌고

    const logOut = async () => {
        // 1. 로그아웃을 누르면
        if (status === 'authenticated') {
            // 2. 카카오 로그인일 때
            await signOut({
                // 3. 카카오 로그아웃이 되고
                callbackUrl: '/',
            });
        }
        removeUserState(); // 내부 로그인일 땐 이거만
    };

    if (isLoggedIn) {
        return (
            <div className="flex items-center gap-4">
                <span className="text-primary font-medium">{userName}</span>
                <button onClick={logOut} className="text-gray-600 hover:text-primary">
                    로그아웃
                </button>
            </div>
        );
    } else {
        return (
            <Link href="/login" className="text-gray-600 hover:text-primary transition-colors">
                로그인/회원가입
            </Link>
        );
    }
}
