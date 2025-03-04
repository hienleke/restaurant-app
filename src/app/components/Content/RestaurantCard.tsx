import { Restaurant } from "../../types/types";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { trpc } from '../../../utils/trpc';
type Props = {
	restaurant: Restaurant;
};

const RestaurantCard = ({ restaurant }: Props) => {
	if (!restaurant || !restaurant.images) return null;

	const [currentIndex, setCurrentIndex] = useState(0);
	const [showInfo, setShowInfo] = useState(false);
	const toggleFavoriteMutation = trpc.addFavorite.useMutation();
	const [isFavorite, setIsFavorite] = useState(restaurant.isFavorite);

	const nextImage = () => {
		setCurrentIndex((prevIndex) => (prevIndex === restaurant.images.length - 1 ? 0 : prevIndex + 1));
	};

	const prevImage = () => {
		setCurrentIndex((prevIndex) => (prevIndex === 0 ? restaurant.images.length - 1 : prevIndex - 1));
	};

	const handlers = useSwipeable({
		onSwipedLeft: nextImage,
		onSwipedRight: prevImage,
		trackMouse: true,
	});

	const handleToggleFavorite = async (id: string, isFavorite: boolean): Promise<void> => {
		try {
			let updateRes = await toggleFavoriteMutation.mutateAsync({ id, isFavorite: !isFavorite });
			if (updateRes && updateRes.isFavorite !== undefined) {
				setIsFavorite(updateRes?.isFavorite);
			}
		} catch (error) {
		  console.error(error);
		  
		}
		
	  }

	const toggleFavorite = (restaurantId : string, isFavorite : boolean) => {handleToggleFavorite(restaurantId, isFavorite)}

	return (
		<div className="bg-white rounded-lg overflow-hidden z-1">
			<div className="flex flex-row  scrollbar-hide space-x-2">
				<div className="w-full relative flex space-x-4 overflow-hidden">
					<button className="absolute  top-2 right-2 min-w-[36px] min-h-[36px] z-10" onClick={() => toggleFavorite(restaurant.id, isFavorite)}>
						<img
							src={`/icons/cards/favorite_icon${isFavorite ? "_enable" : ""}.svg`} // Path to your SVG in the public folder
							alt="Favorite"
							className={` w-full h-full ${isFavorite ? "text-red-500" : "text-gray-500"}`}
						/>
					</button>
					{/* <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
						{restaurant.images?.map((image, index) => (
							<img key={index} src={image} alt={`${restaurant.name} image ${index + 1}`} width={300} height={200} className="w-full h-40 md:h-48 object-cover rounded-lg flex-shrink-0" />
						))}{" "}
					</div> */}
					<div className="relative w-full">
						<div className="overflow-hidden rounded-lg" {...handlers}>
							<div
								className="flex transition-transform duration-300 ease-in-out"
								style={{ transform: `translateX(-${currentIndex * 100}%)` }}
								onMouseEnter={() => setShowInfo(true)}
								onMouseLeave={() => setShowInfo(false)}
							>
								{restaurant.images?.map((image, index) => (
									<div className="relative flex-shrink-0 w-full" key={index}>
										<img
											src={image}
											alt={`${restaurant.name} not found`}
											className="w-full h-40 md:h-48 object-cover rounded-lg"
										/>
										{showInfo && (
											<div className="absolute inset-0 flex items-center justify-center bg-blue-200 bg-opacity-50 text-white">
											</div>
										)}
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="p-4">
				<div className="flex items-center justify-between">
					<h3 className="text-lg font-semibold text-gray-800 truncate w-full mr-2">{restaurant.name}</h3>
					<span className="text-sm whitespace-nowrap flex items-center gap-1">
						<img src={`icons/cards/star.svg`} alt="Star" className="w-full h-full" />
						{restaurant.rating} ({restaurant.ratingCount})
					</span>
				</div>
				<p className="text-sm text-gray-600 mt-1">{restaurant.description}</p>
			</div>
		</div>
	);
};

export default RestaurantCard;
