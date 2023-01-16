import { restaurantList } from "../config";
import { RestaurantCard } from "./RestaurantCard";
import SearchComponent from "./SearchComponent";

export const BodyComponent = () => {
    return (
      <>
        <SearchComponent />
        <div className="restaurant-list">
          {restaurantList.map((item, index) => {
            return <RestaurantCard key={item.data.id} {...item.data} />;
          })}
        </div>
      </>
    );
   };
   