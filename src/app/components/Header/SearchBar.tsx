const SearchBar = () => {
    return (
      <div className="w-full p-4 bg-white sticky top-0 z-10">
        <div className="relative">
          <input
            type="text"
            placeholder="맛집 이름을 검색해보세요"
            className="w-full pl-20 p-5 border bg-[#F9FAFB] border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]"
          />
          <div className="absolute left-6 top-1/2 transform -translate-y-1/2">
            <img src="/icons/nav/search.svg" alt="Search Icon" className="w-10 h-10" />
          </div>
        </div>
      </div>
    );
  };
  
  export default SearchBar;
  