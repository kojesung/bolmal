'use client';

import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import Button from './button';
import { useRouter } from 'next/navigation';
import { useStore } from '@/hooks/useUserInfo';
import { useEffect } from 'react';
import KakaoLogin from './kakao-login';
import { fetchInstance } from '@/utils/fetchInstance';
import { getAccessToken } from '@/utils/auth/refresh';

interface HookFormType {
    id: string;
    password: string;
}

export default function LoginForm() {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        getValues,
        setError,
        formState: { errors },
    } = useForm<HookFormType>();
    const checkIdPw = () => {
        setError('password', { message: '비밀번호 또는 아이디가 일치하지 않습니다' });
    };

    const toSignUp = () => {
        router.push('/sign-up');
    };

    const setUserState = useStore((state) => state.setUserState);
    const userName = useStore((state) => state.userInfo.name);
    useEffect(() => {
        if (userName) {
            console.log('유저이름 :', userName);
        }
    }, [userName]);

    const onValid: SubmitHandler<HookFormType> = async () => {
        const id = getValues('id');
        const pw = getValues('password');
        const loginBody = {
            username: id,
            password: pw,
        };
        try {
            const response = await fetchInstance(
                '/login',
                {
                    method: 'POST',
                    body: JSON.stringify(loginBody),
                },
                false
            );
            console.log('전체 응답', getAccessToken()); // 엑세스 토큰 확인

            if (response.code === 'COMMON200') {
                // 성공 코드 확인
                setUserState(
                    response.result.id,
                    response.result.name,
                    response.result.onCommingDate,
                    response.result.alarmTicketCnt,
                    response.result.zzimTicketCnt,
                    response.result.isSubscribe,
                    response.result.imgUrl
                );
                router.push('/');
            } else {
                console.log('여기2', response.code);
                checkIdPw(); // 로그인 실패 처리
            }
        } catch (error) {
            console.error('Login error:', error);
            checkIdPw();
        }
    };
    const onInValid: SubmitErrorHandler<HookFormType> = () => {
        console.error('no');
        checkIdPw();
    };
    return (
        <div className="flex flex-col justify-center items-center">
            <form className="flex flex-col" onSubmit={handleSubmit(onValid, onInValid)}>
                <div className="flex flex-col gap-2">
                    <input
                        {...register('id', {
                            required: true,
                            minLength: 4,
                            maxLength: { value: 16, message: '설정할 에러 메세지' },
                        })}
                        placeholder="아이디"
                        type="text"
                        className="bg-bg-default w-[500px] h-[64px] rounded-[20px] border-[1px]"
                    />
                    <input
                        {...register('password', { required: true, minLength: 8, maxLength: 16 })}
                        placeholder="비밀번호"
                        type="password"
                        className="bg-bg-default w-[500px] h-[64px] rounded-[20px] border-[1px]"
                    />
                </div>
                <div className="flex flex-row gap-2 mt-5 mb-9">
                    <input type="checkbox" />
                    <div className="flex flex-row w-full justify-between">
                        <p>아이디 저장</p>
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                    </div>
                </div>
                <Button size="large">로그인</Button>
            </form>
            <div className="flex flex-row gap-2 mt-10">
                <button className="text-[#686868]">아이디 찾기</button>
                <p className="text-[#C7C7C7]">|</p>
                <button className="text-[#686868]">비밀번호 찾기</button>
                <p className="text-[#C7C7C7]">|</p>
                <button onClick={toSignUp} className="text-[#ff4869]">
                    회원가입
                </button>
            </div>
            <div>
                <KakaoLogin></KakaoLogin>
                <button>네이버</button>
            </div>
        </div>
    );
}
