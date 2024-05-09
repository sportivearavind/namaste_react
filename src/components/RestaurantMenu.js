import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";


const RestaurantMenu = () =>{

    const [resInfo, setResInfo] = useState(null);

    const {resId} = useParams();

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () =>{
        const data = await fetch(
          "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.89960&lng=80.22090&restaurantId=307780&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER"
        );

        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    }

    if(resInfo === null) return <Shimmer/>

    // Destructuring
    const {name,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

    const { itemCards } =
      resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
      console.log(itemCards);

    return (
      <div className="menu">
        <h1>{name}</h1>
        <h3>{cuisines.join(", ")}</h3>
        <h3>{costForTwoMessage}</h3>
        <h2>Menu</h2>
        <ul>
          {itemCards.map((item) => (
            <li key="item.card.info.id">
              {item.card.info.name} - Rs.{item.card.info.price / 100}
            </li>
          ))}
        </ul>
      </div>
    );
}

export default RestaurantMenu;