export default function Search() {
    return (
        <div className="relative">
            <input
                type="text"
                placeholder="검색어를 입력하세요"
                className="w-[500px] h-[48px] px-4 py-2 rounded-[20px] bg-bg-default border border-gray-200 focus:outline-none focus:border-primary"
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2">🔍</button>
        </div>
    );
}
