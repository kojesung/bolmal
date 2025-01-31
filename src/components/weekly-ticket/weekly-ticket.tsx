import Image from 'next/image';
import test1 from '../../../public/ㅂㄹㅁㄹ.svg';

export default function WeeklyTicke() {
    const testObj = [
        { id: '1', url: test1 },
        { id: '2', url: test1 },
        { id: '3', url: test1 },
        { id: '4', url: test1 },
        { id: '5', url: test1 },
        { id: '6', url: test1 },
        { id: '7', url: test1 },
        { id: '8', url: test1 },
    ];
    return (
        <div>
            <div className="p-[20px] flex">
                <Image src={testObj[0].url} alt={testObj[0].id}></Image>
                <div>5</div>
                <div className="py-[21.5px]">설명</div>
            </div>
        </div>
    );
}
