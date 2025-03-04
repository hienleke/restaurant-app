const BottomNav = () => {
    return (
        <div className=" fixed w-full bottom-0 pt-2 pb-2 left-0 right-0 w-full bg-white border-t border-gray-200 p-2 flex justify-around items-center">
            <button className="flex flex-col items-center gap-2 text-gray-500 hover:text-[#FF4405] transition">
                <img src="/icons/nav/home.svg" alt="Home" className="w-11 h-11" />
                <span className="text-sm">홈</span>
            </button>
            <button className="flex flex-col items-center gap-2 text-gray-500 hover:text-[#FF4405] transition">
                <img src="/icons/nav/search.svg" alt="Search" className="w-11 h-11" />
                <span className="text-sm">검색</span>
            </button>
            <button className="flex flex-col items-center gap-2 text-gray-500 hover:text-[#FF4405] transition">
                <img src="/icons/nav/message.svg" alt="message" className="w-11 h-11" />
                <span className="text-sm">피드</span>
            </button>
            <button className="flex flex-col items-center gap-2 text-gray-500 hover:text-[#FF4405] transition">
                <img src="/icons/nav/calendar.svg" alt="calendar" className="w-11 h-11" />
                <span className="text-sm">내 예약</span>
            </button>
            <button className="flex flex-col items-center gap-2 text-gray-500 hover:text-[#FF4405] transition">
                <img src="/icons/nav/option.svg" alt="options" className="w-11 h-11" />
                <span className="text-sm">메뉴</span>
            </button>
        </div>
    );
};

export default BottomNav;
