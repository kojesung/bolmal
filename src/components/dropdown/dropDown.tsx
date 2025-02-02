import { SortType } from '@/app/concert/page';
import { Dispatch, SetStateAction } from 'react';

interface DropDownProps {
    sortType: SortType;
    setSortType: Dispatch<SetStateAction<SortType>>;
}

export default function DropDown({ sortType, setSortType }: DropDownProps) {
    setSortType('latest');
    return <div>{sortType}</div>;
}
