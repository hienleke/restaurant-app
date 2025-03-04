"use client";

import { trpc } from "../../utils/trpc";
import { useLanguage } from "../providers/LanguageProvider";
import { getTranslations } from "../lib/locales";
import { Restaurant, Category } from "../types/types";
import Image from "next/image";
const RestaurantList = () => {
	//const { data: categories, isLoading: categoriesLoading, error: categoriesError } = trpc.getCategories.useQuery<Category[]>();
	const { data: restaurants, isLoading: restaurantsLoading, error: restaurantsError, refetch } = trpc.getRestaurants.useQuery<Restaurant[]>();

	const { language } = useLanguage();
	const translations = getTranslations(language);

	// Fix mutation handling
	const { mutate, isLoading } = trpc.addFavorite.useMutation({
		onSuccess: () => {
			refetch();
		},
		onError: (error) => {
			console.error("Failed to toggle favorite:", error);
		},
	});

	const toggleFavorite = (id: string, isFavorite: boolean) => {
		mutate({ id, isFavorite });
	};

	if ( restaurantsLoading) return <p>Loading...</p>;
	if ( restaurantsError) return <p>Error loading data.</p>;

	return (
		<div className="min-h-screen bg-gray-100">
			{/* Search Bar */}
			<div className="p-4 bg-white">
				<input type="text" placeholder="맛집 이름을 검색해보세요" className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400" />
			</div>

			{/* Restaurant List */}
			<div className="p-4 space-y-4">
				{restaurants.map((restaurant: Restaurant) => (
					<div key={restaurant.id} className="bg-white rounded-lg overflow-hidden shadow-md">
						<div className="flex flex-row space-x-2 overflow-x-auto scrollbar-hide">
							{restaurant.images.map((imgUrl, index) => (
								<div key={index} className="min-w-[300px]">
									<Image
										src={imgUrl}
										alt={`${restaurant.name} image ${index + 1}`}
										width={300}
										height={200}
										className="w-full h-48 object-cover rounded-lg"
									/>
								</div>
							))}
						</div>
						<div className="p-4">
							<h3 className="text-lg font-semibold text-gray-800">{restaurant.name}</h3>
							<p className="text-sm text-gray-600 mt-1">{restaurant.description}</p>
							<div className="flex justify-between items-center mt-2">
								<span className="text-sm text-yellow-500">
									{restaurant.rating} ({restaurant.ratingCount})
								</span>
								<span className="text-purple-500 text-xl">❤️</span>
							</div>
						</div>
					</div>
				))}
			</div>

			{/* Navigation Bar */}
			<div className="fixed bottom-0 w-full bg-white border-t border-gray-200 p-2 flex justify-around items-center">
				<span className="text-gray-500 text-xl">🏠</span>
				<span className="text-gray-500 text-xl">🔍</span>
				<span className="text-gray-500 text-xl">🍽️</span>
				<span className="text-gray-500 text-xl">📅</span>
				<span className="text-gray-500 text-xl">👤</span>
			</div>
		</div>
	);
};

export default RestaurantList;
