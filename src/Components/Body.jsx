import { restaurantList } from "../config";
import { RestaurantCard } from "./RestaurantCard";

export const BodyComponent = () => {
    return(
       <div className="restaurant-list">
       {restaurantList.map((item, index)=>{
        return(
          <RestaurantCard key={item.data.id} {...item.data} />
        )
       })}
       </div>
    )
   };
   