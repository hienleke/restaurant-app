import React, { useState} from 'react';
import RestaurantCard from './RestaurantCard';
import { Restaurant } from '../../types/types';
import { trpc } from '../../../utils/trpc';


interface ListViewProps {
  restaurants: Restaurant[];
}

const ListView: React.FC<ListViewProps> = ({ restaurants }) => {
  const [restaurantList, setRestaurantList] = useState(restaurants);
    


  return (
    <div className="p-4 space-y-4 w-full">
      {restaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant}  />
      ))}
    </div>
  );
};

export default ListView;