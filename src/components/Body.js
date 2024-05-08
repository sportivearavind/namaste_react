import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // Local State Variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant,setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    // converting received data to json
    const json = await data.json();
    console.log(json);
    // updating listOfRestaurants to re-render the component finally
    // setListOfRestaurants(json.data.cards);
    // setFilteredRestaurant(json.data.cards);
  };

  // Conditional rendering
  if(listOfRestaurants.length === 0){
    return <Shimmer/>;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" 
          value={searchText} 
          className="search-box" 
          onChange={(e)=>{
            setSearchText(e.target.value);
          }} 
          />
          <button onClick={()=>{
            // filter the restaurants
            const filteredList = listOfRestaurants.filter((res)=>{
              res.info.name.toLowerCase().includes(searchText);
            });
            setFilteredRestaurant(filteredList);

          }}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            let filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(filteredList);
            console.log(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
