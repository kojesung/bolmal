import { SortType } from '@/app/concert/page';
import { Dispatch, SetStateAction, useRef, useState } from 'react';

interface DropDownProps {
    sortType: SortType;
    setSortType: Dispatch<SetStateAction<SortType>>;
}

export default function DropDown({ sortType, setSortType }: DropDownProps) {
    const [view, setView] = useState<boolean>(false); // 드롭다운 눌렀는지 안 눌렀는지 판단하는 상태
    const dropdownRef = useRef<HTMLDivElement>(null);

    const sortTypeText = {
        near: '티켓오픈 가까운 순',
        popularity: '인기순',
        latest: '최신 등록순',
    };

    return (
        <div ref={dropdownRef} className="relative">
            <ul
                onClick={() => {
                    setView((prev) => !prev);
                }}
            >
                <div className="w-[10.62vw] h-[38px] rounded-[10px] border-primary border-[2px] bg-white flex justify-center items-center mb-[10px] text-primary font-[700] text-[15px]">
                    {sortTypeText[sortType]} 🔻
                </div>
                {view && (
                    <div className="absolute z-50 bg-white">
                        <li>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation(); // 상위 div에 setView(true)가 있어서 이벤트 버블링 방지 목적
                                    setSortType('near');
                                    setView(false);
                                }}
                            >
                                티켓오픈 가까운 순
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSortType('popularity');
                                    setView(false);
                                }}
                            >
                                인기순
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSortType('latest');
                                    setView(false);
                                }}
                            >
                                최신 등록 순
                            </button>
                        </li>
                    </div>
                )}
            </ul>
        </div>
    );
}
