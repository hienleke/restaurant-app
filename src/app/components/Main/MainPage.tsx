"use client";
import SearchBar from "../Header/SearchBar";
import BottomNav from "../Nav/BottomNav";
import TopNav from "../Nav/TopNav";
import { trpc } from "../../../utils/trpc";
import { Restaurant , Category} from "../../types/types";
import ListView from "../Content/ListView";
import { useState } from "react";

export default function MainPage() {
	
	
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);

  const { data: restaurants, isLoading, error } = trpc.getRestaurants.useQuery<Restaurant[]>(undefined, { staleTime: 1000 * 60 * 5, useErrorBoundary: false });
  const { data: categories } = trpc.getCategories.useQuery<Category[]>(undefined, { staleTime: 1000 * 60 * 5, useErrorBoundary: false });

  if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error.message}</div>;
  }
  
  const handleCategoryClick = async (categoryId: number) => {
    setSelectedCategoryId(categoryId);
  };

	return (
		<div className="relative min-h-screen items-center justify-center bg-gray-100 flex flex-col bg-white text-base sm:text-lg md:text-xl lg:text-2xl transition-colors hover:text-gray-700">
			<header className="fixed w-full top-0 left-0 right-0 z-20">
				<SearchBar />
        <TopNav categories={categories || []}
          onCategoryClick={handleCategoryClick} />
			</header>
			<ListView restaurants={restaurants ?? []} />
			<BottomNav />
		</div>
	);
}
