import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCard from "./RestaurantCard";
import RestaurantCategory from "./RestaurantCategory";



const RestaurantMenu = () =>{

    // const [resInfo, setResInfo] = useState(null);

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);


    if(resInfo === null) return <Shimmer/>

    // Destructuring
    const {name,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

    const { itemCards } =
      resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

      const categories =
        resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" );
      
      // console.log(categories);  
      

    return (
      <div className="text-center">
        <h1 className="font-bold my-6 text-2xl">{name}</h1>
        <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>
        {
          // categories accordion
        }
        {
          categories.map((category) => <RestaurantCategory data={category?.card?.card} />)
        }
      </div>
    );
}

export default RestaurantMenu;