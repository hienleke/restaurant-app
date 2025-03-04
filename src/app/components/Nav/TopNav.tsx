import { Category } from "@/app/types/types";
import React, { useState } from 'react';

interface ListCategoriesProps {
  categories: Category[];
  onCategoryClick: (categoryId: number) => void;
}

const TopNav: React.FC<ListCategoriesProps> = ({ categories , onCategoryClick }) => {
  const [categoriesList, setCategories] = useState(categories);

  return (
    <div className="w-full bg-white border-gray-200 p-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
      {categoriesList.map((category) => (
        <button 
          key={category.id} // Assuming each category has a unique id
          className="text-gray-500 hover:text-gray-800 hover:bg-[#F9FAFB] transition bg-white border-none px-4 py-2 rounded inline-block"
          onClick={() => onCategoryClick(category.id)}
        >
          {category.name} {/* Displaying category name */}
        </button>
      ))}
    </div>
  );
};

export default TopNav;