'use client';
import { Map } from 'react-kakao-maps-sdk';

const KakaoMap = () => {
    console.log('ddd');
    console.log(process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID);
    return (
        <div>
            <div>dddd</div>
            <Map center={{ lat: 33.450701, lng: 126.570667 }} style={{ width: '1000px', height: '1000px' }} level={3} />
        </div>
    );
};

export default KakaoMap;
