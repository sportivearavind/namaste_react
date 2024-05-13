import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, locality, avgRating, costForTwo } =
    resData?.info;
  return (
    <div
      className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200"
    >
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h2 className="font-bold py-4 text-lg">{name}</h2>
      <h3>{locality}</h3>
      <h3>{avgRating + " stars"}</h3>
      <h3>{costForTwo}</h3>
    </div>
  );
};

export const withIsOpenLabel = (RestaurantCard) =>{
  return (props) => {
    return(
      <div>
        <label className="absolute bg-blue-400 text-white m-2 px-2 rounded-lg">Open</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}

export default RestaurantCard;
