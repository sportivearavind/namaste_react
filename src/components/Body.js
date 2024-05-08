import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState,useEffect } from "react";


const Body = () => {
  // Local State Variable
  const [listOfRestaurants,setListOfRestaurants] = useState(resList);

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    // converting received data to json
    const json = await data.json();
    console.log(json);
    // updating listOfRestaurants to re-render the component finally
    // setListOfRestaurants(json.data.cards);
  }

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" 
        onClick={() => {
          let filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4);
          setListOfRestaurants(filteredList);
        }}
        >Top Rated Restaurant</button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;